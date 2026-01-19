# CLAUDE.md - VindAircoMonteur.nl Project Guide

This file provides guidance to Claude Code when working with the VindAircoMonteur.nl project.

## Project Overview

VindAircoMonteur.nl is a comprehensive directory of airco installers, AC technicians, and climate control specialists in the Netherlands. The website helps Dutch consumers find certified airco monteurs (AC installers) in their area.

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: Supabase / Drizzle ORM
- **Deployment**: Vercel

## Key Features

### 1. Geographic Structure (Dutch)
- `/provincie/[province]` - Province-level listings (e.g., Noord-Holland)
- `/gemeente/[municipality]` - Municipality-level listings
- `/stad/[city]` - City-level listings
- `/monteur/[slug]` - Individual installer detail pages

### 2. Installer Types
- Airco Installateur (AC Installer)
- Klimaattechniek Bedrijf (Climate Technology Company)
- Warmtepomp Specialist (Heat Pump Specialist)
- Koeltechniek Bedrijf (Refrigeration Company)
- Airco Onderhoudsbedrijf (AC Maintenance Company)
- Brand-specific specialists (Daikin, Mitsubishi, LG, Samsung, Toshiba)

### 3. Service Specializations
- Airco Installatie (AC Installation)
- Airco Onderhoud (AC Maintenance)
- Warmtepomp (Heat Pump)
- Split-unit Airco
- Multi-split Systeem
- Klimaatbeheersing (Climate Control)
- Airco Reparatie (AC Repair)
- F-gassen Certificering (F-gas Certification)

### 4. Search & Filter
- Search by location (city, postcode)
- Filter by service type
- Filter by brand specialization
- Filter by province/municipality

## Data Structure

### Installer Data Format
```typescript
{
  id: string;
  name: string;
  slug: string;
  address: string;
  city: string;
  province: string; // Dutch: "Noord-Holland", "Zuid-Holland", etc.
  province_abbr: string; // "NH", "ZH", etc.
  municipality: string;
  postcode: string;
  phone?: string;
  website?: string;
  lat?: number;
  lng?: number;
  rating?: number;
  review_count?: number;
  photo?: string;
  installer_types: string[]; // e.g., ["airco-installateur", "warmtepomp-specialist"]
  service_types: string[]; // e.g., ["airco-installatie", "airco-onderhoud"]
  brands: string[]; // e.g., ["Daikin", "Mitsubishi", "LG"]
  certifications: string[]; // e.g., ["F-gassen gecertificeerd"]
  description?: string;
}
```

## Dutch Provinces (12 total)
1. Noord-Holland (NH) - Capital: Haarlem
2. Zuid-Holland (ZH) - Capital: Den Haag
3. Noord-Brabant (NB) - Capital: 's-Hertogenbosch
4. Gelderland (GE) - Capital: Arnhem
5. Utrecht (UT) - Capital: Utrecht
6. Limburg (LI) - Capital: Maastricht
7. Overijssel (OV) - Capital: Zwolle
8. Flevoland (FL) - Capital: Lelystad
9. Groningen (GR) - Capital: Groningen
10. Friesland (FR) - Capital: Leeuwarden
11. Drenthe (DR) - Capital: Assen
12. Zeeland (ZE) - Capital: Middelburg

## Important URLs and Routes

### Public Pages
- `/` - Homepage with search
- `/search` - Search results page
- `/provincie/[province]` - Province listings
- `/gemeente/[municipality]` - Municipality listings
- `/stad/[city]` - City listings
- `/monteur/[slug]` - Installer detail page
- `/type/[type]` - Service type pages
- `/guide` - Airco guides and information
- `/about` - About page (Over Ons)
- `/contact` - Contact page

### API Routes
- `/api/search` - Search installers
- `/api/monteur/[slug]` - Get installer data
- `/api/installers/nearby` - Get nearby installers
- `/api/footer-data` - Get footer dynamic data

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run typecheck

# Discover installers (scraping)
npm run discover:test
npm run discover:province
npm run discover:full
```

## Environment Variables

Required in `.env.local`:
```
DATABASE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
GOOGLE_PLACES_API_KEY=
```

## Content Guidelines

### Target Audience
- Homeowners looking for airco installation
- Businesses needing commercial climate control
- Property managers seeking maintenance services
- People researching airco/warmtepomp options

### Tone (Dutch)
- Professional and informative
- Helpful and accessible
- Trust-building
- Clear and straightforward

### SEO Focus Keywords (Dutch)
- airco monteur
- airco installateur
- airco laten plaatsen
- airconditioning installatie
- warmtepomp installateur
- split-unit airco
- airco onderhoud
- F-gassen gecertificeerd
- airco [stad] (e.g., "airco Amsterdam")

## Important Terms (Dutch-English)

| Dutch | English |
|-------|---------|
| Airco | Air conditioning |
| Monteur | Technician/Installer |
| Installateur | Installer |
| Onderhoud | Maintenance |
| Warmtepomp | Heat pump |
| Koeling | Cooling |
| Verwarming | Heating |
| Klimaatbeheersing | Climate control |
| F-gassen | F-gases (fluorinated gases) |
| Provincie | Province |
| Gemeente | Municipality |
| Stad | City |
| Postcode | Postal code |

## Design Theme

- **Primary Color**: Cyan (#06B6D4) - Cool, fresh, associated with cooling/AC
- **Accent Color**: Blue (#2563EB) - Trust, professionalism
- **Logo**: Snowflake icon representing cooling

## Notes

- This project follows a directory website architecture
- Installer data scraped from Google Places API
- Focus on Netherlands market only
- All content must be in Dutch
- F-gassen certification is legally required for AC installers in the EU
- Important to verify installer certifications

