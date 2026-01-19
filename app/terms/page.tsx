import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden | VindAircoMonteur.nl',
  description: 'Algemene voorwaarden van VindAircoMonteur.nl.',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li><Link href="/" className="hover:text-foreground">Home</Link></li>
          <li>/</li>
          <li className="text-foreground">Algemene Voorwaarden</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold mb-8">Algemene Voorwaarden</h1>

      <div className="prose prose-gray max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Definities</h2>
          <p className="mb-4">
            In deze algemene voorwaarden worden de volgende termen gehanteerd:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Website:</strong> VindAircoMonteur.nl</li>
            <li><strong>Gebruiker:</strong> Iedere bezoeker van de website</li>
            <li><strong>Informatie:</strong> Alle gegevens over airco monteurs op de website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Toepasselijkheid</h2>
          <p className="mb-4">
            Deze algemene voorwaarden zijn van toepassing op elk gebruik van de VindAircoMonteur.nl website.
            Door gebruik te maken van onze website, aanvaardt u deze voorwaarden.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Gebruik van de Website</h2>
          <p className="mb-4">
            De website is bedoeld voor informatieve doeleinden. Gebruikers kunnen:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Zoeken naar airco monteurs in Nederland</li>
            <li>Informatie bekijken over diensten en contactgegevens</li>
            <li>Routebeschrijvingen verkrijgen naar monteurs</li>
          </ul>
          <p className="mb-4">
            Het is niet toegestaan de website te gebruiken voor illegale doeleinden of op een manier die
            schade zou kunnen toebrengen aan de website of andere gebruikers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Intellectueel Eigendom</h2>
          <p className="mb-4">
            Alle content op deze website, inclusief teksten, afbeeldingen, logos en datastructuren, is eigendom
            van VindAircoMonteur.nl of haar licentiegevers. Het is niet toegestaan om content te kopieren,
            reproduceren of verspreiden zonder schriftelijke toestemming.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Disclaimer</h2>
          <p className="mb-4">
            Wij streven naar correcte en actuele informatie, maar kunnen niet garanderen dat alle
            informatie te allen tijde volledig juist is. VindAircoMonteur.nl is niet aansprakelijk voor:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Onjuistheden in de verstrekte informatie</li>
            <li>Beslissingen genomen op basis van informatie op de website</li>
            <li>Technische storingen of onderbrekingen</li>
            <li>Schade voortvloeiend uit het gebruik van de website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Links naar Externe Websites</h2>
          <p className="mb-4">
            Onze website kan links bevatten naar externe websites. Wij zijn niet verantwoordelijk voor de inhoud
            of het privacybeleid van deze externe websites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Wijzigingen</h2>
          <p className="mb-4">
            Wij behouden ons het recht voor deze algemene voorwaarden op elk moment te wijzigen. Wijzigingen
            treden in werking zodra zij op de website zijn gepubliceerd. Het is uw verantwoordelijkheid om
            regelmatig de voorwaarden te raadplegen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Toepasselijk Recht</h2>
          <p className="mb-4">
            Op deze algemene voorwaarden is Nederlands recht van toepassing. Eventuele geschillen worden
            voorgelegd aan de bevoegde rechter in Nederland.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
          <p className="mb-4">
            Voor vragen over deze algemene voorwaarden kunt u contact met ons opnemen via:
          </p>
          <p className="mb-4">
            E-mail: <a href="mailto:info@vindaircomonteur.nl" className="text-cyan-600 hover:underline">info@vindaircomonteur.nl</a>
          </p>
        </section>
      </div>
    </div>
  );
}
