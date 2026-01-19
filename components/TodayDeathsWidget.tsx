'use client';

import Link from 'next/link';
import { Snowflake, Users, ChevronRight, TrendingUp } from 'lucide-react';

// Airco statistics and facts for the Netherlands
const aircoFacts = [
  {
    stat: '500+',
    label: 'Monteurs in database',
    description: 'Door heel Nederland'
  },
  {
    stat: '12',
    label: 'Provincies',
    description: 'Landelijke dekking'
  },
  {
    stat: '100%',
    label: 'Gecertificeerd',
    description: 'F-gassen certificering'
  }
];

export default function AircoStatsWidget() {
  return (
    <section className="bg-gradient-to-br from-cyan-600 to-blue-700 backdrop-blur-sm rounded-xl p-6 text-white border border-white/10 shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Snowflake className="w-5 h-5 text-cyan-200" />
          <h3 className="font-serif text-lg font-bold">Airco Monteurs</h3>
        </div>
        <TrendingUp className="w-5 h-5 text-cyan-300" />
      </div>

      <div className="space-y-3">
        {aircoFacts.map((fact, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-lg p-3 hover:bg-white/15 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-2xl text-white">{fact.stat}</p>
                <p className="text-sm text-white/90">{fact.label}</p>
              </div>
            </div>
            <p className="text-xs text-white/70 mt-1">{fact.description}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <Link
          href="/guide"
          className="flex-1 flex items-center justify-center gap-1 bg-white hover:bg-cyan-50 text-cyan-700 font-medium py-2 rounded-lg transition-colors"
        >
          Airco Gids
          <ChevronRight className="w-4 h-4" />
        </Link>
        <Link
          href="/search"
          className="flex items-center justify-center gap-1 bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          <Users className="w-4 h-4" />
          Zoeken
        </Link>
      </div>
    </section>
  );
}
