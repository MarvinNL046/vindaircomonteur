import { Metadata } from 'next';
import Link from 'next/link';
import { getFacilityBySlug, getAllFacilities, createCountySlug, createStateSlug, getFacilitiesByCity, type FacilityWithContent } from '@/lib/data';
import { notFound } from 'next/navigation';
import { MapPin, Clock, Navigation, ExternalLink, Phone, Star, ChevronDown, Heart, Users, Calendar, CheckCircle2, Sparkles, Car, Accessibility, Building2, TreePine, Info, ChevronRight, ArrowRight, Wrench, Shield, Snowflake, Thermometer, Wind } from 'lucide-react';
import ProxiedImage from '@/components/ProxiedImage';
import CompareButton from '@/components/CompareButton';
import AffiliateAd from '@/components/ads/AffiliateAd';
import InlineAd from '@/components/ads/InlineAd';
import SidebarAd from '@/components/ads/SidebarAd';
import { AD_SLOTS } from '@/lib/ad-config';
import FeedbackForm from '@/components/FeedbackForm';
import ReviewSection from '@/components/ReviewSection';
import PhotoGallery from '@/components/PhotoGallery';
import FavoriteButton from '@/components/FavoriteButton';
import ReadMore from '@/components/ReadMore';
import RelatedGuides from '@/components/RelatedGuides';
import { Card } from '@/components/ui/card';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Limit static generation to top 500 facilities to stay under Vercel's 75MB limit
export async function generateStaticParams() {
  const facilities = await getAllFacilities();
  const topFacilities = facilities
    .sort((a, b) => (parseFloat(String(b.rating || '0')) - parseFloat(String(a.rating || '0'))))
    .slice(0, 500);
  return topFacilities.map((facility) => ({
    slug: facility.slug,
  }));
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const facility = await getFacilityBySlug(slug);

  if (!facility) {
    return {
      title: 'Monteur Niet Gevonden',
    };
  }

  return {
    title: facility.seoTitle || `${facility.name} in ${facility.city}, ${facility.state} | VindAircoMonteur.nl`,
    description: facility.seoDescription || facility.generated?.summary ||
      `Informatie over ${facility.name} in ${facility.city}, ${facility.state}. Bekijk diensten, openingstijden en contactgegevens.`,
    openGraph: {
      title: facility.seoTitle || facility.name,
      description: facility.seoDescription || facility.generated?.summary || `${facility.type} in ${facility.city}`,
      type: 'website',
    },
  };
}

function getTypePlaceholder(type: string): string {
  return '/images/placeholders/airco-monteur.svg';
}

function getTypeIcon(type: string): React.ReactNode {
  const typeLower = type?.toLowerCase() || '';
  if (typeLower.includes('warmtepomp')) return <Wind className="w-5 h-5 text-cyan-600" />;
  if (typeLower.includes('onderhoud')) return <Wrench className="w-5 h-5 text-cyan-600" />;
  if (typeLower.includes('installatie')) return <Thermometer className="w-5 h-5 text-cyan-600" />;
  return <Snowflake className="w-5 h-5 text-cyan-600" />;
}

function getFacilityIcon(facility: string): React.ReactNode {
  const facilityLower = facility.toLowerCase();
  if (facilityLower.includes('parking') || facilityLower.includes('parkeren')) return <Car className="w-4 h-4" />;
  if (facilityLower.includes('certificering') || facilityLower.includes('f-gassen')) return <Shield className="w-4 h-4" />;
  if (facilityLower.includes('garantie')) return <CheckCircle2 className="w-4 h-4" />;
  if (facilityLower.includes('service') || facilityLower.includes('onderhoud')) return <Wrench className="w-4 h-4" />;
  return <CheckCircle2 className="w-4 h-4" />;
}

function generateFAQs(facility: FacilityWithContent) {
  return [
    {
      question: `Wat zijn de openingstijden van ${facility.name}?`,
      answer: facility.opening_hours || 'Openingstijden kunnen variëren. Neem contact op met het bedrijf voor de actuele tijden.'
    },
    {
      question: `Waar is ${facility.name} gevestigd?`,
      answer: facility.generated?.directions || `${facility.name} is gevestigd in ${facility.city}, ${facility.state}. ${facility.address ? `Het adres is ${facility.address}.` : 'Gebruik de routeknop voor navigatie.'}`
    },
    {
      question: `Welke diensten biedt ${facility.name}?`,
      answer: facility.treatment_types?.join(', ') || facility.generated?.amenities?.join(', ') || 'Neem contact op met het bedrijf voor informatie over beschikbare diensten.'
    },
    {
      question: `Is ${facility.name} F-gassen gecertificeerd?`,
      answer: 'Alle airco monteurs in ons netwerk zijn F-gassen gecertificeerd volgens EU-wetgeving. Vraag naar het certificaatnummer voor verificatie.'
    }
  ];
}

export default async function FacilityPage({ params }: PageProps) {
  const { slug } = await params;
  const facility = await getFacilityBySlug(slug);

  if (!facility) {
    notFound();
  }

  // Get similar facilities in same city
  const allFacilities = await getFacilitiesByCity(facility.city);
  const similarFacilities = allFacilities
    .filter(f => f.slug !== facility.slug)
    .slice(0, 4);

  let lat = facility.latitude || null;
  let lon = facility.longitude || null;
  let googleMapsUrl = null;

  if (!lat && !lon && facility.gps_coordinates) {
    const coords = facility.gps_coordinates.split(',').map((coord: string) => coord.trim());
    lat = parseFloat(coords[0]);
    lon = parseFloat(coords[1]);
  }

  if (lat && lon) {
    googleMapsUrl = `https://www.google.com/maps?q=${lat},${lon}`;
  }

  const rating = facility.rating || null;
  const reviewCount = facility.review_count || 0;
  const phone = facility.phone;
  const faqs = generateFAQs(facility);

  // Breadcrumb structured data
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.vindaircomonteur.nl'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: facility.state,
        item: `https://www.vindaircomonteur.nl/provincie/${createStateSlug(facility.state)}`
      },
      ...(facility.county ? [{
        '@type': 'ListItem',
        position: 3,
        name: facility.county,
        item: `https://www.vindaircomonteur.nl/gemeente/${createCountySlug(facility.county)}`
      }] : []),
      {
        '@type': 'ListItem',
        position: facility.county ? 4 : 3,
        name: facility.name,
        item: `https://www.vindaircomonteur.nl/monteur/${facility.slug}`
      }
    ]
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://www.vindaircomonteur.nl/monteur/${facility.slug}`,
    name: facility.name,
    description: facility.generated?.summary || facility.description || `${facility.type} in ${facility.city}, ${facility.state}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: facility.address || '',
      addressLocality: facility.city,
      addressRegion: facility.state,
      addressCountry: 'NL',
      postalCode: facility.zipCode || '',
    },
    ...(lat && lon && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: lat,
        longitude: lon,
      }
    }),
    openingHours: facility.opening_hours,
    telephone: phone || '',
    url: `https://www.vindaircomonteur.nl/monteur/${facility.slug}`,
    ...((facility.photo_url || facility.photo) && { image: facility.photo_url || facility.photo }),
    ...(rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: rating,
        reviewCount: reviewCount,
        bestRating: 5,
        worstRating: 1,
      }
    }),
    priceRange: '$$',
    serviceType: ['Airco Installatie', 'Airco Onderhoud', 'Klimaatbeheersing'],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-700 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-8 relative">
          {/* Breadcrumbs */}
          <nav className="mb-6">
            <ol className="flex items-center flex-wrap gap-2 text-sm text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li>
                <Link
                  href={`/provincie/${createStateSlug(facility.state)}`}
                  className="hover:text-white transition-colors"
                >
                  {facility.state}
                </Link>
              </li>
              {facility.county && (
                <>
                  <li>/</li>
                  <li>
                    <Link
                      href={`/gemeente/${createCountySlug(facility.county)}`}
                      className="hover:text-white transition-colors"
                    >
                      {facility.county}
                    </Link>
                  </li>
                </>
              )}
              <li>/</li>
              <li className="text-white font-medium truncate max-w-[200px]">{facility.name}</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-4">
                {getTypeIcon(facility.type)}
                <span className="capitalize">{facility.type || 'Airco Monteur'}</span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {facility.name}
              </h1>

              {/* Rating and Location */}
              <div className="flex flex-wrap items-center gap-4 text-white/80">
                {rating && (
                  <div className="flex items-center gap-1.5">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${
                            star <= Math.round(rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'fill-gray-400/30 text-gray-400/30'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold text-cyan-300">{rating}</span>
                    <span className="text-white/60">({reviewCount} reviews)</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-300" />
                  <span>{facility.city}, {facility.state_abbr || facility.state}</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                  <Shield className="w-4 h-4 text-cyan-300" />
                  <span>F-gassen Gecertificeerd</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                  <span>Geverifieerd</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:flex-col">
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-cyan-700 font-semibold rounded-lg hover:bg-cyan-50 transition-colors shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>Bel Nu</span>
                </a>
              )}
              <FavoriteButton
                facilitySlug={slug}
                facilityName={facility.name}
                variant="hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="min-h-screen bg-background">
        <div className="container mx-auto py-8 sm:py-12">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Main Column */}
            <div className="flex-1 min-w-0 space-y-6 sm:space-y-8 lg:max-w-2xl xl:max-w-3xl">
              {/* Image */}
              <Card className="aspect-video overflow-hidden relative shadow-soft">
                {(facility.photo_url || facility.photo) ? (
                  <ProxiedImage
                    src={facility.photo_url || facility.photo}
                    alt={facility.name}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-cyan-100 flex items-center justify-center">
                    <Snowflake className="w-20 h-20 text-cyan-300" />
                  </div>
                )}
              </Card>

              {/* About Section */}
              <Card className="p-4 sm:p-6 shadow-soft">
                <h2 className="font-serif text-xl sm:text-2xl font-bold mb-4 text-foreground">Over {facility.name}</h2>
                {facility.enrichedContent ? (
                  <ReadMore text={facility.enrichedContent} maxLength={600} />
                ) : facility.description ? (
                  <ReadMore text={facility.description} maxLength={600} />
                ) : facility.generated?.summary ? (
                  <ReadMore text={facility.generated.summary} maxLength={600} />
                ) : (
                  <p className="text-muted-foreground">
                    {facility.name} is een {facility.type || 'airco monteur'} gevestigd in {facility.city}, {facility.state}.
                    {facility.amenities && facility.amenities.length > 0 && ` Beschikbare diensten zijn onder andere ${facility.amenities.join(', ').toLowerCase()}.`}
                    {` Voor meer informatie over ${facility.name}, neem contact op via de gegevens op deze pagina.`}
                  </p>
                )}
              </Card>

              {/* Diensten */}
              {facility.amenities && facility.amenities.length > 0 && (
                <Card className="p-6 shadow-soft">
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="w-6 h-6 text-cyan-600" />
                    <h2 className="font-serif text-2xl font-bold">Diensten</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {facility.amenities.map((amenity: string, index: number) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-cyan-50 rounded-xl border border-cyan-100">
                        <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 text-cyan-700">
                          {getFacilityIcon(amenity)}
                        </div>
                        <span className="font-medium text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Inline Ad */}
              <InlineAd slot={AD_SLOTS.facility.afterInfo} />

              {/* Service Types */}
              {facility.treatment_types && facility.treatment_types.length > 0 && (
                <Card className="p-6 shadow-soft">
                  <h2 className="font-serif text-2xl font-bold mb-4">Specialisaties</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {facility.treatment_types.map((program: string, index: number) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-cyan-50 rounded-xl border border-cyan-100">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                        <span className="font-medium text-sm">{program}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Merken */}
              {facility.insurance_accepted && facility.insurance_accepted.length > 0 && (
                <Card className="p-6 shadow-soft">
                  <h2 className="font-serif text-2xl font-bold mb-4">Merken</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {facility.insurance_accepted.map((brand: string, index: number) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                        <Snowflake className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                        <span className="text-sm">{brand}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Photo Gallery */}
              <PhotoGallery
                facilitySlug={slug}
                facilityName={facility.name}
              />

              {/* Reviews Section */}
              <ReviewSection
                facilitySlug={slug}
                facilityName={facility.name}
                initialRating={rating || 0}
                initialReviewCount={reviewCount}
                embeddedReviews={facility.reviews}
              />

              {/* Inline Ad after reviews */}
              <InlineAd slot={AD_SLOTS.facility.afterReviews} />

              {/* FAQ Section */}
              <Card className="p-6 shadow-soft">
                <h2 className="font-serif text-2xl font-bold mb-6">Veelgestelde Vragen</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group">
                      <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <span className="font-medium pr-4">{faq.question}</span>
                        <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="px-4 py-3 text-muted-foreground">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </Card>

              {/* Visitor Tips */}
              {facility.generated?.visitor_tips && facility.generated.visitor_tips.length > 0 && (
                <Card className="p-6 shadow-soft">
                  <h2 className="font-serif text-2xl font-bold mb-4">Tips</h2>
                  <ul className="space-y-3">
                    {facility.generated.visitor_tips.map((tip: string, index: number) => (
                      <li key={index} className="flex items-start gap-3 p-3 bg-cyan-50 rounded-xl border border-cyan-100">
                        <span className="text-cyan-500 text-xl">💡</span>
                        <span className="text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {/* Contact Form */}
              <Card id="contact-form" className="p-6 shadow-soft scroll-mt-24">
                <h2 className="font-serif text-2xl font-bold mb-4">Neem Contact Op</h2>
                <p className="text-muted-foreground mb-6">
                  Heeft u vragen over {facility.name}? Vul het formulier in en we helpen u graag verder.
                </p>
                <FeedbackForm
                  pageTitle={facility.name}
                  pageUrl={`/monteur/${slug}`}
                />
              </Card>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-80 xl:w-96 flex-shrink-0 order-first lg:order-last">
              <div className="lg:sticky lg:top-4 space-y-6">
                {/* Business Info Card */}
                <Card className="p-4 sm:p-6 shadow-soft">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                      {getTypeIcon(facility.type)}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {facility.type || 'Airco Monteur'}
                      </p>
                      <p className="font-medium">{facility.city}, {facility.state_abbr}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {phone && (
                      <a href={`tel:${phone}`} className="flex items-center gap-3 p-3 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors">
                        <Phone className="w-5 h-5 text-cyan-600" />
                        <span className="text-sm font-medium">{phone}</span>
                      </a>
                    )}

                    {facility.website && (
                      <a
                        href={facility.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-cyan-600" />
                        <span className="text-sm font-medium truncate">Bezoek Website</span>
                      </a>
                    )}

                    {googleMapsUrl && (
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <Navigation className="w-5 h-5 text-cyan-600" />
                        <span className="text-sm font-medium">Route</span>
                      </a>
                    )}

                    {facility.address && (
                      <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <MapPin className="w-5 h-5 text-cyan-600 mt-0.5" />
                        <div>
                          <p className="text-sm">{facility.address}</p>
                          <p className="text-sm text-muted-foreground">
                            {facility.city}, {facility.state_abbr} {facility.zipCode}
                          </p>
                        </div>
                      </div>
                    )}

                    {facility.opening_hours && (
                      <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <Clock className="w-5 h-5 text-cyan-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Openingstijden</p>
                          <p className="text-sm text-muted-foreground">{facility.opening_hours}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Compare Button */}
                  <div className="mt-6 pt-6 border-t">
                    <CompareButton
                      facilityId={facility.slug}
                      facilityName={facility.name}
                    />
                  </div>
                </Card>

                {/* CTA Card */}
                <Card className="p-4 sm:p-6 shadow-soft bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Snowflake className="w-5 h-5 text-cyan-600" />
                    <span className="font-semibold">Offerte Aanvragen</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Vraag een vrijblijvende offerte aan voor airco installatie of onderhoud.
                  </p>
                  <a
                    href="#contact-form"
                    className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-700 transition-colors"
                  >
                    Vraag Offerte
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Card>

                <AffiliateAd sticky={false} maxPartners={2} />

                {/* Sidebar Ad */}
                <SidebarAd slot={AD_SLOTS.facility.sidebar} sticky={false} />
              </div>
            </div>
          </div>

          {/* Similar Facilities */}
          {similarFacilities.length > 0 && (
            <section className="mt-12 max-w-6xl mx-auto">
              <h2 className="font-serif text-xl sm:text-2xl font-bold mb-6">Airco Monteurs in {facility.city}</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {similarFacilities.map((similar) => (
                  <Link
                    key={similar.slug}
                    href={`/monteur/${similar.slug}`}
                    className="group"
                  >
                    <Card className="h-full p-3 sm:p-4 border-2 border-transparent hover:border-cyan-300 transition-all duration-300">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                          {getTypeIcon(similar.type)}
                        </div>
                        {similar.rating && (
                          <div className="flex items-center gap-1 text-xs sm:text-sm">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                            <span>{similar.rating}</span>
                          </div>
                        )}
                      </div>
                      <h3 className="font-semibold text-sm sm:text-base group-hover:text-cyan-600 transition-colors line-clamp-2">
                        {similar.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground capitalize line-clamp-1">{similar.type}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Discover More Links */}
          <section className="mt-12 max-w-6xl mx-auto">
            <h2 className="font-serif text-xl sm:text-2xl font-bold mb-6">Ontdek Meer</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <Link
                href={`/provincie/${createStateSlug(facility.state)}`}
                className="group"
              >
                <Card className="h-full p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-cyan-300">
                  <h3 className="font-semibold text-sm sm:text-base mb-2 group-hover:text-cyan-600 transition-colors">
                    {facility.state}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                    Alle monteurs in deze provincie
                  </p>
                  <div className="mt-2 sm:mt-3 flex items-center gap-1 text-xs sm:text-sm font-medium text-cyan-600">
                    Bekijk
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </Card>
              </Link>

              {facility.county && (
                <Link
                  href={`/gemeente/${createCountySlug(facility.county)}`}
                  className="group"
                >
                  <Card className="h-full p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-cyan-300">
                    <h3 className="font-semibold text-sm sm:text-base mb-2 group-hover:text-cyan-600 transition-colors">
                      {facility.county}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                      Alle monteurs in deze gemeente
                    </p>
                    <div className="mt-2 sm:mt-3 flex items-center gap-1 text-xs sm:text-sm font-medium text-cyan-600">
                      Bekijk
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </Card>
                </Link>
              )}

              {facility.type && (
                <Link
                  href={`/type/${facility.type_slug || facility.type.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group"
                >
                  <Card className="h-full p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-cyan-300">
                    <h3 className="font-semibold text-sm sm:text-base mb-2 group-hover:text-cyan-600 transition-colors capitalize line-clamp-2">
                      {facility.type}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                      Vergelijkbare diensten
                    </p>
                    <div className="mt-2 sm:mt-3 flex items-center gap-1 text-xs sm:text-sm font-medium text-cyan-600">
                      Bekijk
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </Card>
                </Link>
              )}

              <Link
                href="/compare"
                className="group"
              >
                <Card className="h-full p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-cyan-300">
                  <h3 className="font-semibold text-sm sm:text-base mb-2 group-hover:text-cyan-600 transition-colors">
                    Vergelijken
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                    Vergelijk tot 3 monteurs
                  </p>
                  <div className="mt-2 sm:mt-3 flex items-center gap-1 text-xs sm:text-sm font-medium text-cyan-600">
                    Bekijk
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </Card>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="mt-12 max-w-6xl mx-auto">
            <RelatedGuides
              currentType={facility.type_slug || facility.type?.toLowerCase().replace(/\s+/g, '-')}
              currentState={createStateSlug(facility.state)}
              maxGuides={3}
              variant="card"
              showDescription={true}
            />
          </section>

          {/* Disclaimer */}
          <Card className="mt-12 p-4 sm:p-6 bg-gray-50 max-w-6xl mx-auto">
            <h3 className="font-serif text-lg font-semibold mb-2">Disclaimer</h3>
            <p className="text-sm text-muted-foreground">
              We hebben alle informatie zo zorgvuldig mogelijk verzameld.
              Als u onjuiste of verouderde informatie vindt (zoals adres, beschrijving,
              status of diensten), kunt u een correctieverzoek indienen via het contactformulier.
              Deze directory is alleen voor informatieve doeleinden.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
