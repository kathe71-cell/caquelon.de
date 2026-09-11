import React from 'react';
import CTAButton from '../components/CTAButton';
import SEOHead from '../components/SEOHead';
import IngredientCalculator from '../components/IngredientCalculator';
import { Clock, Users } from 'lucide-react';

const baseServings = 4;
const ingredients = [
  { name: 'Rinderfilet, gewürfelt', quantity: 800, unit: 'g' },
  { name: 'Kräftiger Rotwein (z.B. Merlot)', quantity: 750, unit: 'ml' },
  { name: 'Rinderbrühe', quantity: 250, unit: 'ml' },
  { name: 'Zwiebel, gespickt mit Nelken', quantity: 1, unit: 'Stück' },
  { name: 'Lorbeerblatt', quantity: 1, unit: 'Stück' },
  { name: 'Pfefferkörner', quantity: 5, unit: 'Stück' },
  { name: 'Kräftige Dips und Baguette', quantity: 'zum Servieren', unit: '' },
];

export default function RotweinFondue() {
  return (
    <>
      <SEOHead 
        title="Rotwein-Brühe-Fondue 'Winzer Art' Rezept | Caquelon.de"
        description="Ein aromatisches Fleischfondue, bei dem das Fleisch in einer kräftigen Rotwein-Brühe gegart wird."
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-purple-100 to-red-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Rotwein-Fondue <span className="text-red-900">'Winzer Art'</span></h1>
            <p className="text-xl text-gray-600 mb-8">Eine besonders aromatische Variante des Brühe-Fondues für Fleischliebhaber.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Clock className="w-5 h-5 text-red-900" /><span>30 Minuten</span></div>
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
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Rotwein, Brühe, Zwiebel, Lorbeerblatt und Pfefferkörner in das Caquelon geben.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Die Mischung auf dem Herd zum Kochen bringen und dann die Hitze reduzieren, sodass sie nur noch siedet.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Das Caquelon auf das Rechaud stellen und die Temperatur so regulieren, dass die Brühe heiß bleibt, aber nicht stark kocht.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Die Fleischwürfel auf Fonduegabeln spießen und in der heißen Rotwein-Brühe garen. Mit Dips und Brot servieren.</li>
              </ol>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ein Fest für die Sinne!</h2>
            <p className="text-xl text-red-100 mb-8">Finde das passende Caquelon für dein nächstes Fondue-Fest.</p>
            <CTAButton href="https://amzn.to/4mthKBR" variant="secondary" size="large">Passendes Caquelon entdecken</CTAButton>
          </div>
        </section>
      </div>
    </>
  );
}