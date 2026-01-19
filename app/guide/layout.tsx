import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | VindAircoMonteur.nl Gidsen',
    default: 'Airco Gidsen & Informatie | VindAircoMonteur.nl',
  },
  description: 'Uitgebreide gidsen over airco installatie, onderhoud, kosten, F-gassen certificering en tips voor het kiezen van de juiste airco.',
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-secondary/20 min-h-screen">
      {children}
    </div>
  );
}
