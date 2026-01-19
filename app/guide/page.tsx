import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Building2, Star, ClipboardList, Flag, Leaf, Users, Snowflake } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAllGuideCards, GUIDE_AUTHOR } from '@/lib/guide-data';

export const metadata: Metadata = {
  title: 'Airco Gids & Informatie | VindAircoMonteur.nl',
  description: 'Uitgebreide gidsen over airconditioning: hoe kies je de juiste airco, wat kost een installatie, F-gassen certificering en onderhoudstips.',
  keywords: 'airco gids, airconditioning kiezen, airco kosten, F-gassen, airco onderhoud, warmtepomp, split-unit',
  openGraph: {
    title: 'Airco Gids & Informatie | VindAircoMonteur.nl',
    description: 'Uitgebreide gidsen over airconditioning in Nederland.',
    type: 'website',
    url: 'https://www.vindaircomonteur.nl/guide',
  },
  alternates: {
    canonical: 'https://www.vindaircomonteur.nl/guide',
  },
};

// Icon mapping for guide cards
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  building: Building2,
  star: Star,
  clipboard: ClipboardList,
  flag: Flag,
  leaf: Leaf,
};

// Color mapping for guide cards
const colorMap: Record<string, { bg: string; text: string; hover: string }> = {
  forest: { bg: 'bg-cyan-100', text: 'text-cyan-700', hover: 'group-hover:bg-cyan-200' },
  gold: { bg: 'bg-amber-100', text: 'text-amber-700', hover: 'group-hover:bg-amber-200' },
  slate: { bg: 'bg-slate-100', text: 'text-slate-700', hover: 'group-hover:bg-slate-200' },
  navy: { bg: 'bg-blue-100', text: 'text-blue-700', hover: 'group-hover:bg-blue-200' },
  green: { bg: 'bg-emerald-100', text: 'text-emerald-700', hover: 'group-hover:bg-emerald-200' },
};

export default function GuidePage() {
  const guideCards = getAllGuideCards();

  // JSON-LD structured data for breadcrumbs
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.vindaircomonteur.nl',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Gids',
        item: 'https://www.vindaircomonteur.nl/guide',
      },
    ],
  };

  // JSON-LD for the collection page
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Airco Gids & Informatie',
    description: 'Uitgebreide gidsen over airconditioning: hoe kies je de juiste airco, wat kost een installatie, F-gassen certificering en onderhoudstips.',
    url: 'https://www.vindaircomonteur.nl/guide',
    publisher: {
      '@type': 'Organization',
      name: 'VindAircoMonteur.nl',
      url: 'https://www.vindaircomonteur.nl',
    },
    author: {
      '@type': 'Organization',
      name: GUIDE_AUTHOR.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cyan-700 to-cyan-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Handige Informatie
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Airco Gids
              <span className="block text-cyan-300">&amp; Informatie</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Praktische gidsen om je te helpen de juiste airco te kiezen,
              een betrouwbare monteur te vinden en je systeem optimaal te onderhouden.
            </p>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="relative mt-8">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" className="fill-white"/>
          </svg>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-cyan-600 transition-colors">
              Home
            </Link>
          </li>
          <li className="text-muted-foreground/50">/</li>
          <li className="text-foreground font-medium" aria-current="page">
            Gids
          </li>
        </ol>
      </nav>

      {/* Guide Cards Grid */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guideCards.map((guide) => {
              const IconComponent = iconMap[guide.icon] || Snowflake;
              const colors = colorMap[guide.color] || colorMap.forest;

              return (
                <Link key={guide.slug} href={`/guide/${guide.slug}`} className="group">
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                    <div className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.hover} flex items-center justify-center mb-5 transition-colors`}>
                      <IconComponent className={`w-7 h-7 ${colors.text}`} />
                    </div>
                    <h2 className="font-serif text-xl font-semibold mb-3 group-hover:text-cyan-600 transition-colors">
                      {guide.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {guide.description}
                    </p>
                    <span className="text-sm font-medium text-cyan-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Lees Gids
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Author/E-E-A-T Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-white">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-cyan-700" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-semibold mb-2">
                  {GUIDE_AUTHOR.name}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {GUIDE_AUTHOR.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {GUIDE_AUTHOR.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-cyan-50 rounded-full text-xs font-medium text-cyan-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
            Klaar om een Monteur te Vinden?
          </h2>
          <p className="text-muted-foreground mb-8">
            Gebruik onze zoekmachine om airco monteurs bij jou in de buurt te vinden.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/search">
              <Button variant="default" size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                Zoek Monteurs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/provincie">
              <Button variant="outline" size="lg" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50">
                Zoek per Provincie
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
