import React from 'react';
import CTAButton from '../components/CTAButton';
import SEOHead from '../components/SEOHead';
import IngredientCalculator from '../components/IngredientCalculator';
import { Clock, Users } from 'lucide-react';

const baseServings = 4;
const ingredients = [
  { name: 'Weiße Schokolade', quantity: 400, unit: 'g' },
  { name: 'Sahne', quantity: 150, unit: 'ml' },
  { name: 'Rosa Lebensmittelfarbe', quantity: 'ein paar Tropfen', unit: '' },
  { name: 'Bunte Streusel & Zuckerperlen', quantity: 'nach Belieben', unit: '' },
  { name: 'Marshmallows, Kekse & Früchte', quantity: 'zum Dippen', unit: '' },
];

export default function EinhornFondue() {
  return (
    <>
      <SEOHead 
        title="'Einhorn'-Fondue für Kinder - Magisches Rezept | Caquelon.de"
        description="Ein magischer Spaß für Kindergeburtstage: weiße Schokolade, gefärbt mit Lebensmittelfarbe und bunten Streuseln."
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"><span className="text-red-900">'Einhorn'-Fondue</span> für Kinder</h1>
            <p className="text-xl text-gray-600 mb-8">Ein magischer Spaß für Kindergeburtstage: weiße Schokolade, gefärbt mit Lebensmittelfarbe und bunten Streuseln.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Clock className="w-5 h-5 text-red-900" /><span>15 Minuten</span></div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Users className="w-5 h-5 text-red-900" /><span>4-6 Personen</span></div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <IngredientCalculator baseServings={baseServings} ingredients={ingredients} />
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Zubereitung</h2>
              <ol className="space-y-4 text-gray-700">
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Weiße Schokolade hacken und mit Sahne im Caquelon bei sehr schwacher Hitze schmelzen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Unter ständigem Rühren eine glatte, cremige Masse entstehen lassen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Rosa Lebensmittelfarbe tropfenweise zugeben, bis die gewünschte Farbe erreicht ist.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Das Caquelon auf ein Stövchen mit Teelicht stellen. Bunte Streusel darüber geben und mit Marshmallows servieren!</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Magischer Kindergeburtstag!</h2>
            <p className="text-xl text-red-100 mb-8">Das perfekte Fondue-Set für unvergessliche Kinderpartys.</p>
            <CTAButton href="https://amzn.to/4mthKBR" variant="secondary" size="large">Kinder-Schokofondue-Set entdecken</CTAButton>
          </div>
        </section>
      </div>
    </>
  );
}