export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'airco-kiezen-complete-gids',
    title: 'De Juiste Airco Kiezen: Complete Gids voor 2025',
    excerpt: 'Ontdek welke airco het beste bij jouw situatie past. Van split-units tot multi-split systemen, we bespreken alle opties.',
    author: 'VindAircoMonteur Redactie',
    date: '2025-01-15',
    readTime: '8 min',
    category: 'Gids',
    image: '/images/blog/airco-kiezen.jpg',
  },
  {
    id: 2,
    slug: 'airco-installatie-kosten-2025',
    title: 'Wat Kost een Airco Installatie in 2025?',
    excerpt: 'Complete prijsoverzicht voor airco installatie. Van aanschaf tot montage, alle kosten op een rij.',
    author: 'VindAircoMonteur Redactie',
    date: '2025-01-10',
    readTime: '6 min',
    category: 'Kosten',
    image: '/images/blog/airco-kosten.jpg',
  },
  {
    id: 3,
    slug: 'f-gassen-certificering-uitgelegd',
    title: 'F-gassen Certificering: Alles Wat Je Moet Weten',
    excerpt: 'Waarom F-gassen certificering verplicht is en hoe je controleert of je monteur gecertificeerd is.',
    author: 'VindAircoMonteur Redactie',
    date: '2025-01-05',
    readTime: '5 min',
    category: 'Wetgeving',
    image: '/images/blog/f-gassen.jpg',
  },
  {
    id: 4,
    slug: 'split-unit-vs-multi-split',
    title: 'Split-unit vs Multi-split: Welke Kies Je?',
    excerpt: 'Vergelijk de voor- en nadelen van single split en multi-split systemen voor jouw woning.',
    author: 'VindAircoMonteur Redactie',
    date: '2024-12-28',
    readTime: '7 min',
    category: 'Vergelijking',
    image: '/images/blog/split-vergelijking.jpg',
  },
  {
    id: 5,
    slug: 'airco-onderhoud-tips',
    title: 'Airco Onderhoud: 10 Tips voor Optimale Prestaties',
    excerpt: 'Verleng de levensduur van je airco met deze onderhoudstips. Wat kun je zelf doen en wanneer bel je een monteur?',
    author: 'VindAircoMonteur Redactie',
    date: '2024-12-20',
    readTime: '6 min',
    category: 'Onderhoud',
    image: '/images/blog/airco-onderhoud.jpg',
  },
  {
    id: 6,
    slug: 'warmtepomp-airco-verschil',
    title: 'Warmtepomp vs Airco: Wat is het Verschil?',
    excerpt: 'Moderne airconditioners kunnen ook verwarmen. Leer het verschil tussen een airco en een warmtepomp.',
    author: 'VindAircoMonteur Redactie',
    date: '2024-12-15',
    readTime: '8 min',
    category: 'Gids',
    image: '/images/blog/warmtepomp-airco.jpg',
  },
  {
    id: 7,
    slug: 'beste-airco-merken-nederland',
    title: 'De Beste Airco Merken in Nederland',
    excerpt: 'Van Daikin tot Mitsubishi: vergelijk de populairste airco merken op prijs, kwaliteit en betrouwbaarheid.',
    author: 'VindAircoMonteur Redactie',
    date: '2025-01-20',
    readTime: '10 min',
    category: 'Vergelijking',
    image: '/images/blog/airco-merken.jpg',
  },
  {
    id: 8,
    slug: 'airco-vergunning-nodig',
    title: 'Heb Je een Vergunning Nodig voor een Airco?',
    excerpt: 'Alles over de regels rondom airco installatie, geluidsnormen en VvE-toestemming.',
    author: 'VindAircoMonteur Redactie',
    date: '2025-01-18',
    readTime: '5 min',
    category: 'Wetgeving',
    image: '/images/blog/vergunning-airco.jpg',
  },
  {
    id: 9,
    slug: 'airco-slaapkamer-tips',
    title: 'Airco in de Slaapkamer: Tips voor een Goede Nachtrust',
    excerpt: 'Hoe gebruik je een airco in de slaapkamer zonder wakker te liggen van het geluid of kou te vatten?',
    author: 'VindAircoMonteur Redactie',
    date: '2025-01-16',
    readTime: '6 min',
    category: 'Tips',
    image: '/images/blog/airco-slaapkamer.jpg',
  },
  {
    id: 10,
    slug: 'energiezuinige-airco-kiezen',
    title: 'Energiezuinige Airco Kiezen: Let op Deze Labels',
    excerpt: 'Bespaar op je energierekening met een zuinige airco. Uitleg over SEER, SCOP en energielabels.',
    author: 'VindAircoMonteur Redactie',
    date: '2025-01-14',
    readTime: '7 min',
    category: 'Gids',
    image: '/images/blog/energiezuinig.jpg',
  },
  {
    id: 11,
    slug: 'airco-zelf-schoonmaken',
    title: 'Je Airco Zelf Schoonmaken: Stap-voor-Stap',
    excerpt: 'Filters reinigen en de binnenunit schoonmaken kun je zelf. Volg dit stappenplan voor een frisse airco.',
    author: 'VindAircoMonteur Redactie',
    date: '2025-01-12',
    readTime: '5 min',
    category: 'Onderhoud',
    image: '/images/blog/schoonmaken.jpg',
  },
  {
    id: 12,
    slug: 'airco-kantoor-regels',
    title: 'Airco op Kantoor: Regels en Tips',
    excerpt: 'De ideale temperatuur, arbeidsomstandigheden en waar je op moet letten bij airco in een kantooromgeving.',
    author: 'VindAircoMonteur Redactie',
    date: '2025-01-08',
    readTime: '6 min',
    category: 'Zakelijk',
    image: '/images/blog/airco-kantoor.jpg',
  },
  {
    id: 13,
    slug: 'airco-subsidie-2025',
    title: 'Subsidie voor Airco en Warmtepomp in 2025',
    excerpt: 'Overzicht van beschikbare subsidies zoals de ISDE-regeling voor lucht-lucht warmtepompen.',
    author: 'VindAircoMonteur Redactie',
    date: '2025-01-06',
    readTime: '6 min',
    category: 'Kosten',
    image: '/images/blog/subsidie.jpg',
  },
  {
    id: 14,
    slug: 'airco-storing-oplossen',
    title: 'Airco Storing: Veelvoorkomende Problemen en Oplossingen',
    excerpt: 'Van E-foutcodes tot lekken: leer de meest voorkomende airco problemen herkennen en wat je eraan kunt doen.',
    author: 'VindAircoMonteur Redactie',
    date: '2025-01-04',
    readTime: '8 min',
    category: 'Onderhoud',
    image: '/images/blog/airco-storing.jpg',
  },
  {
    id: 15,
    slug: 'daikin-vs-mitsubishi',
    title: 'Daikin vs Mitsubishi: Welk Merk is Beter?',
    excerpt: 'Een eerlijke vergelijking van de twee populairste airco merken in Nederland.',
    author: 'VindAircoMonteur Redactie',
    date: '2025-01-02',
    readTime: '9 min',
    category: 'Vergelijking',
    image: '/images/blog/daikin-mitsubishi.jpg',
  },
  {
    id: 16,
    slug: 'airco-verwarmen-winter',
    title: 'Verwarmen met je Airco: Is het de Moeite Waard?',
    excerpt: 'Kun je besparen door te verwarmen met je airco in plaats van gas? We rekenen het voor je uit.',
    author: 'VindAircoMonteur Redactie',
    date: '2024-12-30',
    readTime: '7 min',
    category: 'Tips',
    image: '/images/blog/airco-verwarmen.jpg',
  },
];

export const categories = [
  { name: 'Alle Artikelen', count: blogPosts.length },
  { name: 'Gids', count: blogPosts.filter(p => p.category === 'Gids').length },
  { name: 'Kosten', count: blogPosts.filter(p => p.category === 'Kosten').length },
  { name: 'Onderhoud', count: blogPosts.filter(p => p.category === 'Onderhoud').length },
  { name: 'Vergelijking', count: blogPosts.filter(p => p.category === 'Vergelijking').length },
  { name: 'Wetgeving', count: blogPosts.filter(p => p.category === 'Wetgeving').length },
  { name: 'Tips', count: blogPosts.filter(p => p.category === 'Tips').length },
  { name: 'Zakelijk', count: blogPosts.filter(p => p.category === 'Zakelijk').length },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, category: string, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}

export function getLatestPosts(limit: number = 6): BlogPost[] {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

// Helper functions for internal linking
export function getMonteurLink(name: string): string {
  const slug = name.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `/monteur/${slug}`;
}

export function getProvinceLink(province: string): string {
  const slug = province.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `/provincie/${slug}`;
}

export function getCityLink(city: string): string {
  const slug = city
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `/stad/${slug}`;
}

export function getServiceTypeLink(type: string): string {
  const slug = type.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `/type/${slug}`;
}
