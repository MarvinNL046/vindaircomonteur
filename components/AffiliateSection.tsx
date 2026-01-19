import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Shield, Wrench } from 'lucide-react';

interface ServicePartner {
  name: string;
  description: string;
  icon: React.ReactNode;
  ctaText: string;
  href: string;
  tag?: string;
}

const partners: ServicePartner[] = [
  {
    name: 'Airco Installatie',
    description: 'Laat uw airco professioneel installeren door een gecertificeerde monteur',
    icon: <Wrench className="w-6 h-6" />,
    ctaText: 'Vind installateur',
    href: '/type/airco-installatie',
    tag: 'Populair'
  },
  {
    name: 'Gratis Advies',
    description: 'Bel voor vrijblijvend advies over airco en warmtepompen',
    icon: <Phone className="w-6 h-6" />,
    ctaText: 'Bel nu',
    href: 'tel:085-1234567',
    tag: 'Gratis'
  },
  {
    name: 'F-gassen Gecertificeerd',
    description: 'Alle monteurs in onze database zijn F-gassen gecertificeerd',
    icon: <Shield className="w-6 h-6" />,
    ctaText: 'Meer info',
    href: '/guide',
  }
];

export default function AffiliateSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-3">Hulp Nodig?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            De eerste stap naar een aangenaam binnenklimaat kan overweldigend zijn.
            Deze services helpen u bij het vinden van de juiste airco oplossing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-cyan-100 rounded-lg text-cyan-700">
                  {partner.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{partner.name}</h3>
                  {partner.tag && (
                    <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded">
                      {partner.tag}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                {partner.description}
              </p>

              <Button
                variant="outline"
                className="w-full group border-cyan-200 text-cyan-700 hover:bg-cyan-50"
                asChild
              >
                <Link href={partner.href}>
                  {partner.ctaText}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-gray-500">
            Alle monteurs zijn F-gassen gecertificeerd volgens EU-wetgeving. Advies is vrijblijvend.
          </p>
        </div>
      </div>
    </section>
  );
}
