import { getProvinceLink, getServiceTypeLink, getCityLink } from './blog-data';

interface BlogContent {
  [key: string]: string;
}

export const blogContent: BlogContent = {
  'airco-kiezen-complete-gids': `
    <div class="blog-content space-y-6">
      <p class="text-lg leading-relaxed text-gray-700">
        Het kiezen van de juiste airco voor je woning of bedrijf kan overweldigend zijn. Met zoveel merken, modellen en specificaties is het lastig om te bepalen welk systeem het beste bij jouw situatie past. In deze complete gids helpen we je stap voor stap de juiste keuze te maken.
      </p>

      <section class="mt-8 space-y-8">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Welk Type Airco Past Bij Jou?</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Er zijn verschillende soorten aircosystemen, elk met hun eigen voor- en nadelen:
          </p>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start">
              <span class="text-cyan-600 mr-2">&#8226;</span>
              <span><strong>Split-unit:</strong> Ideaal voor het koelen van een enkele ruimte. Bestaat uit een binnen- en buitenunit.</span>
            </li>
            <li class="flex items-start">
              <span class="text-cyan-600 mr-2">&#8226;</span>
              <span><strong>Multi-split:</strong> Geschikt voor meerdere kamers. Een buitenunit met meerdere binnenunits.</span>
            </li>
            <li class="flex items-start">
              <span class="text-cyan-600 mr-2">&#8226;</span>
              <span><strong>Mobiele airco:</strong> Flexibel en geen installatie nodig, maar minder efficient.</span>
            </li>
            <li class="flex items-start">
              <span class="text-cyan-600 mr-2">&#8226;</span>
              <span><strong>Plafond/vloermodel:</strong> Discrete oplossing voor grotere ruimtes.</span>
            </li>
          </ul>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Belangrijke Specificaties</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Let bij het kiezen van een airco op deze specificaties:
          </p>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start">
              <span class="text-cyan-600 mr-2">&#8226;</span>
              <span><strong>Koelcapaciteit (kW):</strong> Bepaalt hoeveel ruimte je kunt koelen</span>
            </li>
            <li class="flex items-start">
              <span class="text-cyan-600 mr-2">&#8226;</span>
              <span><strong>SEER-waarde:</strong> Hoe hoger, hoe energiezuiniger bij koelen</span>
            </li>
            <li class="flex items-start">
              <span class="text-cyan-600 mr-2">&#8226;</span>
              <span><strong>SCOP-waarde:</strong> Hoe hoger, hoe energiezuiniger bij verwarmen</span>
            </li>
            <li class="flex items-start">
              <span class="text-cyan-600 mr-2">&#8226;</span>
              <span><strong>Geluidsniveau:</strong> Belangrijk voor slaapkamers en kantoren</span>
            </li>
          </ul>
        </div>

        <div class="bg-cyan-50 rounded-lg p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-3">Tip: Kies een Gecertificeerde Monteur</h2>
          <p class="text-gray-700 mb-4">
            Een goede installatie is minstens zo belangrijk als een goed apparaat. Zoek altijd een <a href="${getServiceTypeLink('airco-installatie')}" class="text-cyan-600 hover:text-cyan-800 underline">gecertificeerde airco installateur</a> in je regio.
          </p>
          <p class="text-gray-700">
            Vind <a href="/" class="text-cyan-600 hover:text-cyan-800 underline">airco monteurs bij jou in de buurt</a>.
          </p>
        </div>
      </section>
    </div>
  `,

  'airco-installatie-kosten-2025': `
    <div class="blog-content space-y-6">
      <p class="text-lg leading-relaxed text-gray-700">
        Ben je benieuwd wat een airco installatie kost? De prijzen varieren afhankelijk van het type systeem, de grootte van je woning en de complexiteit van de installatie. In dit artikel geven we je een compleet overzicht van alle kosten.
      </p>

      <section class="mt-8 space-y-8">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Gemiddelde Prijzen in 2025</h2>

          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Single Split-unit</h3>
              <p class="text-gray-700">
                <strong>Totaalprijs inclusief installatie:</strong> EUR 1.500 - EUR 3.000<br>
                Geschikt voor een enkele kamer tot 40m2.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Multi-split Systeem (2-3 units)</h3>
              <p class="text-gray-700">
                <strong>Totaalprijs inclusief installatie:</strong> EUR 3.500 - EUR 6.000<br>
                Ideaal voor meerdere slaapkamers of een woonkamer met extra kamers.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Multi-split Systeem (4-5 units)</h3>
              <p class="text-gray-700">
                <strong>Totaalprijs inclusief installatie:</strong> EUR 6.000 - EUR 10.000<br>
                Voor complete woningen of kleine kantoren.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Wat Beinvloedt de Prijs?</h2>
          <ul class="space-y-2 text-gray-700">
            <li>&#8226; <strong>Merk en kwaliteit:</strong> Premium merken zoals Daikin of Mitsubishi zijn duurder</li>
            <li>&#8226; <strong>Installatiecomplexiteit:</strong> Lange leidingroutes of moeilijke plaatsing</li>
            <li>&#8226; <strong>Seizoen:</strong> In de zomer zijn monteurs drukker en soms duurder</li>
            <li>&#8226; <strong>Regio:</strong> Prijzen kunnen per provincie varieren</li>
          </ul>
        </div>

        <div class="bg-green-50 rounded-lg p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-3">Bespaar met Meerdere Offertes</h2>
          <p class="text-gray-700 mb-4">
            Vraag altijd offertes aan bij meerdere <a href="${getServiceTypeLink('airco-installatie')}" class="text-cyan-600 hover:text-cyan-800 underline">airco installateurs</a>. Zo kun je prijzen vergelijken en de beste deal vinden.
          </p>
          <p class="text-gray-700">
            Zoek installateurs in bijvoorbeeld <a href="${getProvinceLink('noord-holland')}" class="text-cyan-600 hover:text-cyan-800 underline">Noord-Holland</a>, <a href="${getProvinceLink('zuid-holland')}" class="text-cyan-600 hover:text-cyan-800 underline">Zuid-Holland</a> of <a href="${getProvinceLink('noord-brabant')}" class="text-cyan-600 hover:text-cyan-800 underline">Noord-Brabant</a>.
          </p>
        </div>
      </section>
    </div>
  `,

  'f-gassen-certificering-uitgelegd': `
    <div class="blog-content space-y-6">
      <p class="text-lg leading-relaxed text-gray-700">
        Als je een airco laat installeren, is het wettelijk verplicht dat dit gebeurt door een F-gassen gecertificeerde monteur. Maar wat betekent dit precies en waarom is het zo belangrijk?
      </p>

      <section class="mt-8 space-y-8">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Wat zijn F-gassen?</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            F-gassen (gefluoreerde broeikasgassen) zijn koudemiddelen die in aircosystemen worden gebruikt. Deze gassen zijn zeer effectief voor koeling, maar kunnen bij lekkage schadelijk zijn voor het milieu. Daarom is er strenge Europese wetgeving rondom de omgang met deze stoffen.
          </p>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Waarom is Certificering Verplicht?</h2>
          <ul class="space-y-2 text-gray-700">
            <li>&#8226; <strong>Milieubescherming:</strong> F-gassen hebben een hoog broeikaseffect</li>
            <li>&#8226; <strong>Veiligheid:</strong> Onjuiste omgang kan gevaarlijk zijn</li>
            <li>&#8226; <strong>Kwaliteitsgarantie:</strong> Gecertificeerde monteurs zijn opgeleid</li>
            <li>&#8226; <strong>Wettelijke verplichting:</strong> EU-verordening 517/2014</li>
          </ul>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Hoe Controleer je de Certificering?</h2>
          <p class="text-gray-700 mb-4">
            Een betrouwbare installateur kan altijd zijn F-gassen certificaat tonen. Dit certificaat moet:
          </p>
          <ul class="space-y-2 text-gray-700">
            <li>&#8226; Op naam staan van de monteur of het bedrijf</li>
            <li>&#8226; Geldig zijn (niet verlopen)</li>
            <li>&#8226; Geregistreerd zijn in het landelijke register</li>
          </ul>
        </div>

        <div class="bg-yellow-50 rounded-lg p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-3">Let Op!</h2>
          <p class="text-gray-700 mb-4">
            Een installatie door een niet-gecertificeerde monteur is illegaal en kan leiden tot:
          </p>
          <ul class="space-y-2 text-gray-700">
            <li>&#8226; Boetes tot EUR 450.000</li>
            <li>&#8226; Vervallen van garantie</li>
            <li>&#8226; Problemen met verzekering</li>
          </ul>
          <p class="text-gray-700 mt-4">
            Vind altijd een <a href="/" class="text-cyan-600 hover:text-cyan-800 underline">gecertificeerde airco monteur</a> via ons platform.
          </p>
        </div>
      </section>
    </div>
  `,

  'split-unit-vs-multi-split': `
    <div class="blog-content space-y-6">
      <p class="text-lg leading-relaxed text-gray-700">
        Twijfel je tussen een single split-unit en een multi-split systeem? Beide hebben hun voordelen, en de juiste keuze hangt af van jouw specifieke situatie. We zetten de verschillen voor je op een rij.
      </p>

      <section class="mt-8 space-y-8">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Single Split-unit</h2>
          <p class="text-gray-700 mb-4">
            Een split-unit bestaat uit een buitenunit en een binnenunit, en is ideaal voor het koelen van een enkele ruimte.
          </p>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-green-50 rounded-lg p-4">
              <h3 class="font-semibold text-gray-900 mb-2">Voordelen</h3>
              <ul class="space-y-1 text-gray-700 text-sm">
                <li>&#8226; Lagere aanschafkosten</li>
                <li>&#8226; Eenvoudige installatie</li>
                <li>&#8226; Optimale prestaties per ruimte</li>
                <li>&#8226; Individuele temperatuurregeling</li>
              </ul>
            </div>
            <div class="bg-red-50 rounded-lg p-4">
              <h3 class="font-semibold text-gray-900 mb-2">Nadelen</h3>
              <ul class="space-y-1 text-gray-700 text-sm">
                <li>&#8226; Alleen voor een ruimte</li>
                <li>&#8226; Meerdere buitenunits bij meerdere kamers</li>
                <li>&#8226; Meer gevelruimte nodig</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Multi-split Systeem</h2>
          <p class="text-gray-700 mb-4">
            Een multi-split systeem heeft een buitenunit die verbonden is met 2 tot 5 binnenunits voor verschillende ruimtes.
          </p>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-green-50 rounded-lg p-4">
              <h3 class="font-semibold text-gray-900 mb-2">Voordelen</h3>
              <ul class="space-y-1 text-gray-700 text-sm">
                <li>&#8226; Een buitenunit voor hele woning</li>
                <li>&#8226; Minder impact op gevel</li>
                <li>&#8226; Centrale koeling meerdere kamers</li>
                <li>&#8226; Vaak goedkoper dan losse units</li>
              </ul>
            </div>
            <div class="bg-red-50 rounded-lg p-4">
              <h3 class="font-semibold text-gray-900 mb-2">Nadelen</h3>
              <ul class="space-y-1 text-gray-700 text-sm">
                <li>&#8226; Hogere initiele investering</li>
                <li>&#8226; Complexere installatie</li>
                <li>&#8226; Bij storing hele systeem uit</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-cyan-50 rounded-lg p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-3">Advies Nodig?</h2>
          <p class="text-gray-700">
            Een <a href="${getServiceTypeLink('airco-installatie')}" class="text-cyan-600 hover:text-cyan-800 underline">ervaren airco installateur</a> kan je adviseren welk systeem het beste past bij jouw woning en wensen.
          </p>
        </div>
      </section>
    </div>
  `,

  'airco-onderhoud-tips': `
    <div class="blog-content space-y-6">
      <p class="text-lg leading-relaxed text-gray-700">
        Regelmatig onderhoud verlengt de levensduur van je airco en zorgt voor optimale prestaties. Sommige taken kun je zelf doen, voor andere is een professional nodig. Hier zijn 10 essenti??le onderhoudstips.
      </p>

      <section class="mt-8 space-y-8">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Zelf Doen</h2>
          <div class="space-y-4">
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">1. Filters Reinigen</h3>
              <p class="text-gray-700 text-sm">
                Reinig de filters elke 2-4 weken met lauw water. Vuile filters verminderen de efficientie met wel 15%.
              </p>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">2. Binnenunit Afstoffen</h3>
              <p class="text-gray-700 text-sm">
                Stof de behuizing regelmatig af met een zachte doek om stofophoping te voorkomen.
              </p>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">3. Buitenunit Vrijhouden</h3>
              <p class="text-gray-700 text-sm">
                Zorg dat de buitenunit niet wordt geblokkeerd door planten of rommel. Minimaal 50cm ruimte rondom.
              </p>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">4. Condensafvoer Controleren</h3>
              <p class="text-gray-700 text-sm">
                Controleer of de condensafvoer vrij is. Een verstopte afvoer kan lekkage veroorzaken.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Door een Professional</h2>
          <div class="space-y-4">
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">5. Jaarlijkse Inspectie</h3>
              <p class="text-gray-700 text-sm">
                Laat je airco jaarlijks controleren door een <a href="${getServiceTypeLink('airco-onderhoud')}" class="text-cyan-600 hover:text-cyan-800 underline">gecertificeerde onderhoudsmonteur</a>.
              </p>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">6. Koudemiddel Controleren</h3>
              <p class="text-gray-700 text-sm">
                Alleen een F-gassen gecertificeerde monteur mag het koudemiddelpeil controleren en bijvullen.
              </p>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">7. Elektrische Componenten</h3>
              <p class="text-gray-700 text-sm">
                Laat aansluitingen en bekabeling controleren op slijtage of beschadigingen.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-green-50 rounded-lg p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-3">Onderhoudstip</h2>
          <p class="text-gray-700">
            Plan onderhoud in het voorjaar, voor het drukke koelseizoen. Vind een <a href="${getServiceTypeLink('airco-onderhoud')}" class="text-cyan-600 hover:text-cyan-800 underline">airco onderhoudsbedrijf</a> bij jou in de buurt.
          </p>
        </div>
      </section>
    </div>
  `,

  'warmtepomp-airco-verschil': `
    <div class="blog-content space-y-6">
      <p class="text-lg leading-relaxed text-gray-700">
        Moderne airconditioners kunnen niet alleen koelen, maar ook verwarmen. Dit maakt ze vergelijkbaar met warmtepompen. Maar wat is nu precies het verschil? En wanneer kies je voor welke optie?
      </p>

      <section class="mt-8 space-y-8">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">De Basis: Hoe Werken Ze?</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Zowel een airco als een warmtepomp werken op hetzelfde principe: ze verplaatsen warmte van de ene naar de andere plek met behulp van een koudemiddel. Het enige verschil is de richting:
          </p>
          <ul class="space-y-2 text-gray-700">
            <li>&#8226; <strong>Koelen:</strong> Warmte van binnen naar buiten verplaatsen</li>
            <li>&#8226; <strong>Verwarmen:</strong> Warmte van buiten naar binnen halen</li>
          </ul>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Lucht-lucht Warmtepomp vs Airco</h2>
          <p class="text-gray-700 mb-4">
            Een airco met verwarmfunctie is technisch gezien een lucht-lucht warmtepomp. Het verschil zit vooral in de marketing en het primaire gebruiksdoel:
          </p>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-cyan-50 rounded-lg p-4">
              <h3 class="font-semibold text-gray-900 mb-2">Airco</h3>
              <ul class="space-y-1 text-gray-700 text-sm">
                <li>&#8226; Primair voor koeling</li>
                <li>&#8226; Verwarming als extra functie</li>
                <li>&#8226; Lagere SCOP (verwarmefficie??ntie)</li>
              </ul>
            </div>
            <div class="bg-orange-50 rounded-lg p-4">
              <h3 class="font-semibold text-gray-900 mb-2">Lucht-lucht Warmtepomp</h3>
              <ul class="space-y-1 text-gray-700 text-sm">
                <li>&#8226; Primair voor verwarming</li>
                <li>&#8226; Koeling als extra functie</li>
                <li>&#8226; Hogere SCOP, werkt beter bij lage temperaturen</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-cyan-50 rounded-lg p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-3">Advies</h2>
          <p class="text-gray-700">
            Wil je vooral koelen? Kies een airco. Wil je je gasverbruik verminderen? Overweeg een warmtepomp. Een <a href="${getServiceTypeLink('warmtepomp')}" class="text-cyan-600 hover:text-cyan-800 underline">warmtepomp specialist</a> kan je adviseren over de beste oplossing.
          </p>
        </div>
      </section>
    </div>
  `,

  'beste-airco-merken-nederland': `
    <div class="blog-content space-y-6">
      <p class="text-lg leading-relaxed text-gray-700">
        Bij het kiezen van een airco is het merk een belangrijke factor. We vergelijken de populairste airco merken in Nederland op prijs, kwaliteit, betrouwbaarheid en service.
      </p>

      <section class="mt-8 space-y-8">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Top 5 Airco Merken</h2>

          <div class="space-y-6">
            <div class="border-l-4 border-cyan-500 pl-4">
              <h3 class="text-lg font-semibold text-gray-900">1. Daikin</h3>
              <p class="text-gray-700 text-sm mb-2">
                Japans premiummerk, marktleider in Nederland. Bekend om innovatie, betrouwbaarheid en uitstekende service.
              </p>
              <p class="text-gray-600 text-xs">Prijsrange: EUR 1.800 - EUR 4.000 (incl. installatie)</p>
            </div>

            <div class="border-l-4 border-cyan-500 pl-4">
              <h3 class="text-lg font-semibold text-gray-900">2. Mitsubishi Electric</h3>
              <p class="text-gray-700 text-sm mb-2">
                Japanse kwaliteit met fluisterstille werking. Populair voor slaapkamers en kantoren.
              </p>
              <p class="text-gray-600 text-xs">Prijsrange: EUR 1.700 - EUR 3.800 (incl. installatie)</p>
            </div>

            <div class="border-l-4 border-cyan-500 pl-4">
              <h3 class="text-lg font-semibold text-gray-900">3. LG</h3>
              <p class="text-gray-700 text-sm mb-2">
                Zuid-Koreaans merk met moderne designs en slimme functies. Goede prijs-kwaliteitverhouding.
              </p>
              <p class="text-gray-600 text-xs">Prijsrange: EUR 1.500 - EUR 3.200 (incl. installatie)</p>
            </div>

            <div class="border-l-4 border-cyan-500 pl-4">
              <h3 class="text-lg font-semibold text-gray-900">4. Samsung</h3>
              <p class="text-gray-700 text-sm mb-2">
                Innovatief met Wind-Free technologie voor tochtvrijkoeling. Moderne uitstraling.
              </p>
              <p class="text-gray-600 text-xs">Prijsrange: EUR 1.500 - EUR 3.500 (incl. installatie)</p>
            </div>

            <div class="border-l-4 border-cyan-500 pl-4">
              <h3 class="text-lg font-semibold text-gray-900">5. Toshiba</h3>
              <p class="text-gray-700 text-sm mb-2">
                Betrouwbare Japanse kwaliteit, uitvinder van de split-unit. Goed geprijsd.
              </p>
              <p class="text-gray-600 text-xs">Prijsrange: EUR 1.400 - EUR 3.000 (incl. installatie)</p>
            </div>
          </div>
        </div>

        <div class="bg-green-50 rounded-lg p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-3">Advies van een Specialist</h2>
          <p class="text-gray-700">
            Veel installateurs zijn gespecialiseerd in bepaalde merken. Vraag advies aan een <a href="/" class="text-cyan-600 hover:text-cyan-800 underline">airco specialist</a> over welk merk het beste past bij jouw situatie en budget.
          </p>
        </div>
      </section>
    </div>
  `,

  'airco-vergunning-nodig': `
    <div class="blog-content space-y-6">
      <p class="text-lg leading-relaxed text-gray-700">
        Voordat je een airco laat installeren, is het belangrijk om te weten welke regels er gelden. In de meeste gevallen heb je geen vergunning nodig, maar er zijn uitzonderingen.
      </p>

      <section class="mt-8 space-y-8">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Wanneer Wel een Vergunning?</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Een omgevingsvergunning kan nodig zijn in deze situaties:
          </p>
          <ul class="space-y-2 text-gray-700">
            <li>&#8226; <strong>Monumentale panden:</strong> Altijd toestemming nodig van de gemeente</li>
            <li>&#8226; <strong>Beschermd stadsgezicht:</strong> Vaak strengere regels voor buitenunits</li>
            <li>&#8226; <strong>VvE:</strong> Bij appartementen toestemming van de VvE vereist</li>
            <li>&#8226; <strong>Huurwoning:</strong> Toestemming van de verhuurder nodig</li>
          </ul>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Geluidsnormen</h2>
          <p class="text-gray-700 mb-4">
            De buitenunit mag niet teveel geluid produceren richting buren. De regels:
          </p>
          <ul class="space-y-2 text-gray-700">
            <li>&#8226; Maximaal 40 dB(A) op de erfgrens</li>
            <li>&#8226; 's Nachts (23:00-07:00) strengere normen</li>
            <li>&#8226; Plaatsing minimaal 2 meter van de erfgrens wordt aangeraden</li>
          </ul>
        </div>

        <div class="bg-yellow-50 rounded-lg p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-3">Tips</h2>
          <ul class="space-y-2 text-gray-700">
            <li>&#8226; Check altijd je gemeentelijke website voor lokale regels</li>
            <li>&#8226; Informeer buren vooraf over je plannen</li>
            <li>&#8226; Kies een stille buitenunit</li>
            <li>&#8226; Plaats de unit op een strategische plek</li>
          </ul>
          <p class="text-gray-700 mt-4">
            Een ervaren <a href="${getServiceTypeLink('airco-installatie')}" class="text-cyan-600 hover:text-cyan-800 underline">airco installateur</a> kan je adviseren over de beste plaatsing.
          </p>
        </div>
      </section>
    </div>
  `,

  'airco-slaapkamer-tips': `
    <div class="blog-content space-y-6">
      <p class="text-lg leading-relaxed text-gray-700">
        Een airco in de slaapkamer kan zorgen voor heerlijk koele nachten, maar verkeerd gebruik kan leiden tot kou vatten of slechte slaap door geluid. Hier zijn tips voor optimaal gebruik.
      </p>

      <section class="mt-8 space-y-8">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">De Ideale Temperatuur</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            De optimale slaaptemperatuur ligt tussen 16 en 19 graden Celsius. Een paar tips:
          </p>
          <ul class="space-y-2 text-gray-700">
            <li>&#8226; Stel de airco in op 18-20 graden voor comfort</li>
            <li>&#8226; Gebruik de timer om de airco uit te zetten na het inslapen</li>
            <li>&#8226; Voorkom te groot temperatuurverschil met overdag</li>
          </ul>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Geluid Beperken</h2>
          <ul class="space-y-2 text-gray-700">
            <li>&#8226; Kies een model met nachtstand (&#60;20 dB)</li>
            <li>&#8226; Merken als Mitsubishi en Daikin staan bekend om stille werking</li>
            <li>&#8226; Plaats de binnenunit niet direct boven het bed</li>
            <li>&#8226; Laat de installateur trillingsdempers gebruiken</li>
          </ul>
        </div>

        <div class="bg-cyan-50 rounded-lg p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-3">Gezondheid</h2>
          <p class="text-gray-700 mb-4">
            Voorkom gezondheidsproblemen door:
          </p>
          <ul class="space-y-2 text-gray-700">
            <li>&#8226; De luchtstroom niet direct op je lichaam te richten</li>
            <li>&#8226; Filters regelmatig schoon te maken</li>
            <li>&#8226; Niet te koud in te stellen</li>
            <li>&#8226; De slaapstand te gebruiken (langzaam temperatuur verhogen)</li>
          </ul>
        </div>
      </section>
    </div>
  `,

  'energiezuinige-airco-kiezen': `
    <div class="blog-content space-y-6">
      <p class="text-lg leading-relaxed text-gray-700">
        Een energiezuinige airco bespaart je geld op de energierekening en is beter voor het milieu. Maar hoe herken je een zuinig model? Let op deze labels en waarden.
      </p>

      <section class="mt-8 space-y-8">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Belangrijke Waarden</h2>

          <div class="space-y-4">
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">SEER (Seasonal Energy Efficiency Ratio)</h3>
              <p class="text-gray-700 text-sm">
                Meet de koeleffici??ntie over een heel seizoen. Hoe hoger, hoe beter. A+++ begint bij SEER 8,5.
              </p>
            </div>

            <div>
              <h3 class="font-semibold text-gray-900 mb-2">SCOP (Seasonal Coefficient of Performance)</h3>
              <p class="text-gray-700 text-sm">
                Meet de verwarmingseffici??ntie. Belangrijk als je ook wilt verwarmen. A+++ begint bij SCOP 5,1.
              </p>
            </div>

            <div>
              <h3 class="font-semibold text-gray-900 mb-2">Energielabel</h3>
              <p class="text-gray-700 text-sm">
                Van A+++ (meest zuinig) tot D (minst zuinig). Kies minimaal A+ voor een zuinige airco.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Tips voor Energiebesparing</h2>
          <ul class="space-y-2 text-gray-700">
            <li>&#8226; Kies een inverter-airco (regelt vermogen continu)</li>
            <li>&#8226; Stel niet kouder in dan 24-25 graden bij warm weer</li>
            <li>&#8226; Houd ramen en deuren gesloten tijdens gebruik</li>
            <li>&#8226; Gebruik zonwering om warmte buiten te houden</li>
            <li>&#8226; Onderhoud filters regelmatig voor optimale efficientie</li>
          </ul>
        </div>

        <div class="bg-green-50 rounded-lg p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-3">Berekening</h2>
          <p class="text-gray-700">
            Een A+++ airco verbruikt tot 40% minder energie dan een A+ model. Bij 500 draaiuren per jaar kan dit EUR 50-100 per jaar schelen.
          </p>
        </div>
      </section>
    </div>
  `,

  'airco-subsidie-2025': `
    <div class="blog-content space-y-6">
      <p class="text-lg leading-relaxed text-gray-700">
        Wist je dat je subsidie kunt krijgen voor bepaalde airco's en warmtepompen? De ISDE-regeling biedt aantrekkelijke subsidies voor lucht-lucht warmtepompen. Hier lees je hoe het werkt.
      </p>

      <section class="mt-8 space-y-8">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">ISDE Subsidie 2025</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            De Investeringssubsidie Duurzame Energie (ISDE) is beschikbaar voor:
          </p>
          <ul class="space-y-2 text-gray-700">
            <li>&#8226; <strong>Lucht-lucht warmtepompen:</strong> EUR 300 - EUR 1.800</li>
            <li>&#8226; <strong>Lucht-water warmtepompen:</strong> EUR 1.000 - EUR 3.450</li>
            <li>&#8226; Subsidie is afhankelijk van vermogen en efficientie</li>
          </ul>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Voorwaarden</h2>
          <ul class="space-y-2 text-gray-700">
            <li>&#8226; Apparaat moet op de ISDE-apparatenlijst staan</li>
            <li>&#8226; Installatie door een gecertificeerd bedrijf</li>
            <li>&#8226; Woning moet voor 1 januari 2019 zijn gebouwd</li>
            <li>&#8226; Aanvragen binnen 6 maanden na installatie</li>
          </ul>
        </div>

        <div class="bg-cyan-50 rounded-lg p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-3">Hoe Aanvragen?</h2>
          <ol class="space-y-2 text-gray-700">
            <li>1. Kies een warmtepomp van de ISDE-lijst</li>
            <li>2. Laat installeren door een <a href="${getServiceTypeLink('warmtepomp')}" class="text-cyan-600 hover:text-cyan-800 underline">gecertificeerde installateur</a></li>
            <li>3. Vraag subsidie aan via mijnrvo.nl</li>
            <li>4. Ontvang de subsidie na goedkeuring</li>
          </ol>
        </div>
      </section>
    </div>
  `,
};

export function getBlogContent(slug: string): string | undefined {
  return blogContent[slug];
}
