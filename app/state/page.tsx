import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ChevronRight, Building2, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { getAllStates, getAllFacilities, State, Facility } from '@/lib/data';
import { getStatesComingSoonText } from '@/lib/stats-config';

export const metadata: Metadata = {
  title: 'Airco Monteurs per Provincie | VindAircoMonteur.nl',
  description: 'Vind airco monteurs in alle 12 Nederlandse provincies. Zoek installateurs, onderhoudsbedrijven en klimaatspecialisten bij jou in de buurt.',
  openGraph: {
    title: 'Airco Monteurs per Provincie | VindAircoMonteur.nl',
    description: 'Vind airco monteurs in alle 12 Nederlandse provincies.',
    url: 'https://vindaircomonteur.nl/state',
  }
};

// Revalidate every 24 hours
export const revalidate = 86400;

export default async function StatesPage() {
  const [statesData, facilitiesData] = await Promise.all([
    getAllStates(),
    getAllFacilities()
  ]);
  const facilities = facilitiesData;

  // Get facility count for each province
  const statesWithCounts = statesData.map((state) => {
    const stateFacilities = facilities.filter((c: Facility) =>
      c.state === state.abbr || c.state === state.name || c.state_abbr === state.abbr
    );
    const uniqueCounties = [...new Set(stateFacilities.map(c => c.county).filter(Boolean))];
    const uniqueCities = [...new Set(stateFacilities.map(c => c.city).filter(Boolean))];

    return {
      ...state,
      facilityCount: stateFacilities.length,
      countyCount: uniqueCounties.length,
      cityCount: uniqueCities.length,
    };
  });

  // Sort by facility count (provinces with data first) then alphabetically
  const sortedStates = statesWithCounts.sort((a, b) => {
    if (b.facilityCount !== a.facilityCount) {
      return b.facilityCount - a.facilityCount;
    }
    return a.name.localeCompare(b.name);
  });

  const activeStates = sortedStates.filter(s => s.facilityCount > 0);
  const pendingStates = sortedStates.filter(s => s.facilityCount === 0);
  const totalFacilities = activeStates.reduce((sum, s) => sum + s.facilityCount, 0);
  const totalMunicipalities = activeStates.reduce((sum, s) => sum + s.countyCount, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-700 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-white">Provincies</li>
            </ol>
          </nav>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            Airco Monteurs per Provincie
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Ontdek airco installateurs, onderhoudsbedrijven en klimaatspecialisten
            in alle 12 Nederlandse provincies. Selecteer een provincie om lokale monteurs te vinden.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-8">
            <div>
              <div className="text-3xl font-bold text-cyan-300">{statesData.length}</div>
              <div className="text-white/70 text-sm">Provincies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-300">{totalFacilities.toLocaleString('nl-NL')}</div>
              <div className="text-white/70 text-sm">Monteurs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-300">{totalMunicipalities.toLocaleString('nl-NL')}</div>
              <div className="text-white/70 text-sm">Gemeenten</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Active Provinces Grid */}
          {activeStates.length > 0 && (
            <>
              <h2 className="font-serif text-2xl font-semibold mb-6">
                Provincies met Monteurs
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                {activeStates.map((state) => (
                  <Link
                    key={state.abbr}
                    href={`/provincie/${state.slug}`}
                    className="group"
                  >
                    <Card className="h-full p-6 border-2 border-transparent hover:border-cyan-300/50 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                          <MapPin className="w-6 h-6 text-cyan-700 group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-muted-foreground">{state.abbr}</span>
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-cyan-50 transition-colors">
                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-cyan-600 transition-colors" />
                          </div>
                        </div>
                      </div>

                      <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-cyan-600 transition-colors">
                        {state.name}
                      </h3>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Monteurs</span>
                          <span className="font-semibold text-cyan-600">{state.facilityCount.toLocaleString('nl-NL')}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Gemeenten</span>
                          <span className="font-medium">{state.countyCount}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Steden</span>
                          <span className="font-medium">{state.cityCount}</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t">
                        <span className="text-sm font-medium text-cyan-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                          Bekijk monteurs
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </>
          )}

          {/* All Provinces Grid */}
          <h2 className="font-serif text-2xl font-semibold mb-6">
            {activeStates.length > 0 ? 'Alle Provincies' : 'Zoek per Provincie'}
          </h2>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {sortedStates.map((state) => (
              <Link
                key={state.abbr}
                href={`/provincie/${state.slug}`}
                className={`group p-4 rounded-lg border transition-all ${
                  state.facilityCount > 0
                    ? 'hover:border-cyan-300 hover:bg-cyan-50'
                    : 'border-dashed opacity-60 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium group-hover:text-cyan-600 transition-colors">
                      {state.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {state.facilityCount > 0
                        ? `${state.facilityCount} monteurs`
                        : 'Binnenkort'
                      }
                    </div>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{state.abbr}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming Soon Section */}
          {pendingStates.length > 0 && activeStates.length > 0 && (
            <div className="mt-16">
              <Card className="p-8 bg-cyan-50/50 border-dashed border-cyan-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-cyan-700" />
                  </div>
                  <div>
                    <h2 className="font-serif text-lg font-semibold mb-2">Meer Provincies Binnenkort</h2>
                    <p className="text-muted-foreground mb-3">
                      We breiden ons netwerk continu uit met nieuwe monteurs door heel Nederland.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Momenteel bezig met data voor {pendingStates.length} provincies waaronder {pendingStates.slice(0, 3).map(s => s.name).join(', ')}.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="font-serif text-2xl font-semibold mb-4">
              Niet zeker waar te zoeken?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Gebruik onze zoekmachine om monteurs te vinden op naam, stad, postcode of dienst.
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
