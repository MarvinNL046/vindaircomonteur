import { Metadata } from 'next';
import Link from 'next/link';
import { getAllFacilityTypes, getFacilitiesByFacilityType, getFacilityTypeBySlug, FacilityType, Facility } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Building, MapPin, ChevronRight, ArrowRight, Clock, Shield, Info } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface PageProps {
  params: Promise<{
    type: string;
  }>;
}

const typeDescriptions: Record<string, string> = {
  'airco-installateur': 'Airco installateurs zijn gespecialiseerd in het plaatsen van airconditioningsystemen voor woningen en bedrijven. Ze zorgen voor professionele installatie volgens F-gassen regelgeving.',
  'warmtepomp-specialist': 'Warmtepomp specialisten installeren en onderhouden lucht-lucht en lucht-water warmtepompen voor effici\u00EBnt verwarmen en koelen van je woning.',
  'klimaattechniek-bedrijf': 'Klimaattechniek bedrijven bieden complete oplossingen voor klimaatbeheersing, inclusief airco, ventilatie en luchtvochtigheidsregeling.',
  'koeltechniek-bedrijf': 'Koeltechniek bedrijven zijn gespecialiseerd in professionele koelinstallaties voor zowel particuliere als zakelijke toepassingen.',
  'airco-onderhoudsbedrijf': 'Airco onderhoudsbedrijven verzorgen periodiek onderhoud, filters vervangen en controles om je airco optimaal te laten functioneren.',
  'split-unit-specialist': 'Split-unit specialisten installeren en onderhouden single en multi-split aircosystemen voor woningen en kleine kantoren.',
  'daikin-dealer': 'Daikin dealers zijn erkende installateurs voor Daikin airconditioners en warmtepompen, een van de toonaangevende merken in klimaattechniek.',
  'mitsubishi-dealer': 'Mitsubishi Electric dealers installeren airconditioners van dit Japanse premiummerk, bekend om fluisterstille werking en betrouwbaarheid.',
  'lg-dealer': 'LG dealers zijn gespecialiseerd in LG airconditioners, bekend om hun moderne design en slimme functies.',
  'samsung-dealer': 'Samsung dealers installeren Samsung airconditioners met innovatieve Wind-Free technologie voor comfortabele koeling.',
  'toshiba-dealer': 'Toshiba dealers zijn experts in Toshiba aircosystemen, de uitvinder van de split-unit airconditioning.',
};

export async function generateStaticParams() {
  const types = await getAllFacilityTypes();
  return types.map(type => ({
    type: type.slug,
  }));
}

// Revalidate pages every 24 hours
export const revalidate = 86400;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { type: typeSlug } = await params;
  const type = await getFacilityTypeBySlug(typeSlug);

  if (!type) {
    return { title: 'Service Type Niet Gevonden' };
  }

  return {
    title: `${type.name} in Nederland | VindAircoMonteur.nl`,
    description: `Vind ${type.name.toLowerCase()} in heel Nederland. Bekijk locaties, diensten en certificeringen.`,
    openGraph: {
      title: `${type.name} in Nederland`,
      description: `Alle ${type.name.toLowerCase()} in Nederland`,
      type: 'website',
    },
  };
}

export default async function TypePage({ params }: PageProps) {
  const { type: typeSlug } = await params;
  const type = await getFacilityTypeBySlug(typeSlug);

  if (!type) {
    notFound();
  }

  const facilities = await getFacilitiesByFacilityType(type.slug);
  const description = typeDescriptions[typeSlug] || type.description;

  // Group by state
  const facilitiesByState = facilities.reduce((acc, facility) => {
    const state = facility.state || 'Unknown';
    if (!acc[state]) {
      acc[state] = [];
    }
    acc[state].push(facility);
    return acc;
  }, {} as Record<string, Facility[]>);

  const stateCount = Object.keys(facilitiesByState).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-primary-foreground/70">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/type" className="hover:text-white transition-colors">Types</Link></li>
              <li>/</li>
              <li className="text-white">{type.name}</li>
            </ol>
          </nav>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            {type.name} Treatment Centers
          </h1>

          {description && (
            <p className="text-primary-foreground/80 text-lg max-w-3xl mb-8">
              {description}
            </p>
          )}

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            <div>
              <div className="text-3xl font-bold text-coral-300">{facilities.length}</div>
              <div className="text-primary-foreground/70 text-sm">Treatment Centers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-coral-300">{stateCount}</div>
              <div className="text-primary-foreground/70 text-sm">States</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {facilities.length > 0 ? (
            <div className="space-y-12">
              {Object.entries(facilitiesByState)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([state, stateFacilities]) => (
                  <div key={state}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="font-serif text-2xl font-bold">{state}</h2>
                        <p className="text-sm text-muted-foreground">
                          {stateFacilities.length} {stateFacilities.length !== 1 ? 'treatment centers' : 'treatment center'}
                        </p>
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {stateFacilities.map((facility) => (
                        <Link
                          key={facility.slug}
                          href={`/facility/${facility.slug}`}
                          className="group"
                        >
                          <Card className="h-full p-4 border-2 border-transparent hover:border-accent/30 transition-all duration-300">
                            <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                              {facility.name}
                            </h3>
                            <div className="space-y-1 text-sm text-muted-foreground">
                              <p className="flex items-center gap-2">
                                <Building className="w-4 h-4 text-teal-600" />
                                <span>{facility.city}{facility.county ? `, ${facility.county}` : ''}</span>
                              </p>
                              {facility.phone && (
                                <p className="text-xs">{facility.phone}</p>
                              )}
                            </div>
                            <div className="mt-3 flex items-center gap-1 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                              View
                              <ChevronRight className="w-4 h-4" />
                            </div>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground mb-4">
                No {type.name.toLowerCase()} treatment centers found yet. We are continuously adding new locations.
              </p>
              <Link
                href="/search"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                Search All Treatment Centers
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>
          )}

          {/* Info Cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <Card className="p-6 shadow-soft">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">
                Many treatment centers offer 24/7 admissions support.
                Call directly to speak with an intake specialist about immediate availability.
              </p>
            </Card>
            <Card className="p-6 shadow-soft">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Info className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Insurance Coverage</h3>
              <p className="text-sm text-muted-foreground">
                Most facilities accept major insurance plans including Medicare and Medicaid.
                Contact the center to verify your specific coverage.
              </p>
            </Card>
            <Card className="p-6 shadow-soft">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Confidential Care</h3>
              <p className="text-sm text-muted-foreground">
                All treatment centers maintain strict confidentiality and comply with HIPAA
                regulations to protect your privacy.
              </p>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="font-serif text-2xl font-semibold mb-4">
              Looking for a specific treatment center?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Use our search feature to find treatment centers by name, location, or insurance accepted.
            </p>
            <Link
              href="/search"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Search Treatment Centers
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
