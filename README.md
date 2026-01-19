# VindAircoMonteur.nl

Een uitgebreide online directory voor het vinden van airco installateurs, monteurs en klimaattechniek specialisten in Nederland.

## Project Status

Actieve ontwikkeling - bezig met het opbouwen van een uitgebreide database van airco installateurs.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: Supabase / Drizzle ORM

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── facility/          # Installateur detail pagina's
│   ├── city/              # Stad overzicht pagina's
│   ├── county/            # Gemeente overzicht pagina's
│   ├── state/             # Provincie overzicht pagina's
│   └── search/            # Zoek functionaliteit
├── components/            # React components
├── data/                  # Database files
├── public/               # Static assets
└── docs/                 # Documentation
    └── archive/          # Gearchiveerde documentatie
```

## Features

- Zoek airco installateurs op locatie (stad, postcode, provincie)
- Filter op service type (installatie, onderhoud, reparatie)
- Filter op merk specialisatie (Daikin, Mitsubishi, LG, etc.)
- Filter op certificering (F-gassen, STEK)
- Bekijk ratings en reviews
- Contactgegevens en website links
- Kaartweergave van installateurs in de buurt

## Service Types

- Airco Installatie
- Airco Onderhoud
- Warmtepomp
- Split-unit systemen
- Multi-split systemen
- Airco Reparatie
- Klimaatbeheersing

## Certificeringen

- F-gassen gecertificeerd (EU vereist)
- STEK gecertificeerd
- Erkend installateur per merk

## Contact

- Website: https://vindaircomonteur.nl
- Email: info@vindaircomonteur.nl
