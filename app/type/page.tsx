import { Metadata } from 'next';
import Link from 'next/link';
import { Wrench, Thermometer, Wind, Snowflake, Settings, Zap, Building2, Shield, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Airco Diensten - Zoek per Categorie | VindAircoMonteur.nl',
  description: 'Doorzoek airco monteurs per dienst: installatie, onderhoud, reparatie, warmtepompen en meer. Vind de juiste specialist voor uw wensen.',
  openGraph: {
    title: 'Airco Diensten - Zoek per Categorie',
    description: 'Vind de juiste airco specialist voor uw wensen.',
  }
};

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'airco-installatie': Wrench,
  'airco-onderhoud': Settings,
  'warmtepomp': Wind,
  'split-unit': Snowflake,
  'multi-split': Building2,
  'klimaatbeheersing': Thermometer,
  'airco-reparatie': Zap,
  'f-gassen-service': Shield,
};

const categories = [
  {
    title: 'Installatie',
    types: ['airco-installatie', 'split-unit', 'multi-split', 'vloermodel', 'plafondmodel']
  },
  {
    title: 'Onderhoud & Service',
    types: ['airco-onderhoud', 'airco-reparatie', 'f-gassen-service']
  },
  {
    title: 'Klimaat Oplossingen',
    types: ['warmtepomp', 'klimaatbeheersing', 'mobiele-airco', 'zakelijk']
  },
];

// Service type definitions
const serviceTypes: Record<string, { name: string; description: string }> = {
  'airco-installatie': {
    name: 'Airco Installatie',
    description: 'Professionele installatie van airconditioningsystemen voor woningen en bedrijven.'
  },
  'airco-onderhoud': {
    name: 'Airco Onderhoud',
    description: 'Periodiek onderhoud en service voor optimale prestaties en levensduur.'
  },
  'warmtepomp': {
    name: 'Warmtepomp Installatie',
    description: 'Installatie van lucht-lucht en lucht-water warmtepompen voor verwarming en koeling.'
  },
  'split-unit': {
    name: 'Split-unit Airco',
    description: 'Installatie van split-unit systemen met aparte binnen- en buitenunit.'
  },
  'multi-split': {
    name: 'Multi-split Systeem',
    description: 'Multi-split systemen met meerdere binnenunits op een buitenunit.'
  },
  'klimaatbeheersing': {
    name: 'Klimaatbeheersing',
    description: 'Complete klimaatoplossingen voor optimaal binnenklimaat.'
  },
  'airco-reparatie': {
    name: 'Airco Reparatie',
    description: 'Snelle reparatie en storingsoplossing van aircosystemen.'
  },
  'f-gassen-service': {
    name: 'F-gassen Certificering',
    description: 'Service door F-gassen gecertificeerde monteurs conform EU-wetgeving.'
  },
  'vloermodel': {
    name: 'Vloermodel Airco',
    description: 'Installatie van vloermodellen en consolemodellen.'
  },
  'plafondmodel': {
    name: 'Plafondmodel Airco',
    description: 'Plafond- en cassette-aircos voor kantoren en commerciele ruimtes.'
  },
  'mobiele-airco': {
    name: 'Mobiele Airco',
    description: 'Advies en installatie van mobiele airconditioners.'
  },
  'zakelijk': {
    name: 'Zakelijke Airco',
    description: 'Klimaatoplossingen voor bedrijven, kantoren, winkels en horeca.'
  },
};

export default function ServiceTypesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-700 to-cyan-600 text-white py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-white">Diensten</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">
            Airco Diensten
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Vind de juiste specialist voor uw wensen. Van installatie en onderhoud
            tot reparatie en klimaatbeheersing.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {categories.map((category) => (
          <section key={category.title} className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
              {category.title}
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.types.map((typeSlug) => {
                const type = serviceTypes[typeSlug];
                if (!type) return null;
                const Icon = categoryIcons[typeSlug] || Snowflake;

                return (
                  <Link key={typeSlug} href={`/type/${typeSlug}`}>
                    <Card className="p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-cyan-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground mb-1 truncate">
                            {type.name}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {type.description}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}

        {/* Full List */}
        <section className="mt-12 bg-cyan-50 rounded-xl p-6">
          <h2 className="font-serif text-xl font-bold text-foreground mb-4">
            Alle Diensten
          </h2>
          <div className="flex flex-wrap gap-2">
            {Object.entries(serviceTypes).map(([slug, type]) => (
              <Link
                key={slug}
                href={`/type/${slug}`}
                className="px-3 py-1 bg-white rounded-full text-sm hover:bg-cyan-600 hover:text-white transition-colors"
              >
                {type.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Brand Specialists */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
            Merk Specialisten
          </h2>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {['Daikin', 'Mitsubishi', 'Toshiba', 'LG', 'Samsung', 'Panasonic'].map((brand) => (
              <Link key={brand} href={`/search?brand=${brand.toLowerCase()}`}>
                <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="font-semibold text-foreground">{brand}</h3>
                  <p className="text-xs text-muted-foreground">Specialist</p>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
