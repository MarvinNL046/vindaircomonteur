import { getAllFacilities, getAllFacilityTypes, createStateSlug, createTypeSlug } from './data';

// Interfaces for footer data
export interface FooterState {
  name: string;
  slug: string;
  count: number;
}

export interface FooterType {
  name: string;
  slug: string;
  count: number;
}

export interface FooterGuide {
  href: string;
  label: string;
  description?: string;
}

// Service types section
export const serviceTypes: FooterGuide[] = [
  {
    href: '/type/airco-installatie',
    label: 'Airco Installatie',
    description: 'Professionele installatie van aircosystemen'
  },
  {
    href: '/type/airco-onderhoud',
    label: 'Airco Onderhoud',
    description: 'Periodiek onderhoud en service'
  },
  {
    href: '/type/warmtepomp',
    label: 'Warmtepomp',
    description: 'Duurzame verwarming en koeling'
  },
  {
    href: '/type/split-unit',
    label: 'Split-unit',
    description: 'Enkelvoudige aircosystemen'
  },
  {
    href: '/type/multi-split',
    label: 'Multi-split',
    description: 'Systemen met meerdere binnenunits'
  },
  {
    href: '/type/airco-reparatie',
    label: 'Airco Reparatie',
    description: 'Storingen en reparaties'
  }
];

// Information resources section
export const resources: FooterGuide[] = [
  {
    href: '/guide/airco-kiezen',
    label: 'Airco Kiezen',
    description: 'Hoe kies je de juiste airco'
  },
  {
    href: '/guide/kosten',
    label: 'Kosten & Prijzen',
    description: 'Overzicht van installatiekosten'
  },
  {
    href: '/guide/onderhoud',
    label: 'Onderhoudstips',
    description: 'Tips voor optimale werking'
  },
  {
    href: '/guide/energiebesparing',
    label: 'Energiebesparing',
    description: 'Besparen met een airco'
  },
  {
    href: '/guide/subsidies',
    label: 'Subsidies',
    description: 'Beschikbare regelingen'
  },
  {
    href: '/guide/f-gassen',
    label: 'F-gassen Certificaat',
    description: 'Wat is F-gassen certificering'
  }
];

// Support resources section
export const support: FooterGuide[] = [
  {
    href: '/guide/merken',
    label: 'Airco Merken',
    description: 'Vergelijk Daikin, Mitsubishi, LG etc.'
  },
  {
    href: '/guide/zakelijk',
    label: 'Zakelijke Airco',
    description: 'Klimaatoplossingen voor bedrijven'
  },
  {
    href: '/guide/vergunning',
    label: 'Vergunning & Regels',
    description: 'Waar moet je op letten'
  },
  {
    href: '/guide/warmtepomp-vs-airco',
    label: 'Warmtepomp vs Airco',
    description: 'Verschillen en voordelen'
  },
  {
    href: '/guide/geluid',
    label: 'Geluidsoverlast',
    description: 'Tips voor geluidsbeperking'
  }
];

// Static guides content (pillar pages)
export const guides: FooterGuide[] = [
  {
    href: '/guide/types',
    label: 'Typen Airco',
    description: 'Split, multi-split, mobiel etc.'
  },
  {
    href: '/guide/installatie-proces',
    label: 'Installatieproces',
    description: 'Wat kun je verwachten'
  },
  {
    href: '/guide/seizoensonderhoud',
    label: 'Seizoensonderhoud',
    description: 'Wanneer onderhoud laten doen'
  },
  {
    href: '/guide/problemen',
    label: 'Veelvoorkomende Problemen',
    description: 'Storingen en oplossingen'
  },
  {
    href: '/guide/duurzaamheid',
    label: 'Duurzaamheid',
    description: 'Milieuvriendelijk koelen'
  }
];

// Cache for footer data
let provincesCacheFooter: FooterState[] | null = null;
let typesCacheFooter: FooterType[] | null = null;

/**
 * Get top provinces by installer count
 * @param limit - Maximum number of provinces to return (default 8)
 * @returns Array of provinces sorted by installer count (descending)
 */
export async function getTopProvincesByInstallerCount(limit: number = 8): Promise<FooterState[]> {
  if (provincesCacheFooter && provincesCacheFooter.length >= limit) {
    return provincesCacheFooter.slice(0, limit);
  }

  try {
    const installers = await getAllFacilities();

    // Count installers per province
    const provinceCounts = new Map<string, number>();

    for (const installer of installers) {
      if (installer.state && installer.state.trim()) {
        const province = installer.state.trim();
        provinceCounts.set(province, (provinceCounts.get(province) || 0) + 1);
      }
    }

    // Convert to array and sort by count
    const sortedProvinces: FooterState[] = Array.from(provinceCounts.entries())
      .map(([name, count]) => ({
        name,
        slug: createStateSlug(name),
        count
      }))
      .sort((a, b) => b.count - a.count);

    // Cache the full list
    provincesCacheFooter = sortedProvinces;

    return sortedProvinces.slice(0, limit);
  } catch (error) {
    console.error('Error getting top provinces:', error);
    return [];
  }
}

/**
 * Get top service types by count
 * @param limit - Maximum number of types to return (default 8)
 * @returns Array of types sorted by installer count (descending)
 */
export async function getTopTypesByInstallerCount(limit: number = 8): Promise<FooterType[]> {
  if (typesCacheFooter && typesCacheFooter.length >= limit) {
    return typesCacheFooter.slice(0, limit);
  }

  try {
    const installers = await getAllFacilities();
    const allTypes = await getAllFacilityTypes();

    // Count installers per type
    const typeCounts = new Map<string, number>();
    const typeNames = new Map<string, string>();

    // Build a lookup for type names
    for (const type of allTypes) {
      typeNames.set(type.slug, type.name);
    }

    for (const installer of installers) {
      if (installer.type_slug && installer.type_slug.trim()) {
        const typeSlug = installer.type_slug.trim();
        typeCounts.set(typeSlug, (typeCounts.get(typeSlug) || 0) + 1);

        // Store display name if we have it
        if (installer.type && !typeNames.has(typeSlug)) {
          typeNames.set(typeSlug, installer.type);
        }
      } else if (installer.type && installer.type.trim()) {
        const typeSlug = createTypeSlug(installer.type.trim());
        typeCounts.set(typeSlug, (typeCounts.get(typeSlug) || 0) + 1);
        typeNames.set(typeSlug, installer.type.trim());
      }
    }

    // Convert to array and sort by count
    const sortedTypes: FooterType[] = Array.from(typeCounts.entries())
      .map(([slug, count]) => ({
        name: formatTypeName(typeNames.get(slug) || slug),
        slug,
        count
      }))
      .sort((a, b) => b.count - a.count);

    // Cache the full list
    typesCacheFooter = sortedTypes;

    return sortedTypes.slice(0, limit);
  } catch (error) {
    console.error('Error getting top types:', error);
    return [];
  }
}

/**
 * Format type name for display
 */
function formatTypeName(name: string): string {
  // Convert slug-style names to title case
  if (name.includes('-')) {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  // Capitalize first letter of each word
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Get all footer data in a single call (for server components)
 */
export async function getFooterData(provinceLimit: number = 8, typeLimit: number = 8) {
  const [topProvinces, topTypes] = await Promise.all([
    getTopProvincesByInstallerCount(provinceLimit),
    getTopTypesByInstallerCount(typeLimit)
  ]);

  return {
    states: topProvinces,
    types: topTypes,
    serviceTypes,
    resources,
    support,
    guides
  };
}

/**
 * Clear cache (useful for development/testing)
 */
export function clearFooterCache() {
  provincesCacheFooter = null;
  typesCacheFooter = null;
}

// Backward compatibility aliases
export const treatmentTypes = serviceTypes;
export const getTopStatesByFacilityCount = getTopProvincesByInstallerCount;
export const getTopTypesByFacilityCount = getTopTypesByInstallerCount;
