/**
 * Central Statistics Configuration for VindAircoMonteur.nl
 *
 * Update these values in ONE place when data changes.
 * All components and pages import from here.
 *
 * Last update: 2025-01-19
 * - Dutch airco monteur directory configuration
 */

export const SITE_STATS = {
  // Display values (formatted for UI)
  totalFacilitiesDisplay: '500',  // Estimated airco monteurs
  totalFacilitiesExact: 500,

  // Geographic coverage - Netherlands
  totalStates: 12,  // Dutch provinces
  totalMunicipalities: 342,  // Dutch gemeenten
  totalCities: 2500,  // Approximate cities/towns

  // Dynamic placeholder (when API hasn't loaded yet)
  facilitiesPlaceholder: '500+',

  // Site info
  siteName: 'VindAircoMonteur',
  siteUrl: 'https://www.vindaircomonteur.nl',
  country: 'Nederland',
  countryShort: 'NL',

  // Airco service stats
  installateurCount: 300,
  onderhoudsbedrijfCount: 150,
  warmtepompSpecialistCount: 100,
  reparatieServiceCount: 200,

  // Market statistics
  aircosInNederland: '1,5 miljoen',
  jaarlijkseInstallaties: '100.000',
  gemiddeldePrijs: '2.000 - 3.500',

  // Top provinces by monteur count
  topProvinces: {
    noordHolland: 80,
    zuidHolland: 90,
    noordBrabant: 60,
    gelderland: 45,
    utrecht: 40,
  },

  // Service types
  serviceTypesCount: 8,
  brandsSupported: 20,
  totalReviewsDisplay: '5.000+',
} as const;

/**
 * Get formatted stats description for SEO and meta tags
 */
export function getStatsDescription(variant: 'short' | 'long' | 'seo' = 'short'): string {
  switch (variant) {
    case 'short':
      return `Vind airco monteurs in alle ${SITE_STATS.totalStates} provincies.`;
    case 'long':
      return `Doorzoek ons uitgebreide netwerk van ${SITE_STATS.totalFacilitiesDisplay}+ airco installateurs, onderhoudsbedrijven en klimaatspecialisten in alle ${SITE_STATS.totalStates} provincies van ${SITE_STATS.country}.`;
    case 'seo':
      return `Vind airco monteurs, installateurs en onderhoudsbedrijven bij jou in de buurt. Zoek op provincie, stad of postcode. Bekijk reviews, diensten en contactgegevens van F-gassen gecertificeerde monteurs in ${SITE_STATS.country}.`;
    default:
      return `Vind airco monteurs in alle ${SITE_STATS.totalStates} provincies.`;
  }
}

/**
 * Get CTA stats text for blog pages and promotional sections
 */
export function getCtaStatsText(): string {
  return `Zoek direct naar airco monteurs in ons uitgebreide netwerk met meer dan ${SITE_STATS.totalFacilitiesDisplay} installateurs.`;
}

/**
 * Get FAQ answer about monteur count
 */
export function getFaqFacilitiesAnswer(): string {
  return `${SITE_STATS.country} heeft honderden airco installateurs en klimaattechnici, verspreid over alle ${SITE_STATS.totalStates} provincies. Van grote landelijke bedrijven tot lokale specialisten - er is altijd een F-gassen gecertificeerde monteur bij jou in de buurt.`;
}

/**
 * Get "why us" feature text
 */
export function getComprehensiveDataText(): string {
  return `Informatie over airco monteurs in alle ${SITE_STATS.totalStates} provincies met geverifieerde gegevens, diensten en contactinformatie.`;
}

/**
 * Get provinces message for empty province pages
 */
export function getStatesComingSoonText(): string {
  return `We breiden ons netwerk continu uit met nieuwe monteurs in alle ${SITE_STATS.totalStates} provincies. Check binnenkort opnieuw!`;
}

/**
 * Get market statistics text
 */
export function getMarketStatsText(): string {
  return `Er zijn meer dan ${SITE_STATS.aircosInNederland} airconditioners geinstalleerd in Nederland, met jaarlijks ${SITE_STATS.jaarlijkseInstallaties} nieuwe installaties. De gemiddelde prijs voor een complete airco installatie ligt tussen ${SITE_STATS.gemiddeldePrijs} euro.`;
}
