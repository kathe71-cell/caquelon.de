import React from 'react';
import CTAButton from '../components/CTAButton';
import SEOHead from '../components/SEOHead';
import IngredientCalculator from '../components/IngredientCalculator';
import { Clock, Users } from 'lucide-react';

const baseServings = 4;
const ingredients = [
  { name: 'Rinderfilet, hauchdünn geschnitten', quantity: 400, unit: 'g' },
  { name: 'Dashi-Pulver oder Kombu-Algen', quantity: 2, unit: 'EL' },
  { name: 'Wasser', quantity: 1.5, unit: 'Liter' },
  { name: 'Pak Choi', quantity: 200, unit: 'g' },
  { name: 'Shiitake-Pilze', quantity: 150, unit: 'g' },
  { name: 'Tofu, gewürfelt', quantity: 200, unit: 'g' },
  { name: 'Udon-Nudeln', quantity: 200, unit: 'g' },
  { name: 'Ponzu-Sauce & Sesamsauce', quantity: 'zum Dippen', unit: '' },
];

export default function ShabuShabu() {
  return (
    <>
      <SEOHead 
        title="Japanisches Shabu-Shabu Fondue Rezept | caquelon.de"
        description="Authentisches japanisches Shabu-Shabu mit hauchdünnen Fleischscheiben in Dashi-Brühe. Ein leichter, gesunder Genuss."
        canonical="https://caquelon.de/shabushabu"
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Japanisches <span className="text-red-900">Shabu-Shabu</span></h1>
            <p className="text-xl text-gray-600 mb-8">Hauchdünne Fleischscheiben und Gemüse werden kurz in aromatischer Dashi-Brühe geschwenkt - ein leichter Genuss.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Clock className="w-5 h-5 text-red-900" /><span>30 Minuten</span></div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Users className="w-5 h-5 text-red-900" /><span>4-6 Personen</span></div>
            </div>   
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <IngredientCalculator baseServings={baseServings} ingredients={ingredients} category="bruehe" />
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Zubereitung</h2>
              <ol className="space-y-4 text-gray-700">
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Dashi-Brühe aus Pulver oder Kombu-Algen zubereiten und im Caquelon erhitzen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Das Fleisch mit einem scharfen Messer hauchdünn schneiden (am besten leicht angefroren).</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Gemüse in mundgerechte Stücke schneiden, Tofu würfeln.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Fleisch und Gemüse mit Stäbchen kurz in der heißen Brühe schwenken und in die Dipsaucen tauchen.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Japanische Eleganz!</h2>
            <p className="text-xl text-red-100 mb-8">Erlebe die Kunst des Shabu-Shabu mit dem richtigen Equipment.</p>
            <CTAButton href="https://amzn.to/4mthKBR" variant="secondary" size="large">Caquelon für Shabu-Shabu entdecken</CTAButton>
          </div>
        </section>
      </div>
    </>
  );
}