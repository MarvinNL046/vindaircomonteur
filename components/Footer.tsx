'use client';

import Link from 'next/link';
import { Mail, Facebook, Linkedin, ChevronDown, Phone } from 'lucide-react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import type { FooterState, FooterType, FooterGuide } from '@/lib/footer-data';

// Fallback data for client-side rendering - Dutch provinces
const fallbackProvinces = [
  { name: 'Noord-Holland', slug: 'noord-holland', count: 0 },
  { name: 'Zuid-Holland', slug: 'zuid-holland', count: 0 },
  { name: 'Noord-Brabant', slug: 'noord-brabant', count: 0 },
  { name: 'Gelderland', slug: 'gelderland', count: 0 },
  { name: 'Limburg', slug: 'limburg', count: 0 },
  { name: 'Utrecht', slug: 'utrecht', count: 0 },
  { name: 'Overijssel', slug: 'overijssel', count: 0 },
  { name: 'Flevoland', slug: 'flevoland', count: 0 },
];

// Airco service types
const fallbackTypes = [
  { name: 'Airco Installatie', slug: 'airco-installatie', count: 0 },
  { name: 'Airco Onderhoud', slug: 'airco-onderhoud', count: 0 },
  { name: 'Warmtepomp', slug: 'warmtepomp', count: 0 },
  { name: 'Split-unit', slug: 'split-unit', count: 0 },
  { name: 'Multi-split', slug: 'multi-split', count: 0 },
  { name: 'Klimaatbeheersing', slug: 'klimaatbeheersing', count: 0 },
  { name: 'Airco Reparatie', slug: 'airco-reparatie', count: 0 },
  { name: 'F-gassen Service', slug: 'f-gassen-service', count: 0 },
];

const resources: FooterGuide[] = [
  { href: '/guide/airco-kiezen', label: 'Airco Kiezen' },
  { href: '/guide/kosten', label: 'Kosten & Prijzen' },
  { href: '/guide/onderhoud', label: 'Onderhoudstips' },
  { href: '/guide/energiebesparing', label: 'Energiebesparing' },
  { href: '/guide/subsidies', label: 'Subsidies' },
];

const company = [
  { href: '/about', label: 'Over Ons' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'Veelgestelde Vragen' },
  { href: '/privacy', label: 'Privacybeleid' },
];

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  isMobile?: boolean;
}

function FooterSection({ title, children, isOpen, onToggle, isMobile }: FooterSectionProps) {
  if (isMobile) {
    return (
      <div className="border-b border-white/10">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between py-4 text-left"
          aria-expanded={isOpen}
        >
          <h4 className="font-semibold text-cyan-300">{title}</h4>
          <ChevronDown
            className={`w-5 h-5 text-cyan-300 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h4 className="font-semibold mb-4 text-cyan-300">{title}</h4>
      {children}
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [topProvinces, setTopProvinces] = useState<FooterState[]>(fallbackProvinces);
  const [topTypes, setTopTypes] = useState<FooterType[]>(fallbackTypes);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [isMobile, setIsMobile] = useState(false);

  // Fetch dynamic data on mount
  useEffect(() => {
    async function fetchFooterData() {
      try {
        const response = await fetch('/api/footer-data');
        if (response.ok) {
          const data = await response.json();
          if (data.states?.length > 0) setTopProvinces(data.states);
          if (data.types?.length > 0) setTopTypes(data.types);
        }
      } catch (error) {
        console.error('Error fetching footer data:', error);
        // Keep fallback data on error
      }
    }
    fetchFooterData();
  }, []);

  // Handle responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    setSubscribed(true);
    setEmail('');
  };

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const renderLinks = (items: Array<{ href: string; label: string }>, type: 'province' | 'type' | 'resource' | 'company') => (
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="block py-1.5 text-primary-foreground/70 hover:text-white transition-colors text-sm sm:text-base"
          >
            {item.label}
          </Link>
        </li>
      ))}
      {(type === 'province' || type === 'type') && (
        <li>
          <Link
            href={type === 'province' ? '/provincies' : '/diensten'}
            className="block py-1.5 text-cyan-300 hover:text-white transition-colors text-sm sm:text-base font-medium"
          >
            Bekijk Alle &rarr;
          </Link>
        </li>
      )}
    </ul>
  );

  const provinceLinks = topProvinces.map(s => ({ href: `/provincie/${s.slug}`, label: s.name }));
  const typeLinks = topTypes.map(t => ({ href: `/type/${t.slug}`, label: t.name }));

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Contact Banner */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <Phone className="w-8 h-8 text-white" />
              <div>
                <p className="text-white/90 text-sm">Hulp nodig bij het vinden van een monteur?</p>
                <a href="tel:085-1234567" className="text-2xl font-bold text-white hover:text-cyan-200 transition-colors">
                  085-123 4567
                </a>
              </div>
            </div>
            <p className="text-white/80 text-sm max-w-md">
              Gratis advies over airco installatie en onderhoud
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl font-semibold mb-3">
              Airco Tips & Nieuws
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Ontvang handige tips over airco onderhoud, energiebesparing en de nieuwste ontwikkelingen in klimaatbeheersing.
            </p>
            {subscribed ? (
              <p className="text-cyan-300 font-medium">
                Bedankt voor je aanmelding!
              </p>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Je e-mailadres"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <Button variant="default" type="submit" size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  Aanmelden
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Desktop Layout - 5 columns */}
        <div className="hidden md:grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Logo variant="light" size="md" className="mb-4" />
            <p className="text-primary-foreground/70 mb-6 text-sm">
              Jouw betrouwbare bron voor het vinden van gecertificeerde airco monteurs en installateurs door heel Nederland.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/vindaircomonteur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/vindaircomonteur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Service Types Column */}
          <div>
            <h4 className="font-semibold mb-4 text-cyan-300">Diensten</h4>
            {renderLinks(typeLinks, 'type')}
          </div>

          {/* Popular Provinces Column */}
          <div>
            <h4 className="font-semibold mb-4 text-cyan-300">Provincies</h4>
            {renderLinks(provinceLinks, 'province')}
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold mb-4 text-cyan-300">Informatie</h4>
            {renderLinks(resources, 'resource')}
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4 text-cyan-300">Bedrijf</h4>
            {renderLinks(company, 'company')}
            <h4 className="font-semibold mt-6 mb-3 text-cyan-300">Contact</h4>
            <a
              href="mailto:info@vindaircomonteur.nl"
              className="flex items-center gap-2 py-1.5 text-primary-foreground/70 hover:text-white transition-colors text-sm"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="break-all">info@vindaircomonteur.nl</span>
            </a>
          </div>
        </div>

        {/* Mobile Layout - Accordion */}
        <div className="md:hidden">
          {/* Logo & Description - Always visible */}
          <div className="pb-6 mb-6 border-b border-white/10">
            <Logo variant="light" size="md" className="mb-4" />
            <p className="text-primary-foreground/70 mb-6 text-sm">
              Jouw betrouwbare bron voor het vinden van gecertificeerde airco monteurs in Nederland.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/vindaircomonteur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/vindaircomonteur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Accordion Sections */}
          <FooterSection
            title="Diensten"
            isOpen={openSections['types']}
            onToggle={() => toggleSection('types')}
            isMobile={true}
          >
            {renderLinks(typeLinks, 'type')}
          </FooterSection>

          <FooterSection
            title="Provincies"
            isOpen={openSections['provinces']}
            onToggle={() => toggleSection('provinces')}
            isMobile={true}
          >
            {renderLinks(provinceLinks, 'province')}
          </FooterSection>

          <FooterSection
            title="Informatie"
            isOpen={openSections['resources']}
            onToggle={() => toggleSection('resources')}
            isMobile={true}
          >
            {renderLinks(resources, 'resource')}
          </FooterSection>

          <FooterSection
            title="Bedrijf"
            isOpen={openSections['company']}
            onToggle={() => toggleSection('company')}
            isMobile={true}
          >
            {renderLinks(company, 'company')}
            <div className="mt-4 pt-4 border-t border-white/10">
              <span className="text-sm font-medium text-cyan-300">Contact:</span>
              <a
                href="mailto:info@vindaircomonteur.nl"
                className="flex items-center gap-2 py-1.5 text-primary-foreground/70 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">info@vindaircomonteur.nl</span>
              </a>
            </div>
          </FooterSection>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} VindAircoMonteur.nl. Alle rechten voorbehouden.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacybeleid
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Algemene Voorwaarden
              </Link>
              <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
          <p className="text-center text-xs text-primary-foreground/50 mt-4">
            VindAircoMonteur.nl is een informatieve website en geeft geen garanties op diensten van vermelde installateurs.
            Controleer altijd of een monteur F-gassen gecertificeerd is.
          </p>
        </div>
      </div>
    </footer>
  );
}
