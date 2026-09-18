import React, { useState } from 'react';
import IngredientCalculator from '../components/IngredientCalculator';
import { ExternalLink, Flame, Sparkles } from 'lucide-react';

const FONDUE_INGREDIENTS = [
  { name: 'Le Gruyère AOP (gerieben)', quantity: 400, unit: 'g' },
  { name: 'Vacherin Fribourgeois AOP (gerieben)', quantity: 400, unit: 'g' },
  { name: 'Trockener Schweizer Weißwein (z.B. Fendant)', quantity: 300, unit: 'ml' },
  { name: 'Knoblauchzehe (halbiert)', quantity: 1, unit: 'Stück' },
  { name: 'Kirschwasser', quantity: 20, unit: 'ml' },
  { name: 'Speisestärke (Maizena)', quantity: 1, unit: 'EL' },
  { name: 'Frisches Weißbrot / Baguettewürfel', quantity: 800, unit: 'g' }
];

const RACLETTE_INGREDIENTS = [
  { name: 'Schweizer Raclettekäse (in Scheiben)', quantity: 880, unit: 'g' },
  { name: 'Festkochende Kartoffeln (Gschwellti)', quantity: 800, unit: 'g' },
  { name: 'Essiggurken (Cornichons) & Silberzwiebeln', quantity: 200, unit: 'g' },
  { name: 'Schinken / Bündnerfleisch (optional)', quantity: 300, unit: 'g' },
  { name: 'Frisch gemahlener Pfeffer & Paprika', quantity: 1, unit: 'Prise' }
];

export default function RechnerEmbed() {
  const [calculatorMode, setCalculatorMode] = useState('kaese'); // 'kaese' | 'raclette'

  const currentIngredients = calculatorMode === 'kaese' ? FONDUE_INGREDIENTS : RACLETTE_INGREDIENTS;
  const currentTitle = calculatorMode === 'kaese' 
    ? "Käsefondue Mengenrechner (Moitié-Moitié)" 
    : "Original Raclette Mengenrechner";

  return (
    <div className="min-h-screen bg-stone-50 p-3 sm:p-6 flex flex-col justify-between font-sans">
      <div className="max-w-3xl mx-auto w-full">
        {/* Modus-Umschalter: Käsefondue vs. Raclette */}
        <div className="flex justify-center mb-4">
          <div className="bg-stone-200 p-1 rounded-2xl inline-flex gap-1 shadow-inner">
            <button
              onClick={() => setCalculatorMode('kaese')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                calculatorMode === 'kaese'
                  ? 'bg-red-900 text-white shadow-md'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <span>🧀 Käsefondue</span>
            </button>
            <button
              onClick={() => setCalculatorMode('raclette')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                calculatorMode === 'raclette'
                  ? 'bg-red-900 text-white shadow-md'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <span>🫕 Raclette</span>
            </button>
          </div>
        </div>

        <IngredientCalculator
          key={calculatorMode}
          baseServings={4}
          ingredients={currentIngredients}
          title={currentTitle}
          category={calculatorMode}
        />
      </div>

      {/* Attribution & Transparenz-Footer */}
      <div className="max-w-3xl mx-auto w-full mt-4 pt-3 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-500">
        <div className="flex items-center gap-1.5 font-medium">
          <Flame className="w-4 h-4 text-red-700" />
          <span>Schweizer Mengenlehre: 200 g Käse &amp; Brot bzw. 220 g Raclettekäse pro Person</span>
        </div>
        <div className="flex items-center gap-1">
          <span>Kostenloses Widget von</span>
          <a
            href="https://www.caquelon.de/"
            target="_blank"
            rel="noopener"
            title="caquelon.de – Der unabhängige Fondue- & Mengenrechner Ratgeber"
            className="text-red-900 font-bold hover:underline inline-flex items-center gap-0.5"
          >
            caquelon.de
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
