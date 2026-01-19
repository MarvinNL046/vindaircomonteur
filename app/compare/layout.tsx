import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vergelijk Airco Installateurs | VindAircoMonteur.nl',
  description: 'Vergelijk airco installateurs naast elkaar. Bekijk details, fotos, beoordelingen en diensten om de juiste monteur te vinden.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
