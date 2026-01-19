import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/components';
import { ContactFormEmail } from '@/emails/ContactFormEmail';
import { ContactConfirmationEmail } from '@/emails/ContactConfirmationEmail';

// Initialize Resend only when API key is available (prevents build errors)
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Subject label mapping
const subjectLabels: Record<string, string> = {
  general: 'Algemene vraag',
  information: 'Informatie toevoegen/bijwerken',
  partnership: 'Samenwerking',
  technical: 'Technisch probleem',
  other: 'Anders',
};

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Alle velden zijn verplicht' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ongeldig e-mailadres' },
        { status: 400 }
      );
    }

    const subjectLabel = subjectLabels[subject] || subject;

    // Render email templates
    const adminEmailHtml = await render(
      ContactFormEmail({
        name,
        email,
        subject,
        subjectLabel,
        message,
      })
    );

    const confirmationEmailHtml = await render(
      ContactConfirmationEmail({
        name,
        subjectLabel,
        message,
      })
    );

    // Plain text version for better deliverability
    const adminEmailText = `
Nieuw contactbericht via VindAircoMonteur.nl

Van: ${name}
E-mail: ${email}
Onderwerp: ${subjectLabel}

Bericht:
${message}

---
Dit bericht is verzonden via het contactformulier op vindaircomonteur.nl
    `.trim();

    // Check if Resend is configured
    if (!resend) {
      console.warn('Resend API key not configured');
      return NextResponse.json(
        { error: 'E-mailservice niet geconfigureerd' },
        { status: 500 }
      );
    }

    // Send email to site owner with tags
    const { error } = await resend.emails.send({
      from: 'VindAircoMonteur.nl <noreply@vindaircomonteur.nl>',
      to: ['info@vindaircomonteur.nl'],
      replyTo: email,
      subject: `[Contact] ${subjectLabel} - ${name}`,
      html: adminEmailHtml,
      text: adminEmailText,
      headers: {
        'List-Unsubscribe': '<https://www.vindaircomonteur.nl/unsubscribe>',
      },
      tags: [
        { name: 'platform', value: 'vindaircomonteur' },
        { name: 'type', value: 'contact-form' },
        { name: 'category', value: subject },
      ],
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Er is iets misgegaan bij het verzenden van je bericht' },
        { status: 500 }
      );
    }

    // Plain text confirmation
    const confirmationEmailText = `
Beste ${name},

Bedankt voor je bericht. We hebben je bericht ontvangen en zullen zo snel mogelijk reageren.

Onderwerp: ${subjectLabel}

Je bericht:
${message}

Met vriendelijke groet,
VindAircoMonteur.nl

---
Dit is een automatische bevestiging. Reageer niet op deze e-mail.
https://www.vindaircomonteur.nl
    `.trim();

    // Send confirmation email to the sender with tags
    await resend.emails.send({
      from: 'VindAircoMonteur.nl <noreply@vindaircomonteur.nl>',
      to: [email],
      subject: 'Bevestiging: Je bericht is ontvangen',
      html: confirmationEmailHtml,
      text: confirmationEmailText,
      headers: {
        'List-Unsubscribe': '<https://www.vindaircomonteur.nl/unsubscribe>',
      },
      tags: [
        { name: 'platform', value: 'vindaircomonteur' },
        { name: 'type', value: 'contact-confirmation' },
        { name: 'category', value: subject },
      ],
    });

    return NextResponse.json(
      { message: 'Bericht succesvol verzonden' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Er is een onverwachte fout opgetreden' },
      { status: 500 }
    );
  }
}
