'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Wat kost een airco laten installeren?",
    answer: "De kosten voor een airco installatie varieren tussen de 1.500 en 3.500 euro, afhankelijk van het type systeem, het merk en de complexiteit van de installatie. Een standaard split-unit airco voor een woonkamer kost gemiddeld rond de 2.000 euro inclusief montage. Voor een multi-split systeem met meerdere binnenunits moet je rekenen op 3.000 tot 6.000 euro. Vraag altijd meerdere offertes aan voor de beste prijs."
  },
  {
    question: "Heb ik een vergunning nodig voor een airco?",
    answer: "In de meeste gevallen heb je geen vergunning nodig voor een airco installatie bij een woonhuis. Wel moet de buitenunit aan bepaalde eisen voldoen qua geluidsniveau (maximaal 40 dB aan de erfgrens) en plaatsing. Bij monumentale panden of in sommige VvE-situaties kan toestemming vereist zijn. Check altijd de regels van je gemeente en eventuele VvE-voorschriften voordat je een airco laat plaatsen."
  },
  {
    question: "Wat is het verschil tussen een split-unit en multi-split?",
    answer: "Een split-unit airco bestaat uit een binnenunit en een buitenunit en is geschikt voor het koelen van een ruimte. Een multi-split systeem heeft meerdere binnenunits (2-5 stuks) aangesloten op een buitenunit, waarmee je meerdere kamers kunt koelen en verwarmen. Multi-split is efficienter en goedkoper dan meerdere losse split-units als je meerdere ruimtes wilt klimatiseren."
  },
  {
    question: "Kan een airco ook verwarmen?",
    answer: "Ja, moderne airconditioners met warmtepompfunctie kunnen zowel koelen als verwarmen. Dit heet een 'reversible' of 'inverter' airco. Verwarmen met een airco is tot 4x energiezuiniger dan elektrisch verwarmen en kan tot 50% besparen op gaskosten. Vooral lucht-lucht warmtepompen zijn populair als aanvulling op de cv-ketel of als primaire verwarming in goed geisoleerde woningen."
  },
  {
    question: "Hoe vaak moet een airco onderhouden worden?",
    answer: "Een airco moet minimaal 1x per jaar onderhouden worden, bij voorkeur voor het koelseizoen begint (maart-april). Tijdens het onderhoud worden de filters gereinigd of vervangen, het koelmiddelniveau gecontroleerd en de werking getest. Regelmatig onderhoud verlengt de levensduur, verbetert de efficientie en voorkomt storingen. De kosten voor een onderhoudsbeurt liggen tussen 75 en 150 euro."
  },
  {
    question: "Wat is F-gassen certificering?",
    answer: "F-gassen certificering is een wettelijk verplichte kwalificatie voor monteurs die werken met gefluoreerde broeikasgassen (koudemiddelen) in aircosystemen. Alleen F-gassen gecertificeerde bedrijven mogen airco's installeren, onderhouden en repareren. Dit certificaat garandeert dat de monteur vakbekwaam is en voldoet aan Europese milieuwetgeving. Vraag altijd naar het F-gassen certificaat voordat je een monteur inhuurt."
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // JSON-LD structured data for FAQ
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Veelgestelde Vragen</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium">{item.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4 pt-0">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
