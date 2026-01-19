'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, MapPin, Send, MessageSquare, Clock, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import InlineAd from '@/components/ads/InlineAd';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-white">Contact</li>
            </ol>
          </nav>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            Contact
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Heeft u een vraag, opmerking of wilt u samenwerken?
            Wij horen graag van u en reageren binnen 1-2 werkdagen.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 shadow-soft">
                <h2 className="font-serif text-2xl font-bold mb-6">Stuur ons een bericht</h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-cyan-50 border border-cyan-200 rounded-lg flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-cyan-700 font-medium">Bericht verzonden!</p>
                      <p className="text-cyan-600 text-sm">
                        Bedankt voor uw bericht. Wij nemen zo snel mogelijk contact met u op.
                        U ontvangt een bevestiging op het opgegeven e-mailadres.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-700 font-medium">Er ging iets mis</p>
                      <p className="text-red-600 text-sm">
                        Probeer het opnieuw of stuur een e-mail naar info@vindaircomonteur.nl.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Naam <span className="text-cyan-600">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Uw naam"
                        className="border-2 focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        E-mailadres <span className="text-cyan-600">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="uw@email.nl"
                        className="border-2 focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Onderwerp <span className="text-cyan-600">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:border-cyan-500 bg-background"
                    >
                      <option value="">Selecteer een onderwerp</option>
                      <option value="general">Algemene vraag</option>
                      <option value="information">Informatie toevoegen/wijzigen</option>
                      <option value="partnership">Samenwerking</option>
                      <option value="technical">Technisch probleem</option>
                      <option value="other">Anders</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Bericht <span className="text-cyan-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Uw bericht..."
                      className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:border-cyan-500 resize-none bg-background"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-cyan-600 text-white hover:bg-cyan-700"
                  >
                    {isSubmitting ? (
                      <>Verzenden...</>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Verstuur bericht
                      </>
                    )}
                  </Button>
                </form>
              </Card>

              <InlineAd />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info Card */}
              <Card className="p-6 shadow-soft">
                <h3 className="font-serif text-lg font-semibold mb-4">Contactgegevens</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-cyan-700" />
                    </div>
                    <div>
                      <p className="font-medium">E-mail</p>
                      <a
                        href="mailto:info@vindaircomonteur.nl"
                        className="text-sm text-cyan-600 hover:underline"
                      >
                        info@vindaircomonteur.nl
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-cyan-700" />
                    </div>
                    <div>
                      <p className="font-medium">Locatie</p>
                      <p className="text-sm text-muted-foreground">
                        Nederland
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-cyan-700" />
                    </div>
                    <div>
                      <p className="font-medium">Reactietijd</p>
                      <p className="text-sm text-muted-foreground">
                        Binnen 1-2 werkdagen
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* FAQ Topics Card */}
              <Card className="p-6 shadow-soft">
                <h3 className="font-serif text-lg font-semibold mb-4">Veelgestelde Onderwerpen</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Informatie Toevoegen</p>
                      <p className="text-xs text-muted-foreground">
                        Bent u airco monteur? Wij voegen graag uw informatie toe.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Onjuiste Informatie</p>
                      <p className="text-xs text-muted-foreground">
                        Klopt er iets niet? Laat het ons weten zodat we het kunnen corrigeren.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Samenwerking</p>
                      <p className="text-xs text-muted-foreground">
                        Geinteresseerd in een partnerschap? Wij horen graag van u.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Admin Verification Card */}
              <Card className="p-6 shadow-soft bg-gradient-to-br from-cyan-50 to-blue-50/50 dark:from-cyan-900/20 dark:to-blue-900/10 border-cyan-100 dark:border-cyan-800">
                <h3 className="font-serif text-lg font-semibold mb-3">Voor Airco Monteurs</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Bent u airco monteur en wilt u zorgen dat uw informatie correct en volledig is?
                  Neem contact op voor een gratis verificatie van uw vermelding.
                </p>
                <a
                  href="mailto:info@vindaircomonteur.nl?subject=Vermelding Verificatie"
                  className="inline-flex items-center gap-2 text-sm font-medium text-cyan-600 hover:underline"
                >
                  Verificatie aanvragen
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="font-serif text-2xl font-semibold mb-4">
              Liever direct zoeken?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Doorzoek onze uitgebreide database met airco monteurs door heel Nederland.
            </p>
            <Link
              href="/search"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition-colors"
            >
              Zoek Airco Monteurs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
