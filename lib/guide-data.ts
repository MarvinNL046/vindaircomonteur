// Guide data types and loading functions for SEO pillar pages

// ===== INTERFACES =====

export interface FAQ {
  question: string;
  answer: string;
}

export interface GuideSection {
  id: string;
  title: string;
  content: string;
  subsections?: {
    title: string;
    content: string;
  }[];
}

export interface PillarGuide {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  introduction: string;
  sections: GuideSection[];
  faqs: FAQ[];
  relatedGuides: string[];
  lastUpdated?: string;
  author?: string;
}

export interface GuideCard {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

// ===== GUIDE CARDS DATA =====

export const pillarGuideCards: GuideCard[] = [
  {
    slug: 'airco-kiezen',
    title: 'Airco Kiezen',
    description: 'Ontdek welke airco het beste bij jouw situatie past. Van split-unit tot multi-split systeem.',
    icon: 'building',
    color: 'forest',
  },
  {
    slug: 'monteur-kiezen',
    title: 'Monteur Kiezen',
    description: 'Tips voor het selecteren van een betrouwbare en gecertificeerde airco installateur.',
    icon: 'star',
    color: 'gold',
  },
  {
    slug: 'kosten-overzicht',
    title: 'Kosten Overzicht',
    description: 'Wat kost een airco? Complete prijsindicatie voor installatie, onderhoud en reparatie.',
    icon: 'clipboard',
    color: 'slate',
  },
  {
    slug: 'f-gassen',
    title: 'F-gassen Certificering',
    description: 'Waarom F-gassen certificering belangrijk is en hoe je dit controleert.',
    icon: 'flag',
    color: 'navy',
  },
  {
    slug: 'onderhoud',
    title: 'Airco Onderhoud',
    description: 'Alles over onderhoud: wanneer, waarom en wat het kost.',
    icon: 'leaf',
    color: 'green',
  },
];

// ===== PILLAR GUIDE CONTENT =====

export const pillarGuides: Record<string, PillarGuide> = {
  'airco-kiezen': {
    slug: 'airco-kiezen',
    title: 'De Juiste Airco Kiezen',
    seoTitle: 'De Juiste Airco Kiezen: Complete Gids | VindAircoMonteur.nl',
    seoDescription: 'Ontdek welke airco het beste bij jouw situatie past. Vergelijk split-units, multi-split systemen en warmtepompen. Advies over merken, capaciteit en energielabels.',
    introduction: 'Het kiezen van de juiste airconditioning kan overweldigend zijn met alle opties op de markt. Van split-units tot multi-split systemen en van wandmodellen tot plafondcassettes - deze gids helpt je de beste keuze te maken voor jouw situatie.',
    sections: [],
    faqs: [
      {
        question: 'Wat is het verschil tussen een split-unit en multi-split systeem?',
        answer: 'Een split-unit bestaat uit een binnenunit en een buitenunit en koelt doorgaans een ruimte. Een multi-split systeem heeft meerdere binnenunits aangesloten op een buitenunit, waardoor je meerdere ruimtes kunt koelen met een systeem.',
      },
      {
        question: 'Welke airco capaciteit heb ik nodig?',
        answer: 'Als vuistregel geldt 100 watt koelvermogen per vierkante meter. Voor een kamer van 30m2 heb je dus ongeveer 3.000 watt (3 kW) nodig. Factoren zoals isolatie, ramen op het zuiden en warmtebronnen kunnen dit beinvloeden.',
      },
      {
        question: 'Welk merk airco is het beste?',
        answer: 'Topmerken zijn Daikin, Mitsubishi Electric, Toshiba, LG, Samsung en Panasonic. Daikin en Mitsubishi staan bekend om betrouwbaarheid en efficiëntie. De beste keuze hangt af van je budget en specifieke wensen.',
      },
    ],
    relatedGuides: ['monteur-kiezen', 'kosten-overzicht', 'f-gassen'],
    lastUpdated: '2025-01-18',
    author: 'VindAircoMonteur.nl Redactie',
  },
  'monteur-kiezen': {
    slug: 'monteur-kiezen',
    title: 'Een Goede Airco Monteur Kiezen',
    seoTitle: 'Een Goede Airco Monteur Kiezen: Tips & Checklist | VindAircoMonteur.nl',
    seoDescription: 'Leer hoe je een betrouwbare airco monteur kiest. Checklist voor certificeringen, referenties, garantie en wat je moet vragen voor je een offerte accepteert.',
    introduction: 'Een goede installatie is cruciaal voor de prestaties en levensduur van je airco. Het kiezen van de juiste monteur maakt het verschil tussen jarenlang probleemloos koelen en dure reparaties. Deze gids helpt je de beste installateur te vinden.',
    sections: [],
    faqs: [
      {
        question: 'Waar moet een airco monteur aan voldoen?',
        answer: 'Een airco monteur moet F-gassen gecertificeerd zijn (wettelijk verplicht). Daarnaast is het aan te raden te kijken naar ervaring, reviews, KvK-inschrijving en of ze werkgarantie bieden op de installatie.',
      },
      {
        question: 'Wat kost een airco installatie door een monteur?',
        answer: 'Installatiekosten variëren van EUR 300 tot EUR 800 voor een standaard split-unit, exclusief de airco zelf. Complexere installaties of multi-split systemen kunnen EUR 1.000 tot EUR 2.500 kosten.',
      },
      {
        question: 'Kan ik zelf een airco installeren?',
        answer: 'Nee, het installeren van een airco met koudemiddel mag alleen door F-gassen gecertificeerde monteurs. Dit is wettelijk verplicht vanwege de milieuregels rondom koudemiddelen.',
      },
    ],
    relatedGuides: ['airco-kiezen', 'kosten-overzicht', 'f-gassen'],
    lastUpdated: '2025-01-18',
    author: 'VindAircoMonteur.nl Redactie',
  },
  'kosten-overzicht': {
    slug: 'kosten-overzicht',
    title: 'Airco Kosten: Compleet Overzicht',
    seoTitle: 'Airco Kosten: Prijzen voor Installatie, Onderhoud & Reparatie | VindAircoMonteur.nl',
    seoDescription: 'Wat kost een airco? Overzicht van prijzen voor aanschaf, installatie, onderhoud en reparatie. Tips om kosten te besparen en subsidies te benutten.',
    introduction: 'De kosten van een airconditioning gaan verder dan alleen de aanschafprijs. Installatie, onderhoud en energieverbruik spelen ook een rol. Deze gids geeft je een compleet beeld van alle kosten.',
    sections: [],
    faqs: [
      {
        question: 'Wat kost een airco inclusief installatie?',
        answer: 'Een complete split-unit airco inclusief installatie kost tussen EUR 1.500 en EUR 3.500. De prijs hangt af van het merk, de capaciteit en de complexiteit van de installatie.',
      },
      {
        question: 'Wat kost airco onderhoud per jaar?',
        answer: 'Jaarlijks onderhoud kost tussen EUR 100 en EUR 200. Een onderhoudscontract kan voordeliger zijn en biedt vaak extra garanties.',
      },
      {
        question: 'Is er subsidie voor een airco of warmtepomp?',
        answer: 'Voor lucht-lucht warmtepompen (aircos die ook kunnen verwarmen) is soms subsidie beschikbaar via de ISDE-regeling. Check de actuele voorwaarden op rvo.nl.',
      },
    ],
    relatedGuides: ['airco-kiezen', 'monteur-kiezen', 'onderhoud'],
    lastUpdated: '2025-01-18',
    author: 'VindAircoMonteur.nl Redactie',
  },
  'f-gassen': {
    slug: 'f-gassen',
    title: 'F-gassen Certificering Uitgelegd',
    seoTitle: 'F-gassen Certificering: Wat Je Moet Weten | VindAircoMonteur.nl',
    seoDescription: 'Waarom F-gassen certificering verplicht is voor airco monteurs. Leer hoe je controleert of een installateur gecertificeerd is.',
    introduction: 'F-gassen certificering is wettelijk verplicht voor iedereen die met koelmiddelen in airconditioners werkt. Dit beschermt het milieu en garandeert vakkundig werk. Leer wat dit betekent en waarom het belangrijk is.',
    sections: [],
    faqs: [
      {
        question: 'Wat zijn F-gassen?',
        answer: 'F-gassen (gefluoreerde broeikasgassen) zijn koudemiddelen die in airconditioners worden gebruikt. Ze zijn zeer effectief voor koeling maar hebben een hoog broeikaseffect, vandaar de strenge regelgeving.',
      },
      {
        question: 'Hoe controleer ik of een monteur F-gassen gecertificeerd is?',
        answer: 'Vraag naar het certificaatnummer en controleer dit in het STEK-register (sfrk-rijnmond.nl) of vraag een kopie van het certificaat. Gecertificeerde bedrijven staan ook in het register van erkende installateurs.',
      },
      {
        question: 'Wat gebeurt er als een niet-gecertificeerde monteur mijn airco installeert?',
        answer: 'Dit is illegaal en kan leiden tot boetes. Bovendien vervalt vaak de fabrieksgarantie op de airco en loop je risico op lekkages en milieuschade.',
      },
    ],
    relatedGuides: ['monteur-kiezen', 'airco-kiezen'],
    lastUpdated: '2025-01-18',
    author: 'VindAircoMonteur.nl Redactie',
  },
  'onderhoud': {
    slug: 'onderhoud',
    title: 'Airco Onderhoud: Alles Wat Je Moet Weten',
    seoTitle: 'Airco Onderhoud: Wanneer, Waarom & Kosten | VindAircoMonteur.nl',
    seoDescription: 'Leer alles over airco onderhoud. Wanneer is het nodig, wat doet een monteur en wat kost het? Tips voor zelf onderhoud en wanneer je een professional nodig hebt.',
    introduction: 'Regelmatig onderhoud is essentieel voor de prestaties, efficiëntie en levensduur van je airconditioning. Deze gids legt uit wat onderhoud inhoudt, hoe vaak het nodig is en wat je zelf kunt doen.',
    sections: [],
    faqs: [
      {
        question: 'Hoe vaak moet een airco onderhouden worden?',
        answer: 'Professioneel onderhoud is jaarlijks aan te raden. De filters kun je zelf elke 2-4 weken schoonmaken, afhankelijk van gebruik.',
      },
      {
        question: 'Wat doet een monteur tijdens onderhoud?',
        answer: 'Een monteur controleert en reinigt de filters, verdamper en condensor. Daarnaast checkt hij het koudemiddelniveau, de elektrische aansluitingen en de algemene werking van het systeem.',
      },
      {
        question: 'Kan ik zelf mijn airco onderhouden?',
        answer: 'Eenvoudig onderhoud zoals filters schoonmaken kun je zelf doen. Voor het controleren van koudemiddel en technische onderdelen heb je een F-gassen gecertificeerde monteur nodig.',
      },
    ],
    relatedGuides: ['kosten-overzicht', 'monteur-kiezen'],
    lastUpdated: '2025-01-18',
    author: 'VindAircoMonteur.nl Redactie',
  },
};

// ===== DATA LOADING FUNCTIONS =====

/**
 * Get all pillar guide cards for the index page
 */
export function getAllGuideCards(): GuideCard[] {
  return pillarGuideCards;
}

/**
 * Get a specific pillar guide by slug
 */
export function getGuideBySlug(slug: string): PillarGuide | null {
  return pillarGuides[slug] || null;
}

/**
 * Get all pillar guide slugs for static generation
 */
export function getAllGuideSlugs(): string[] {
  return Object.keys(pillarGuides);
}

/**
 * Get related guides for a specific guide
 */
export function getRelatedGuides(slug: string): GuideCard[] {
  const guide = pillarGuides[slug];
  if (!guide) return [];

  return guide.relatedGuides
    .map(relatedSlug => pillarGuideCards.find(card => card.slug === relatedSlug))
    .filter((card): card is GuideCard => card !== undefined);
}

/**
 * Get guide card by slug
 */
export function getGuideCardBySlug(slug: string): GuideCard | null {
  return pillarGuideCards.find(card => card.slug === slug) || null;
}

// ===== AUTHOR INFO =====

export const GUIDE_AUTHOR = {
  name: 'VindAircoMonteur.nl Redactie',
  description: 'Onze redactie bestaat uit klimaatexperts en technisch schrijvers die zich richten op het verstrekken van accurate, praktische informatie over airconditioning en warmtepompen in Nederland.',
  expertise: ['Airconditioning', 'Warmtepompen', 'Klimaatbeheersing', 'F-gassen Regelgeving'],
};
