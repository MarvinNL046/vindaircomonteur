import { Metadata } from 'next';
import Link from 'next/link';
import { getAllCities, getFacilitiesByCity, createCitySlug, createCountySlug, createStateSlug, type Facility } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Building, Info } from 'lucide-react';
import FacilityCard from '@/components/FacilityCard';
import LeaderboardAd from '@/components/ads/LeaderboardAd';
import SidebarAd from '@/components/ads/SidebarAd';
import InlineAd from '@/components/ads/InlineAd';
import { AD_SLOTS } from '@/lib/ad-config';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Limit static generation to top 200 cities to stay under Vercel's 75MB limit
export async function generateStaticParams() {
  const cities = await getAllCities();
  // Take first 200 cities (sorted by facility count would be better but this is simpler)
  return cities.slice(0, 200).map((city) => ({
    slug: createCitySlug(city),
  }));
}

// Allow dynamic params for cities not in static params
export const dynamicParams = true;

// Revalidate pages every 24 hours
export const revalidate = 86400;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cities = await getAllCities();
  const city = cities.find(c => createCitySlug(c) === slug);

  if (!city) {
    return {
      title: 'City not found',
    };
  }

  const facilities = await getFacilitiesByCity(city);
  const county = facilities[0]?.county || '';
  const state = facilities[0]?.state || '';

  return {
    title: `Airco Monteurs in ${city} | VindAircoMonteur.nl`,
    description: `Vind alle ${facilities.length} airco installateurs en monteurs in ${city}, ${county ? `gemeente ${county}, ` : ''}${state}. Bekijk locaties, diensten en contactgegevens van lokale airco specialisten.`,
    openGraph: {
      title: `Airco Monteurs in ${city}`,
      description: `Alle airco installateurs in ${city}${county ? `, gemeente ${county}` : ''}`,
      type: 'website',
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params;
  const cities = await getAllCities();
  const city = cities.find(c => createCitySlug(c) === slug);

  if (!city) {
    notFound();
  }

  const facilities = await getFacilitiesByCity(city);

  if (facilities.length === 0) {
    notFound();
  }

  const county = facilities[0]?.county || '';
  const state = facilities[0]?.state || '';
  const stateAbbr = facilities[0]?.state_abbr || '';

  // Count facility types
  const typeCount = facilities.reduce((acc: Record<string, number>, facility: Facility) => {
    const typeName = facility.type || 'Airco Installateur';
    acc[typeName] = (acc[typeName] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Treatment Centers in ${city}`,
    description: `Directory of all addiction treatment centers and rehab facilities in ${city}${county ? `, ${county} County` : ''}`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.rehabnearbyme.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: state,
          item: `https://www.rehabnearbyme.com/state/${createStateSlug(state)}`
        },
        ...(county ? [{
          '@type': 'ListItem',
          position: 3,
          name: `${county} County`,
          item: `https://www.rehabnearbyme.com/county/${createCountySlug(county)}`
        }] : []),
        {
          '@type': 'ListItem',
          position: county ? 4 : 3,
          name: city,
          item: `https://www.rehabnearbyme.com/city/${slug}`
        }
      ]
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: facilities.length,
      itemListElement: facilities.map((facility, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://www.rehabnearbyme.com/facility/${facility.slug}`
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Leaderboard Ad at top */}
      <LeaderboardAd slot={AD_SLOTS.city.topLeaderboard} />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-foreground">Home</Link></li>
            <li>/</li>
            <li>
              <Link
                href={`/state/${createStateSlug(state)}`}
                className="hover:text-foreground"
              >
                {state}
              </Link>
            </li>
            {county && (
              <>
                <li>/</li>
                <li>
                  <Link
                    href={`/county/${createCountySlug(county)}`}
                    className="hover:text-foreground"
                  >
                    {county} County
                  </Link>
                </li>
              </>
            )}
            <li>/</li>
            <li className="text-foreground">{city}</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Treatment Centers in {city}
          </h1>
          <p className="text-lg text-muted-foreground">
            There {facilities.length === 1 ? 'is' : 'are'} {facilities.length} {facilities.length === 1 ? 'treatment center' : 'treatment centers'} in {city}{county ? `, ${county} County` : ''}, {state}.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-3">
              <Building className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-2xl font-bold">{facilities.length}</p>
                <p className="text-sm text-muted-foreground">Total</p>
              </div>
            </div>
          </div>
          {Object.entries(typeCount).slice(0, 3).map(([type, count]) => (
            <div key={type} className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="flex items-center gap-3">
                <Info className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-2xl font-bold">{count}</p>
                  <p className="text-sm text-muted-foreground capitalize">{type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inline Ad */}
        <InlineAd slot={AD_SLOTS.city.inFeed} />

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-3">
            {/* Facility List */}
            <div className="space-y-6">
              {facilities.map((facility, index) => (
                <div key={facility.slug}>
                  <FacilityCard facility={facility} />
                  {/* Add inline ad after every 3rd facility */}
                  {(index + 1) % 3 === 0 && index !== facilities.length - 1 && (
                    <div className="mt-6">
                      <InlineAd slot={AD_SLOTS.city.inFeed} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              <SidebarAd slot={AD_SLOTS.city.sidebar} sticky={false} />

              {/* Related Links */}
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Related Pages</h3>
                <ul className="space-y-2">
                  {county && (
                    <li>
                      <Link
                        href={`/county/${createCountySlug(county)}`}
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        All treatment centers in {county} County
                      </Link>
                    </li>
                  )}
                  <li>
                    <Link
                      href={`/state/${createStateSlug(state)}`}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      All treatment centers in {state}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Info Box */}
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Over {city}</h3>
                <p className="text-sm text-muted-foreground">
                  {city} ligt in {county ? `gemeente ${county}, ` : ''}{state}.
                  Deze pagina geeft een overzicht van alle airco installateurs en monteurs in dit gebied.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-12 prose prose-lg max-w-none">
          <h2>Airco Installateurs en Monteurs in {city}</h2>
          <p>
            In {city} vind je verschillende soorten airco bedrijven, van installateurs tot onderhoudsbedrijven
            en warmtepomp specialisten. Elk bedrijf biedt gespecialiseerde diensten voor klimaatbeheersing.
          </p>

          {typeCount['Airco Installateur'] > 0 && (
            <>
              <h3>Airco Installateurs</h3>
              <p>
                {city} heeft {typeCount['Airco Installateur']} airco {typeCount['Airco Installateur'] > 1 ? 'installateurs' : 'installateur'}.
                Deze bedrijven zijn gespecialiseerd in het plaatsen van airconditioningsystemen voor woningen en bedrijven.
              </p>
            </>
          )}

          {typeCount['Warmtepomp Specialist'] > 0 && (
            <>
              <h3>Warmtepomp Specialisten</h3>
              <p>
                Er {typeCount['Warmtepomp Specialist'] > 1 ? 'zijn' : 'is'} {typeCount['Warmtepomp Specialist']} warmtepomp
                {typeCount['Warmtepomp Specialist'] > 1 ? ' specialisten' : ' specialist'} in {city}, die lucht-lucht en lucht-water warmtepompen installeren en onderhouden.
              </p>
            </>
          )}

          <h3>Meer informatie</h3>
          <p>
            Voor meer informatie over een specifieke airco installateur in {city}, klik op het bedrijf
            hierboven. Daar vind je contactgegevens, aangeboden diensten, certificeringen en hoe je een offerte kunt aanvragen.
          </p>
        </div>
      </div>
    </>
  );
}
