import React from 'react';
import CTAButton from '../components/CTAButton';
import SEOHead from '../components/SEOHead';
import IngredientCalculator from '../components/IngredientCalculator';
import { Clock, Users } from 'lucide-react';

const baseServings = 4;
const ingredients = [
  { name: 'Vacherin Fribourgeois, gerieben', quantity: 300, unit: 'g' },
  { name: 'Greyerzer Käse (Gruyère), gerieben', quantity: 300, unit: 'g' },
  { name: 'Knoblauchzehe, halbiert', quantity: 1, unit: 'Stück' },
  { name: 'Trockener Weißwein (z.B. Fendant)', quantity: 300, unit: 'ml' },
  { name: 'Kirschwasser', quantity: 2, unit: 'EL' },
  { name: 'Speisestärke', quantity: 1, unit: 'TL' },
  { name: 'Muskatnuss & weißer Pfeffer', quantity: 1, unit: 'Prise' },
  { name: 'Brotwürfel (altbacken)', quantity: 800, unit: 'g' },
];

export default function MoitieMoitie() {
  return (
    <>
      <SEOHead 
        title="Fondue Moitié-Moitié - Original Schweizer Klassiker | Caquelon.de"
        description="Das ursprüngliche Schweizer Käsefondue aus je zur Hälfte Vacherin Fribourgeois und Greyerzer Käse."
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-red-50 to-amber-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Fondue <span className="text-red-900">Moitié-Moitié</span></h1>
            <p className="text-xl text-gray-600 mb-8">Der Urvater aller Schweizer Käsefondues - je zur Hälfte aus Vacherin Fribourgeois und Greyerzer.</p>
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
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Das Caquelon mit der halbierten Knoblauchzehe kräftig ausreiben.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Weißwein im Caquelon erwärmen. Beide Käsesorten nach und nach unter ständigem Rühren zugeben.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Speisestärke im Kirschwasser auflösen und unterrühren, bis das Fondue sämig wird.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Mit Muskatnuss und Pfeffer würzen. Auf dem Rechaud mit altbackenem Brot servieren.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Das Original aus der Schweiz!</h2>
            <p className="text-xl text-red-100 mb-8">Erlebe authentisches Schweizer Käsefondue mit dem traditionellen Caquelon.</p>
            <CTAButton href="https://amzn.to/4mthKBR" variant="secondary" size="large">Authentisches Caquelon entdecken</CTAButton>
          </div>
        </section>
      </div>
    </>
  );
}