import Link from 'next/link';
import { BookOpen, Snowflake, Shield, Wind, Wrench, Thermometer } from 'lucide-react';

interface GuideLink {
  href: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  keywords: string[];
}

// All available guides/pillar pages with their metadata
const allGuides: GuideLink[] = [
  {
    href: '/guide/types',
    label: 'Soorten Airco Systemen',
    description: 'Leer over verschillende airco opties, van split-unit tot multi-split systemen.',
    icon: BookOpen,
    keywords: ['type', 'soort', 'split', 'multi', 'systeem']
  },
  {
    href: '/type/airco-installatie',
    label: 'Airco Installatie Gids',
    description: 'Uitgebreide gids voor het installeren van uw airconditioning.',
    icon: Wrench,
    keywords: ['installatie', 'montage', 'plaatsen', 'aanleggen']
  },
  {
    href: '/guide/brands',
    label: 'Airco Merken Vergelijken',
    description: 'Vergelijk topmerken zoals Daikin, Mitsubishi, LG en Samsung.',
    icon: Shield,
    keywords: ['merk', 'brand', 'daikin', 'mitsubishi', 'lg', 'samsung']
  },
  {
    href: '/type/warmtepomp',
    label: 'Warmtepomp Informatie',
    description: 'Alles over warmtepompen voor verwarmen en koelen.',
    icon: Wind,
    keywords: ['warmtepomp', 'verwarming', 'energie', 'duurzaam']
  },
  {
    href: '/type/airco-onderhoud',
    label: 'Airco Onderhoud Tips',
    description: 'Hoe u uw airco optimaal onderhoudt voor langere levensduur.',
    icon: Thermometer,
    keywords: ['onderhoud', 'service', 'filter', 'reiniging']
  }
];

// Sub-pillar content for specific service types
const typeSubGuides: Record<string, GuideLink[]> = {
  'airco-installatie': [
    {
      href: '/guide/types#split-unit',
      label: 'Split-unit Airco',
      description: 'Populairste keuze voor woningen.',
      icon: Snowflake,
      keywords: ['split', 'unit', 'woning']
    }
  ],
  'warmtepomp': [
    {
      href: '/guide/types#warmtepomp',
      label: 'Warmtepomp Systemen',
      description: 'Energiezuinig verwarmen en koelen.',
      icon: Wind,
      keywords: ['warmtepomp', 'energie']
    }
  ],
  'airco-onderhoud': [
    {
      href: '/guide/maintenance',
      label: 'Onderhoudstips',
      description: 'Verleng de levensduur van uw airco.',
      icon: Wrench,
      keywords: ['onderhoud', 'tips']
    }
  ]
};

interface RelatedGuidesProps {
  currentType?: string;
  currentProvince?: string;
  maxGuides?: number;
  className?: string;
  showDescription?: boolean;
  variant?: 'default' | 'compact' | 'card';
}

export default function RelatedGuides({
  currentType,
  currentProvince,
  maxGuides = 3,
  className = '',
  showDescription = true,
  variant = 'default'
}: RelatedGuidesProps) {
  // Calculate relevance score for each guide
  const scoredGuides = allGuides.map(guide => {
    let score = 0;

    // Boost score based on type match
    if (currentType) {
      const typeSlug = currentType.toLowerCase();
      if (guide.keywords.some(kw => typeSlug.includes(kw))) {
        score += 10;
      }

      // Check for specific type sub-guides
      if (typeSubGuides[typeSlug]) {
        score += 5;
      }
    }

    // Boost installation guide for all pages (always relevant)
    if (guide.href === '/type/airco-installatie') {
      score = Math.max(score, 2);
    }

    // Always include the types guide at minimum score
    if (guide.href === '/guide/types') {
      score = Math.max(score, 1);
    }

    return { ...guide, score };
  });

  // Get type-specific sub-guides
  const specificGuides: GuideLink[] = currentType && typeSubGuides[currentType.toLowerCase()]
    ? typeSubGuides[currentType.toLowerCase()]
    : [];

  // Sort by score and take top guides
  const topGuides = scoredGuides
    .sort((a, b) => b.score - a.score)
    .slice(0, maxGuides - specificGuides.length);

  // Combine specific and general guides
  const guidesToShow = [...specificGuides, ...topGuides].slice(0, maxGuides);

  if (guidesToShow.length === 0) return null;

  if (variant === 'compact') {
    return (
      <div className={`${className}`}>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Handige Informatie
        </h3>
        <ul className="space-y-2">
          {guidesToShow.map((guide) => (
            <li key={guide.href}>
              <Link
                href={guide.href}
                className="text-sm text-cyan-600 hover:underline flex items-center gap-2"
              >
                <guide.icon className="w-4 h-4 flex-shrink-0" />
                {guide.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`bg-muted/50 rounded-lg p-6 ${className}`}>
        <h3 className="font-semibold text-lg mb-4">Gerelateerde Gidsen</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guidesToShow.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group bg-background rounded-lg p-4 border hover:border-cyan-300 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-cyan-100 rounded-lg group-hover:bg-cyan-200 transition-colors">
                  <guide.icon className="w-5 h-5 text-cyan-700" />
                </div>
                <h4 className="font-medium text-sm group-hover:text-cyan-700 transition-colors">
                  {guide.label}
                </h4>
              </div>
              {showDescription && (
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {guide.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`${className}`}>
      <h3 className="font-semibold text-lg mb-4">Gerelateerde Gidsen</h3>
      <div className="space-y-4">
        {guidesToShow.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group flex items-start gap-4 p-4 rounded-lg border hover:border-cyan-300 hover:bg-cyan-50/50 transition-all"
          >
            <div className="p-2 bg-cyan-100 rounded-lg group-hover:bg-cyan-200 transition-colors flex-shrink-0">
              <guide.icon className="w-5 h-5 text-cyan-700" />
            </div>
            <div>
              <h4 className="font-medium group-hover:text-cyan-700 transition-colors">
                {guide.label}
              </h4>
              {showDescription && (
                <p className="text-sm text-muted-foreground mt-1">
                  {guide.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
