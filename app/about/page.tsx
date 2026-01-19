import { Metadata } from 'next';
import Link from 'next/link';
import { Users, Snowflake, Target, Shield, Clock, ArrowRight, Sparkles, Award, Quote, MapPin, Wrench, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import InlineAd from '@/components/ads/InlineAd';

export const metadata: Metadata = {
  title: 'Over Ons | VindAircoMonteur.nl',
  description: 'Leer meer over VindAircoMonteur.nl, het meest uitgebreide overzicht van airco installateurs en klimaattechniek bedrijven in Nederland.',
  openGraph: {
    title: 'Over VindAircoMonteur.nl',
    description: 'Uw betrouwbare gids voor het vinden van airco monteurs door heel Nederland',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-white">Over Ons</li>
            </ol>
          </nav>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            Over VindAircoMonteur.nl
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Het meest uitgebreide en betrouwbare overzicht van airco installateurs in Nederland,
            zorgvuldig samengesteld om u te helpen de juiste monteur te vinden.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <Card className="p-8 shadow-soft mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              VindAircoMonteur.nl is opgericht om een compleet, betrouwbaar en toegankelijk
              overzicht te bieden van airco installateurs door heel Nederland. Wij geloven dat iedereen
              toegang verdient tot informatie die helpt bij het vinden van de juiste klimaattechniek specialist.
            </p>
          </Card>

          <InlineAd />

          {/* Mission Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-500 text-white flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-2xl font-bold">Onze Missie</h2>
            </div>
            <Card className="p-6 shadow-soft bg-gradient-to-br from-cyan-50 to-blue-50/50 dark:from-cyan-900/20 dark:to-blue-900/10 border-cyan-100 dark:border-cyan-800">
              <p className="text-muted-foreground leading-relaxed">
                Wij streven ernaar de meest complete en gebruiksvriendelijke bron voor airco installatie
                informatie in Nederland te zijn. Of u nu zoekt naar een monteur voor uzelf,
                uw bedrijf ondersteunt, of klimaatoplossingen onderzoekt - wij helpen u graag
                bij het vinden van de perfecte specialist.
              </p>
            </Card>
          </section>

          {/* What We Offer Section */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl font-bold mb-6">Wat Wij Bieden</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6 shadow-soft border-2 border-transparent hover:border-cyan-300 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-cyan-700" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-2">Uitgebreide Database</h3>
                    <p className="text-sm text-muted-foreground">
                      Honderden airco monteurs met actuele informatie over diensten,
                      specialisaties en contactgegevens.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft border-2 border-transparent hover:border-cyan-300 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-cyan-700" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-2">F-gassen Gecertificeerd</h3>
                    <p className="text-sm text-muted-foreground">
                      Alleen monteurs met de vereiste F-gassen certificering volgens
                      EU-wetgeving worden opgenomen.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft border-2 border-transparent hover:border-cyan-300 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-cyan-700" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-2">Altijd Actueel</h3>
                    <p className="text-sm text-muted-foreground">
                      Wij werken continu aan het bijwerken van informatie zoals diensten,
                      merken en contactgegevens.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft border-2 border-transparent hover:border-cyan-300 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-cyan-700" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-2">Landelijke Dekking</h3>
                    <p className="text-sm text-muted-foreground">
                      Monteurs in alle 12 provincies, van Groningen tot Limburg,
                      van Zeeland tot Overijssel.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl font-bold mb-6">Onze Waarden</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="p-6 shadow-soft text-center">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Snowflake className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="font-serif font-semibold mb-2">Kwaliteit</h3>
                <p className="text-sm text-muted-foreground">
                  Alleen gecertificeerde en betrouwbare installateurs.
                </p>
              </Card>

              <Card className="p-6 shadow-soft text-center">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="font-serif font-semibold mb-2">Toegankelijkheid</h3>
                <p className="text-sm text-muted-foreground">
                  Informatie moet eenvoudig te vinden en begrijpen zijn.
                </p>
              </Card>

              <Card className="p-6 shadow-soft text-center">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="font-serif font-semibold mb-2">Betrouwbaarheid</h3>
                <p className="text-sm text-muted-foreground">
                  Wij streven naar 100% accurate en actuele informatie.
                </p>
              </Card>
            </div>
          </section>

          <InlineAd />

          {/* Quote Section */}
          <Card className="p-8 shadow-soft bg-gradient-to-r from-cyan-50 to-blue-50/30 dark:from-cyan-900/20 dark:to-blue-900/10 border-cyan-100 dark:border-cyan-800 mb-16">
            <div className="flex items-start gap-4">
              <Quote className="w-8 h-8 text-cyan-500 shrink-0" />
              <div>
                <p className="text-lg font-medium text-foreground mb-4 italic">
                  &quot;Airco installatie informatie toegankelijk maken voor iedereen in Nederland&quot;
                </p>
                <p className="text-sm text-muted-foreground">
                  - Team VindAircoMonteur.nl
                </p>
              </div>
            </div>
          </Card>

          {/* Services Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-2xl font-bold">Diensten</h2>
            </div>
            <Card className="p-6 shadow-soft">
              <p className="text-muted-foreground mb-6">
                Onze database bevat monteurs gespecialiseerd in diverse diensten:
              </p>
              <ul className="space-y-3">
                {[
                  'Airco installatie (split-unit en multi-split)',
                  'Warmtepomp installatie en onderhoud',
                  'Airco onderhoud en service',
                  'Klimaatbeheersing voor bedrijven',
                  'Airco reparatie en storingen',
                  'F-gassen service en bijvullen',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3 h-3 text-cyan-700" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </section>

          {/* Future Vision Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-500 text-white flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-2xl font-bold">Toekomstvisie</h2>
            </div>
            <Card className="p-6 shadow-soft">
              <p className="text-muted-foreground mb-6">
                Wij blijven werken aan het verbeteren van onze diensten. In de toekomst willen wij:
              </p>
              <ul className="space-y-3">
                {[
                  'Interactieve kaarten toevoegen voor betere navigatie',
                  'Offerte aanvraag mogelijkheden uitbreiden',
                  'Platform voor klantbeoordelingen ontwikkelen',
                  'Samenwerken met fabrikanten en groothandels',
                  'Energiebesparing calculators toevoegen',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
                      <Award className="w-3 h-3 text-cyan-700" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </section>

          {/* Collaboration Section */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl font-bold mb-6">Samenwerking</h2>
            <Card className="p-6 shadow-soft">
              <p className="text-muted-foreground mb-4">
                Bent u airco monteur of beheert u een klimaattechniek bedrijf? Heeft u aanvullende informatie?
                Wij staan altijd open voor samenwerking om onze database uit te breiden en te verbeteren.
              </p>
              <p className="text-muted-foreground mb-6">
                Neem gerust contact op via{' '}
                <Link href="/contact" className="text-cyan-600 hover:underline font-medium">
                  ons contactformulier
                </Link>{' '}
                of stuur een e-mail naar{' '}
                <a href="mailto:info@vindaircomonteur.nl" className="text-cyan-600 hover:underline font-medium">
                  info@vindaircomonteur.nl
                </a>.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition-colors"
              >
                Neem Contact Op
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>
          </section>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="font-serif text-2xl font-semibold mb-4">
              Start Uw Zoekopdracht
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Vind airco monteurs door heel Nederland en zet de eerste stap naar een aangenaam binnenklimaat.
            </p>
            <Link
              href="/search"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition-colors"
            >
              Zoek Airco Monteurs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
