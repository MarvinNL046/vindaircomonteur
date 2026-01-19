import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function PremiumContentBanner() {
  return (
    <Card className="bg-gradient-to-r from-cyan-100 to-blue-50 border-cyan-200 overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-6 h-6 text-cyan-600" />
              <span className="text-sm font-medium text-cyan-600">GRATIS GIDS</span>
            </div>

            <h3 className="text-2xl font-bold mb-3">
              De Complete Airco Gids
            </h3>

            <p className="text-gray-700 mb-4">
              Lees onze uitgebreide gids met alles wat u moet weten over:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                <span className="text-sm">Verschillende airco systemen en hun voordelen</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                <span className="text-sm">Kosten en subsidiemogelijkheden</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                <span className="text-sm">Wat u kunt verwachten bij installatie</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                <span className="text-sm">Onderhoudstips voor langere levensduur</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/guide">
                <Button size="lg" className="group bg-cyan-600 hover:bg-cyan-700">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Bekijk Airco Gidsen
                </Button>
              </Link>
              <p className="text-xs text-gray-500 self-center">
                Geen registratie vereist
              </p>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-200/50 to-transparent rounded-lg"></div>
              <div className="bg-white p-8 rounded-lg shadow-xl transform rotate-3 hover:rotate-1 transition-transform">
                <div className="space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-20 bg-cyan-50 rounded my-4"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                </div>
                <div className="absolute top-4 right-4 text-cyan-600 font-bold text-lg">
                  GIDS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
