import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zoek Airco Monteurs | VindAircoMonteur.nl',
  description: 'Doorzoek onze database van airco installateurs in heel Nederland. Vind airco monteurs op naam, stad, provincie of postcode.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
