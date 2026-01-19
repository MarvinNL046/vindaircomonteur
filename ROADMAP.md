# VindAircoMonteur.nl - Project Roadmap

**Website:** https://vindaircomonteur.nl
**Last Updated:** 19-01-2026
**Status:** Development Phase

---

## Project Overview

VindAircoMonteur.nl is een uitgebreide directory van airco installateurs, monteurs en klimaattechniek specialisten in Nederland. Het platform helpt particulieren en bedrijven bij het vinden van gekwalificeerde airco monteurs op basis van locatie, specialisatie en certificeringen.

---

## Voltooide Taken

### Fase 1: Site Transformatie (Voltooid)
- [x] Codebase opzetten voor Nederlandse airco monteur directory
- [x] Alle componenten, pagina's en APIs aanpassen voor airco context
- [x] Nederlandse content en terminologie toevoegen
- [x] Drizzle schema maken met facilities/installers tabel
- [x] Indexen en relaties toevoegen aan database schema

### Fase 2: Design Update (Voltooid)
- [x] Kleurthema: Cyaan/blauw voor koeling/airco associatie
- [x] Logo component met sneeuwvlok icoon
- [x] Homepage hero sectie herontwerpen
- [x] Alle componenten updaten met nieuw kleurschema
- [x] Header en Footer voor airco monteur branding

### Fase 3: Content & Pagina's (Voltooid)
- [x] /guide/airco-kiezen pagina maken
- [x] /guide/kosten pagina maken
- [x] /guide/f-gassen pagina maken
- [x] Premium en affiliate content componenten updaten
- [x] Interne links repareren

### Fase 4: Developer Tooling (Voltooid)
- [x] Health check script (scripts/check-health.ts)
- [x] Ontbrekende dependencies installeren

---

## Lopende Taken

### Fase 5: Data & Scraping (Hoge Prioriteit)
- [ ] **Neon PostgreSQL database opzetten**
  - Database instance aanmaken
  - DATABASE_URL configureren in .env.local
  - Drizzle migrations uitvoeren

- [ ] **Installateur Data Verzamelen**
  - [ ] Discovery script updaten voor Google Places API
  - [ ] Airco installateurs scrapen uit Google Places
  - [ ] Data verrijken met GPT (beschrijvingen, specialisaties)
  - [ ] Foto's toevoegen van Google Places

- [ ] **Data Kwaliteit**
  - [ ] Contactgegevens verifi??ren
  - [ ] Certificeringen toevoegen (F-gassen, STEK)
  - [ ] Service types classificeren
  - [ ] SEO content genereren per installateur

### Fase 6: Core Features (Medium Prioriteit)
- [ ] **Zoeken & Filteren**
  - [ ] Locatie-gebaseerd zoeken (stad, postcode)
  - [ ] Filter op service type
  - [ ] Filter op merk specialisatie (Daikin, Mitsubishi, LG)
  - [ ] Filter op certificering
  - [ ] Sorteren (rating, afstand, naam)

- [ ] **Gebruikers Features**
  - [ ] Gebruiker authenticatie
  - [ ] Reviews en ratings
  - [ ] Favorieten opslaan
  - [ ] Contact formulier
  - [ ] Offerte aanvragen

- [ ] **Installateur Features**
  - [ ] Claim listing functionaliteit
  - [ ] Dashboard voor installateurs
  - [ ] Bedrijfsgegevens bewerken
  - [ ] Reageren op reviews
  - [ ] Foto's uploaden

### Fase 7: SEO & Marketing (Medium Prioriteit)
- [ ] **SEO Optimalisatie**
  - [ ] Provincie landing pagina's genereren met content
  - [ ] Stad landing pagina's genereren
  - [ ] Service type landing pagina's
  - [ ] Blog content over airco/klimaat
  - [ ] Sitemap indienen bij Google Search Console
  - [ ] Google Analytics instellen

- [ ] **Schema Markup**
  - [ ] LocalBusiness schema op installateur pagina's
  - [ ] BreadcrumbList schema
  - [ ] FAQPage schema op guide pagina's
  - [ ] Review schema

### Fase 8: Monetisatie (Lage Prioriteit)
- [ ] **Advertenties**
  - [ ] Google AdSense opzetten
  - [ ] Ad placements configureren
  - [ ] Affiliate partnerships (airco merken, leveranciers)

- [ ] **Premium Features**
  - [ ] Uitgelichte vermeldingen
  - [ ] Lead generatie voor installateurs
  - [ ] Premium installateur profielen

### Fase 9: Deployment & Launch (Hoge Prioriteit)
- [ ] **Vercel Deployment**
  - [ ] GitHub repository koppelen
  - [ ] Environment variables configureren
  - [ ] Custom domein instellen (vindaircomonteur.nl)
  - [ ] SSL certificaat configureren
  - [ ] Preview deployments opzetten

- [ ] **Post-Launch**
  - [ ] Error tracking monitoren (Sentry)
  - [ ] Uptime monitoring instellen
  - [ ] Performance optimalisatie
  - [ ] Mobile responsiveness testen

---

## Technische Schuld

- [ ] npm audit vulnerabilities fixen
- [ ] Ongebruikte exports verwijderen
- [ ] TypeScript strict mode toevoegen
- [ ] Unit tests voor kritieke functies
- [ ] E2E tests met Playwright

---

## Environment Setup

### Vereiste Environment Variables
```env
# Database
DATABASE_URL=postgresql://...

# Authentication
JWT_SECRET=your-secret-key

# Google APIs
GOOGLE_PLACES_API_KEY=your-api-key

# OpenAI (voor content verrijking)
OPENAI_API_KEY=your-api-key

# Email (Resend)
RESEND_API_KEY=your-api-key

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## Quick Start

```bash
# Dependencies installeren
npm install

# Development server starten
npm run dev -- -p 3003

# Health check uitvoeren
npx tsx scripts/check-health.ts

# TypeScript check
npx tsc --noEmit

# Build voor productie
npm run build
```

---

## Service Types (Diensten)

- **Airco Installatie** - Professionele plaatsing van aircosystemen
- **Airco Onderhoud** - Periodiek onderhoud en service
- **Warmtepomp** - Installatie en onderhoud van warmtepompen
- **Split-unit** - Enkelvoudige aircosystemen
- **Multi-split** - Systemen met meerdere binnenunits
- **Airco Reparatie** - Storingen en reparaties
- **Klimaatbeheersing** - Complete klimaatoplossingen

## Certificeringen

- **F-gassen gecertificeerd** - EU vereiste certificering voor koudemiddelen
- **STEK gecertificeerd** - Nederlandse kwaliteitsnorm
- **Erkend installateur** - Merk-specifieke erkenningen

## Airco Merken

- Daikin
- Mitsubishi Electric
- LG
- Samsung
- Toshiba
- Panasonic
- Fujitsu

---

## Contact

Voor vragen of bijdragen, open een issue op GitHub.

---

*Deze roadmap is een levend document en wordt bijgewerkt naarmate het project vordert.*
