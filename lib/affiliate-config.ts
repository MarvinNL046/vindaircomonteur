/**
 * Affiliate Partner Configuration
 *
 * Add affiliate partners here. Set 'active: true' when you have a partner.
 * Ads are only shown when there is at least one active partner.
 */

export interface AffiliatePartner {
  id: string;
  name: string;
  description: string;
  url: string;
  imageUrl?: string;
  buttonText: string;
  active: boolean;
  // Optional tracking parameters
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export const affiliatePartners: AffiliatePartner[] = [
  {
    id: 'airco-installatie',
    name: 'Airco Installatie Offerte',
    description: 'Vergelijk offertes van meerdere gecertificeerde airco installateurs en bespaar op uw installatie.',
    url: 'https://example.com/airco-offerte',
    imageUrl: '/images/affiliates/airco-offerte.png',
    buttonText: 'Vergelijk nu',
    active: false, // Set to true when you have a partner
    utmSource: 'vindaircomonteur',
    utmMedium: 'sidebar',
    utmCampaign: 'airco-installatie',
  },
  {
    id: 'warmtepomp-advies',
    name: 'Warmtepomp Advies',
    description: 'Gratis advies over warmtepompen en subsidiemogelijkheden voor uw woning.',
    url: 'https://example.com/warmtepomp-advies',
    imageUrl: '/images/affiliates/warmtepomp.png',
    buttonText: 'Meer info',
    active: false,
    utmSource: 'vindaircomonteur',
    utmMedium: 'sidebar',
    utmCampaign: 'warmtepomp-advies',
  },
  {
    id: 'onderhoud-contract',
    name: 'Airco Onderhoudscontract',
    description: 'Sluit een onderhoudscontract af voor zorgeloos genieten van uw airco.',
    url: 'https://example.com/onderhoud-contract',
    imageUrl: '/images/affiliates/onderhoud.png',
    buttonText: 'Bekijk opties',
    active: false,
    utmSource: 'vindaircomonteur',
    utmMedium: 'sidebar',
    utmCampaign: 'onderhoud-contract',
  },
  {
    id: 'energie-vergelijken',
    name: 'Energieleverancier Vergelijken',
    description: 'Vergelijk energieleveranciers en bespaar op uw energierekening.',
    url: 'https://example.com/energie-vergelijken',
    imageUrl: '/images/affiliates/energie.png',
    buttonText: 'Vergelijk nu',
    active: false,
    utmSource: 'vindaircomonteur',
    utmMedium: 'sidebar',
    utmCampaign: 'energie-vergelijken',
  },
];

/**
 * Helper function to get active partners
 */
export function getActivePartners(): AffiliatePartner[] {
  return affiliatePartners.filter(partner => partner.active);
}

/**
 * Helper function to check if there are active partners
 */
export function hasActivePartners(): boolean {
  return affiliatePartners.some(partner => partner.active);
}

/**
 * Helper function to build affiliate URL with UTM parameters
 */
export function buildAffiliateUrl(partner: AffiliatePartner): string {
  const url = new URL(partner.url);

  if (partner.utmSource) {
    url.searchParams.set('utm_source', partner.utmSource);
  }
  if (partner.utmMedium) {
    url.searchParams.set('utm_medium', partner.utmMedium);
  }
  if (partner.utmCampaign) {
    url.searchParams.set('utm_campaign', partner.utmCampaign);
  }

  return url.toString();
}
