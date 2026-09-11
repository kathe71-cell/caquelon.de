import React from 'react';
import CTAButton from '../components/CTAButton';
import SEOHead from '../components/SEOHead';
import IngredientCalculator from '../components/IngredientCalculator';
import { Clock, Users } from 'lucide-react';

const baseServings = 4;
const ingredients = [
  { name: 'Cashewkerne (über Nacht eingeweicht)', quantity: 200, unit: 'g' },
  { name: 'Hefeflocken', quantity: 4, unit: 'EL' },
  { name: 'Gemüsebrühe (warm)', quantity: 300, unit: 'ml' },
  { name: 'Weißwein (vegan)', quantity: 100, unit: 'ml' },
  { name: 'Zitronensaft', quantity: 2, unit: 'EL' },
  { name: 'Tahin (Sesampaste)', quantity: 1, unit: 'EL' },
  { name: 'Knoblauchzehe', quantity: 1, unit: 'Stück' },
  { name: 'Muskatnuss & Salz', quantity: 'nach Geschmack', unit: '' },
  { name: 'Brot und Gemüse zum Dippen', quantity: 'nach Belieben', unit: '' },
];

export default function VeganesKaeseFondue() {
  return (
    <>
      <SEOHead 
        title="Veganes 'Käse'-Fondue auf Cashew-Basis | Caquelon.de"
        description="Eine erstaunlich cremige vegane Alternative zum klassischen Käsefondue, zubereitet aus Cashewkernen und Hefeflocken."
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Veganes <span className="text-red-900">'Käse'-Fondue</span></h1>
            <p className="text-xl text-gray-600 mb-8">Eine erstaunlich cremige und würzige vegane Alternative, zubereitet aus Cashewkernen und Hefeflocken.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Clock className="w-5 h-5 text-red-900" /><span>20 Minuten</span></div>
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
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Eingeweichte Cashews mit Hefeflocken, Zitronensaft, Tahin und Knoblauch in einem Mixer pürieren.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Nach und nach warme Gemüsebrühe zugeben, bis eine cremige Konsistenz entsteht.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Die Masse in das Caquelon geben, mit Weißwein verrühren und erhitzen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Mit Muskatnuss und Salz abschmecken und auf dem Rechaud mit Brot und Gemüse servieren.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Überraschend käsig!</h2>
            <p className="text-xl text-red-100 mb-8">Auch veganes Fondue schmeckt im traditionellen Caquelon am besten.</p>
            <CTAButton href="https://amzn.to/4mthKBR" variant="secondary" size="large">Caquelon für veganes Fondue entdecken</CTAButton>
          </div>
        </section>
      </div>
    </>
  );
}