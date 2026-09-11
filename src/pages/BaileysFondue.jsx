import React from 'react';
import CTAButton from '../components/CTAButton';
import SEOHead from '../components/SEOHead';
import IngredientCalculator from '../components/IngredientCalculator';
import { Clock, Users } from 'lucide-react';

const baseServings = 4;
const ingredients = [
  { name: 'Vollmilchschokolade', quantity: 300, unit: 'g' },
  { name: 'Sahne', quantity: 150, unit: 'ml' },
  { name: 'Baileys Irish Cream', quantity: 100, unit: 'ml' },
  { name: 'Kaffee-Extrakt (optional)', quantity: 1, unit: 'TL' },
  { name: 'Früchte, Kekse, Löffelbiskuits', quantity: 'zum Dippen', unit: '' },
];

export default function BaileysFondue() {
  return (
    <>
      <SEOHead 
        title="Baileys-Schoko-Fondue für Erwachsene | Caquelon.de"
        description="Ein traumhaftes Dessert-Fondue für Erwachsene, bei dem Schokolade auf den cremigen Geschmack von Baileys trifft."
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-amber-50 to-brown-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Baileys-<span className="text-red-900">Schoko-Fondue</span></h1>
            <p className="text-xl text-gray-600 mb-8">Ein traumhaftes Dessert-Fondue für Erwachsene, bei dem cremige Schokolade auf den unverwechselbaren Geschmack von Baileys trifft.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Clock className="w-5 h-5 text-red-900" /><span>10 Minuten</span></div>
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
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Vollmilchschokolade hacken und mit Sahne im Caquelon bei sehr schwacher Hitze schmelzen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Unter ständigem Rühren eine glatte, cremige Masse entstehen lassen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Den Baileys und optional den Kaffee-Extrakt langsam unterrühren. Nicht mehr kochen lassen!</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Das Caquelon auf ein Stövchen mit Teelicht stellen und mit Früchten, Keksen und Löffelbiskuits servieren.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Für besondere Momente!</h2>
            <p className="text-xl text-red-100 mb-8">Ein Dessert-Fondue mit Charakter - perfekt für romantische Abende.</p>
            <CTAButton href="https://amzn.to/4mthKBR" variant="secondary" size="large">Romantisches Schokofondue-Set entdecken</CTAButton>
          </div>
        </section>
      </div>
    </>
  );
}