import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | VindAircoMonteur.nl',
  description: 'Neem contact op met VindAircoMonteur.nl voor vragen, suggesties of samenwerkingen.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
