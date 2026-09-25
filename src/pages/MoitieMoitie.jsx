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

const recipeSchema = {
  "@context": "https://schema.org",
  "@type": "Recipe",
  "name": "Original Schweizer Käsefondue (Moitié-Moitié)",
  "description": "Das ursprüngliche Schweizer Käsefondue aus je zur Hälfte Vacherin Fribourgeois und Greyerzer Käse.",
  "keywords": "Käsefondue, Moitié-Moitié, Vacherin Fribourgeois, Gruyère, Schweizer Fondue",
  "prepTime": "PT10M",
  "cookTime": "PT10M",
  "totalTime": "PT20M",
  "recipeYield": "4 Portionen",
  "category": "Käsefondue",
  "recipeIngredient": ingredients.map(i => `${i.quantity} ${i.unit} ${i.name}`),
  "recipeInstructions": [
    { "@type": "HowToStep", "text": "Das Caquelon mit der halbierten Knoblauchzehe kräftig ausreiben." },
    { "@type": "HowToStep", "text": "Weißwein im Caquelon erwärmen. Beide Käsesorten nach und nach unter ständigem Rühren zugeben." },
    { "@type": "HowToStep", "text": "Speisestärke im Kirschwasser auflösen und unterrühren, bis das Fondue sämig wird." },
    { "@type": "HowToStep", "text": "Mit Muskatnuss und Pfeffer würzen. Auf dem Rechaud mit altbackenem Brot servieren." }
  ]
};

export default function MoitieMoitie() {
  return (
    <>
      <SEOHead 
        title="Fondue Moitié-Moitié - Original Schweizer Klassiker | Caquelon.de"
        description="Das ursprüngliche Schweizer Käsefondue aus je zur Hälfte Vacherin Fribourgeois und Greyerzer Käse."
        canonical="https://www.caquelon.de/moitiemoitie"
        structuredData={recipeSchema}
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-red-50 to-amber-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-xs font-mono font-bold text-red-900 uppercase tracking-widest mb-3">
              <a href="/fonduekaese" className="hover:underline">Themenhub: Käsefondue</a> &middot; <a href="/fonduerezepte" className="hover:underline">Alle Rezepte</a>
            </div>
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

        {/* Verwandte Rezepte & Hub-Navigation */}
        <section className="py-12 bg-stone-100 border-t border-stone-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-stone-900 mb-4">Verwandte Rezepte im Themenhub Käsefondue</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-semibold">
              <a href="/champagnerfondue" className="p-4 bg-white rounded-xl border border-stone-200 hover:border-red-900 transition shadow-xs text-stone-900">
                Champagner-Trüffel-Fondue &rarr;
              </a>
              <a href="/tomatenfondue" className="p-4 bg-white rounded-xl border border-stone-200 hover:border-red-900 transition shadow-xs text-stone-900">
                Walliser Tomaten-Käsefondue &rarr;
              </a>
              <a href="/bierkaesefondue" className="p-4 bg-white rounded-xl border border-stone-200 hover:border-red-900 transition shadow-xs text-stone-900">
                Bierkäse-Fondue &rarr;
              </a>
            </div>
            <div className="mt-6 text-center">
              <a href="/fonduekaese" className="inline-block text-xs font-bold text-red-900 hover:underline uppercase tracking-wider">
                &larr; Zurück zum Haupt-Hub: Käsefondue
              </a>
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