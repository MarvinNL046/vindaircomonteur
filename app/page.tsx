'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Snowflake, Building2, Phone, Star, ArrowRight, Users, Award, Clock, Search, ChevronRight, Shield, Thermometer, Wrench, CheckCircle2, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FAQSection from '@/components/FAQSection';
import { SITE_STATS, getComprehensiveDataText } from '@/lib/stats-config';
import OptimizedAd from '@/components/ads/OptimizedAd';
import MultiplexAd from '@/components/ads/MultiplexAd';
import { AD_SLOTS } from '@/lib/ad-config';

// Unsplash images for airco/climate theme
const heroImages = {
  // Modern airco units
  main: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=80',
  // HVAC technician
  technician: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
  // Modern interior with airco
  interior: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
  // Professional service
  service: 'https://images.unsplash.com/photo-1581092921461-eab10380f4e5?w=800&q=80',
  // Home comfort
  comfort: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
  // Office climate
  office1: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  office2: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
  office3: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&q=80',
  office4: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  // Summer/cooling
  summer1: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80',
  summer2: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
  summer3: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  summer4: 'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=800&q=80',
};

interface Stats {
  totalFacilities: number;
  totalProvinces: number;
  totalCities: number;
  totalMunicipalities: number;
}

// Featured provinces (largest populations)
const featuredProvinces = [
  {
    name: 'Noord-Holland',
    slug: 'noord-holland',
    abbr: 'NH',
    highlight: 'Amsterdam, Haarlem, Zaanstad'
  },
  {
    name: 'Zuid-Holland',
    slug: 'zuid-holland',
    abbr: 'ZH',
    highlight: 'Rotterdam, Den Haag, Leiden'
  },
  {
    name: 'Noord-Brabant',
    slug: 'noord-brabant',
    abbr: 'NB',
    highlight: 'Eindhoven, Tilburg, Breda'
  },
  {
    name: 'Gelderland',
    slug: 'gelderland',
    abbr: 'GE',
    highlight: 'Arnhem, Nijmegen, Apeldoorn'
  },
  {
    name: 'Utrecht',
    slug: 'utrecht',
    abbr: 'UT',
    highlight: 'Utrecht, Amersfoort, Nieuwegein'
  },
  {
    name: 'Limburg',
    slug: 'limburg',
    abbr: 'LI',
    highlight: 'Maastricht, Venlo, Heerlen'
  }
];

const serviceCategories = [
  {
    title: 'Airco Installatie',
    description: 'Professionele installatie van split-unit en multi-split systemen',
    icon: Wrench,
    href: '/type/airco-installatie',
    color: 'bg-cyan-100 text-cyan-700'
  },
  {
    title: 'Airco Onderhoud',
    description: 'Periodiek onderhoud voor optimale prestaties en levensduur',
    icon: Thermometer,
    href: '/type/airco-onderhoud',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'Warmtepomp',
    description: 'Energiezuinige verwarming en koeling met warmtepompen',
    icon: Wind,
    href: '/type/warmtepomp',
    color: 'bg-cyan-50 text-cyan-600'
  }
];

const userTestimonials = [
  {
    name: 'Peter V.',
    location: 'Amsterdam, NH',
    quote: 'Via deze website een uitstekende monteur gevonden. Binnen een week was onze airco geinstalleerd. Top service!',
    rating: 5
  },
  {
    name: 'Linda K.',
    location: 'Rotterdam, ZH',
    quote: 'Makkelijk kunnen vergelijken tussen verschillende installateurs. Goede prijzen en betrouwbare monteurs.',
    rating: 5
  },
  {
    name: 'Mark de B.',
    location: 'Eindhoven, NB',
    quote: 'Eindelijk een overzichtelijke site om een F-gassen gecertificeerde monteur te vinden. Aanrader!',
    rating: 5
  }
];

export default function HomePage() {
  const [stats, setStats] = useState<Stats>({
    totalFacilities: 0,
    totalProvinces: 12,
    totalCities: 0,
    totalMunicipalities: 342
  });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Load stats from API
    async function loadStats() {
      try {
        const response = await fetch('/api/stats');
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Error loading stats:', error);
      }
    }
    loadStats();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[700px] lg:min-h-[800px] overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-700 via-cyan-600 to-blue-700" />

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-white/5 rounded-full blur-2xl" />
        </div>

        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Trust Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm border border-white/20">
                <Shield className="w-4 h-4 text-cyan-300" />
                <span>F-gassen gecertificeerde monteurs</span>
              </div>
            </div>

            <div className="text-center text-white">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                Vind een Airco Monteur
                <span className="block mt-2 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Bij Jou in de Buurt
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                Vergelijk gecertificeerde airco installateurs en onderhoudsbedrijven door heel Nederland.
                Vind de beste monteur voor installatie, onderhoud of reparatie van uw airconditioning.
              </p>

              {/* Search Form */}
              <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-8">
                <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="relative flex-1">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-600" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Voer je plaats of postcode in..."
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-lg"
                    />
                  </div>
                  <Button size="lg" type="submit" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/30 transition-all hover:shadow-xl hover:shadow-cyan-500/40">
                    <Search className="w-5 h-5 mr-2" />
                    Zoek Monteur
                  </Button>
                </div>
              </form>

              {/* Quick Links */}
              <div className="flex flex-wrap justify-center gap-3 text-sm mb-12">
                <Link href="/provincie" className="px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all text-white border border-white/20 hover:border-white/40">
                  Zoek per Provincie
                </Link>
                <Link href="/type/airco-installatie" className="px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all text-white border border-white/20 hover:border-white/40">
                  Airco Installatie
                </Link>
                <Link href="/type/warmtepomp" className="px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all text-white border border-white/20 hover:border-white/40">
                  Warmtepomp
                </Link>
                <Link href="/guide" className="px-5 py-2.5 bg-cyan-500/20 backdrop-blur-sm rounded-full hover:bg-cyan-500/30 transition-all text-cyan-200 border border-cyan-400/30 hover:border-cyan-400/50">
                  Airco Gids
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-10">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stats.totalFacilities > 0 ? stats.totalFacilities.toLocaleString('nl-NL') : '500+'}
                  </div>
                  <div className="text-sm text-white/70">Monteurs</div>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">12</div>
                  <div className="text-sm text-white/70">Provincies</div>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-white/70">Gratis Zoeken</div>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">F-gassen</div>
                  <div className="text-sm text-white/70">Gecertificeerd</div>
                </div>
              </div>

              {/* Contact Banner */}
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-cyan-700" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600 font-medium">Hulp nodig?</p>
                    <p className="text-xs text-gray-500">Gratis advies over airco</p>
                  </div>
                </div>
                <a
                  href="tel:085-1234567"
                  className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-colors shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  085-123 4567
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full text-cyan-700 text-sm font-medium mb-6">
                  <CheckCircle2 className="w-4 h-4" />
                  Betrouwbaar Platform
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  De Juiste Airco Monteur Vinden Hoeft Niet Moeilijk Te Zijn
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Wij geloven dat iedereen toegang verdient tot betrouwbare airco installateurs.
                  Ons uitgebreide overzicht maakt het eenvoudig om gecertificeerde monteurs
                  te vinden, vergelijken en contact op te nemen.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    </div>
                    <span className="text-gray-700">Alleen F-gassen gecertificeerde installateurs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    </div>
                    <span className="text-gray-700">Filter op dienst, merk en locatie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    </div>
                    <span className="text-gray-700">Geen registratie of kosten - volledig gratis</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link href="/search">
                    <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                      Start Je Zoekopdracht
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/guide">
                    <Button variant="outline" size="lg" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50">
                      Lees de Airco Gids
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right - Image Grid */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={heroImages.technician}
                        alt="Airco monteur aan het werk"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={heroImages.interior}
                        alt="Moderne woonkamer met airco"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={heroImages.service}
                        alt="Professionele airco service"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={heroImages.comfort}
                        alt="Comfortabel binnenklimaat"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-200/50 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200/50 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad after intro section */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <OptimizedAd
            slot={AD_SLOTS.home.heroBelow}
            format="horizontal"
            priority={true}
            minHeight={90}
            className="max-w-[728px] mx-auto"
          />
        </div>
      </div>

      {/* Featured Category - Airco Installatie */}
      <section className="py-16 bg-gradient-to-br from-cyan-700 via-cyan-600 to-blue-700 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium mb-6">
                <Wrench className="w-4 h-4" />
                Populairste Dienst
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Airco Installatie
              </h2>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Laat uw airconditioning professioneel installeren door een gecertificeerde monteur.
                Van split-unit tot multi-split systeem, onze installateurs zorgen voor
                een vakkundige montage en optimale werking.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-white/80">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-cyan-300" />
                  </div>
                  Gratis advies en offerte op maat
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-cyan-300" />
                  </div>
                  F-gassen gecertificeerde monteurs
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-cyan-300" />
                  </div>
                  Alle topmerken: Daikin, Mitsubishi, LG, Samsung
                </li>
              </ul>
              <Link href="/type/airco-installatie">
                <Button size="lg" className="group bg-white text-cyan-700 hover:bg-cyan-50 shadow-lg">
                  Vind Installateur
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Right - Image Grid */}
            <div className="order-1 lg:order-2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={heroImages.office1}
                      alt="Moderne kantoor met klimaatbeheersing"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={heroImages.office2}
                      alt="Professionele airco installatie"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={heroImages.office3}
                      alt="Split-unit airco"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={heroImages.office4}
                      alt="Comfortabel binnenklimaat"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Provinces */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Zoek per Provincie
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vind airco monteurs in jouw provincie of doorzoek ons hele netwerk van installateurs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {featuredProvinces.map((province) => (
              <Link key={province.slug} href={`/provincie/${province.slug}`} className="group">
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                      <MapPin className="w-6 h-6 text-cyan-700 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-mono text-muted-foreground">{province.abbr}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-cyan-600 transition-colors">
                    {province.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {province.highlight}
                  </p>
                  <span className="text-sm font-medium text-cyan-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Bekijk monteurs
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/provincie">
              <Button variant="outline" size="lg" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50">
                Bekijk Alle 12 Provincies
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Category - Warmtepomp */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={heroImages.summer1}
                      alt="Koele zomer met airco"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={heroImages.summer2}
                      alt="Comfortabel wonen"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={heroImages.summer3}
                      alt="Energiezuinig klimaat"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={heroImages.summer4}
                      alt="Duurzame verwarming"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-100 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full blur-2xl" />
            </div>

            {/* Right - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
                <Wind className="w-4 h-4" />
                Duurzaam & Energiezuinig
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Warmtepomp Installatie
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Een warmtepomp is de ideale oplossing voor duurzaam verwarmen en koelen.
                Bespaar tot 50% op uw energiekosten en profiteer van mogelijke subsidies.
                Onze specialisten adviseren u graag over de beste oplossing.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-cyan-700" />
                  </div>
                  Tot 4x efficienter dan elektrisch verwarmen
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-cyan-700" />
                  </div>
                  Verwarmen in de winter, koelen in de zomer
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-cyan-700" />
                  </div>
                  Subsidie en belastingvoordeel mogelijk
                </li>
              </ul>
              <Link href="/type/warmtepomp">
                <Button size="lg" className="group bg-cyan-600 hover:bg-cyan-700">
                  Vind Warmtepomp Specialist
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Onze Diensten
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Van installatie tot onderhoud. Vind de juiste specialist voor uw wensen.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {serviceCategories.map((category) => (
              <Link key={category.href} href={category.href} className="group">
                <Card className="p-8 h-full text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-100">
                  <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-cyan-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/type">
              <Button variant="outline" size="lg" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50">
                Bekijk Alle Diensten
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ad before testimonials */}
      <div className="bg-white py-6">
        <div className="container mx-auto px-4">
          <OptimizedAd
            slot={AD_SLOTS.home.afterStats}
            format="horizontal"
            lazy={true}
            minHeight={90}
            className="max-w-[728px] mx-auto"
          />
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Ervaringen van Gebruikers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lees wat anderen zeggen over het vinden van een airco monteur via ons platform.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {userTestimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Waarom VindAircoMonteur.nl?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-cyan-700" />
              </div>
              <h3 className="font-semibold mb-2">Uitgebreid Netwerk</h3>
              <p className="text-sm text-muted-foreground">
                Honderden gecertificeerde airco monteurs door heel Nederland.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Gecertificeerd</h3>
              <p className="text-sm text-muted-foreground">
                Alle monteurs zijn F-gassen gecertificeerd volgens EU-wetgeving.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-cyan-50 flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="font-semibold mb-2">100% Gratis</h3>
              <p className="text-sm text-muted-foreground">
                Zoeken, vergelijken en contact opnemen zonder kosten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Multiplex Ad */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <MultiplexAd
            slot={AD_SLOTS.home.beforeFooter}
            title="Gerelateerde Informatie"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-700 via-cyan-600 to-blue-700 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Klaar voor een Aangenaam Binnenklimaat?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Vind vandaag nog de perfecte airco monteur voor uw situatie. Gratis zoeken, geen verplichtingen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/search">
              <Button size="lg" className="bg-white text-cyan-700 hover:bg-cyan-50 shadow-lg">
                Vind Monteur Nu
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/guide">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Lees de Gids
              </Button>
            </Link>
          </div>

          {/* Contact Line */}
          <div className="mt-10 pt-8 border-t border-white/20">
            <p className="text-white/60 mb-2">Hulp nodig bij het kiezen?</p>
            <a href="tel:085-1234567" className="text-xl font-bold text-cyan-300 hover:text-cyan-200">
              Bel: 085-123 4567
            </a>
            <p className="text-white/60 text-sm mt-1">Gratis advies over airco en warmtepompen</p>
          </div>
        </div>
      </section>
    </main>
  );
}
