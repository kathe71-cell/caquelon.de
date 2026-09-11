import React from 'react';
import CTAButton from '../components/CTAButton';
import SEOHead from '../components/SEOHead';
import IngredientCalculator from '../components/IngredientCalculator';
import { Clock, Users } from 'lucide-react';

const baseServings = 4;
const ingredients = [
  { name: 'Gorgonzola (cremig)', quantity: 300, unit: 'g' },
  { name: 'Emmentaler, gerieben', quantity: 200, unit: 'g' },
  { name: 'Trockener Weißwein', quantity: 200, unit: 'ml' },
  { name: 'Walnüsse, gehackt', quantity: 100, unit: 'g' },
  { name: 'Sahne', quantity: 100, unit: 'ml' },
  { name: 'Speisestärke', quantity: 1, unit: 'TL' },
  { name: 'Honig', quantity: 1, unit: 'TL' },
  { name: 'Walnussbrot oder Baguette', quantity: 'zum Dippen', unit: '' },
];

export default function GorgonzolaFondue() {
  return (
    <>
      <SEOHead 
        title="Gorgonzola-Walnuss-Fondue Rezept | Caquelon.de"
        description="Ein kräftiges, cremiges Käsefondue mit würzigem Gorgonzola und knackigen Walnüssen. Für Blaukäse-Liebhaber!"
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Gorgonzola-<span className="text-red-900">Walnuss-Fondue</span></h1>
            <p className="text-xl text-gray-600 mb-8">Ein kräftiges und cremiges Fondue mit dem würzigen Geschmack von Gorgonzola und knackigen Walnüssen.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Clock className="w-5 h-5 text-red-900" /><span>15 Minuten</span></div>
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
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Weißwein und Sahne im Caquelon erwärmen. Gorgonzola in Stücke brechen und unterrühren.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Emmentaler portionsweise zugeben und schmelzen lassen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Speisestärke mit etwas Wein anrühren, eindicken lassen. Mit Honig abschmecken.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Gehackte Walnüsse unterrühren und auf dem Rechaud mit Walnussbrot servieren.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Für Blaukäse-Liebhaber!</h2>
            <p className="text-xl text-red-100 mb-8">Ein intensives Geschmackserlebnis im traditionellen Caquelon.</p>
            <CTAButton href="https://amzn.to/4mthKBR" variant="secondary" size="large">Traditionelles Caquelon entdecken</CTAButton>
          </div>
        </section>
      </div>
    </>
  );
}