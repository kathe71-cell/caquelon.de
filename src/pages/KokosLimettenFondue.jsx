import React from 'react';
import CTAButton from '../components/CTAButton';
import SEOHead from '../components/SEOHead';
import IngredientCalculator from '../components/IngredientCalculator';
import { Clock, Users } from 'lucide-react';
import FloatingCTABar from '../components/FloatingCTABar';
import { createPageUrl } from '@/utils';

const baseServings = 4;
const ingredients = [
  { name: 'Weiße Schokolade', quantity: 400, unit: 'g' },
  { name: 'Kokosmilch', quantity: 150, unit: 'ml' },
  { name: 'Limettensaft (frisch gepresst)', quantity: 2, unit: 'EL' },
  { name: 'Limettenschale (abgerieben)', quantity: 1, unit: 'TL' },
  { name: 'Kokosraspel', quantity: 2, unit: 'EL' },
  { name: 'Ananas, Kokoschips, Kekse', quantity: 'zum Dippen', unit: '' },
];

export default function KokosLimettenFondue() {
  return (
    <>
      <SEOHead 
        title="Exotisches Kokos-Limetten-Fondue Rezept | Caquelon.de"
        description="Ein frisches, exotisches Dessertfondue mit weißer Schokolade, Kokosmilch und dem spritzigen Aroma von Limetten."
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-green-50 to-yellow-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Exotisches <span className="text-red-900">Kokos-Limetten-Fondue</span></h1>
            <p className="text-xl text-gray-600 mb-8">Ein frisches, exotisches Dessertfondue mit weißer Schokolade, Kokosmilch und dem spritzigen Aroma von Limetten.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Clock className="w-5 h-5 text-red-900" /><span>12 Minuten</span></div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Users className="w-5 h-5 text-red-900" /><span>4 Personen</span></div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <IngredientCalculator baseServings={baseServings} ingredients={ingredients} />
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Zubereitung</h2>
              <ol className="space-y-4 text-gray-700">
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Weiße Schokolade hacken und mit Kokosmilch im Caquelon bei sehr schwacher Hitze schmelzen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Unter ständigem Rühren eine glatte, cremige Masse entstehen lassen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Limettensaft und -schale vorsichtig unterrühren. Die Säure kann die Schokolade zum Gerinnen bringen!</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Kokosraspel unterrühren, auf ein Stövchen mit Teelicht stellen und mit Ananas und Kokoschips servieren.</li>
              </ol>
            </div>
          </div>
        </section>
        {/* Produktempfehlung */}
        <section className="py-12 bg-amber-50 border-t border-amber-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border border-amber-200 shadow-lg p-6 flex flex-col sm:flex-row items-start gap-6">
              <div className="text-4xl">🍫</div>
              <div className="flex-1">
                <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">Empfohlenes Set für dieses Rezept</div>
                <h3 className="text-xl font-extrabold text-stone-900 mb-2">Schokofondue-Set mit Keramiktopf</h3>
                <p className="text-stone-600 text-sm mb-3">Spezielles Schoko-Fondue-Set mit kleinerer Flamme für cremige Schokolade ohne Anbrennen. Perfekt für Dessert-Fondues mit Früchten und Keksen.</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-2xl font-extrabold text-stone-900">ab ~35 €</span>
                  <CTAButton href="https://amzn.to/4c4GZLx" size="small">Jetzt bei Amazon ansehen *</CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Tropisches Urlaubsfeeling!</h2>
            <p className="text-xl text-red-100 mb-8">Holen Sie sich die Tropen ins Wohnzimmer mit diesem exotischen Dessert-Fondue.</p>
            <CTAButton href="https://amzn.to/4c4GZLx" variant="secondary" size="large">Tropisches Schokofondue-Set entdecken</CTAButton>
          </div>
        </section>
      </div>
      <FloatingCTABar title="Fonduetopf kaufen" subtitle="Keramik, Gusseisen & Edelstahl" link={createPageUrl('CaquelonKaufen')} />
    </>
  );
}