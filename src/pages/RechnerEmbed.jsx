import React from 'react';
import IngredientCalculator from '../components/IngredientCalculator';
import { Utensils, ExternalLink, Flame } from 'lucide-react';

const DEFAULT_FONDUE_INGREDIENTS = [
  { name: 'Gruyère AOP (gerieben)', amount: 200, unit: 'g' },
  { name: 'Vacherin Fribourgeois AOP (gerieben)', amount: 200, unit: 'g' },
  { name: 'Trockener Weißwein (Chasselas/Fendant)', amount: 150, unit: 'ml' },
  { name: 'Knoblauchzehe', amount: 1, unit: 'Stück' },
  { name: 'Kirschwasser', amount: 1, unit: 'TL' },
  { name: 'Speisestärke (Maizena)', amount: 1, unit: 'TL' },
  { name: 'Frisches Brot / Weißbrot-Würfel', amount: 200, unit: 'g' }
];

export default function RechnerEmbed() {
  return (
    <div className="min-h-screen bg-stone-50 p-2 sm:p-6 flex flex-col justify-between font-sans">
      <div className="max-w-4xl mx-auto w-full">
        <IngredientCalculator
          baseServings={4}
          ingredients={DEFAULT_FONDUE_INGREDIENTS}
          title="Käsefondue- & Raclette-Mengenrechner"
        />
      </div>

      <div className="max-w-4xl mx-auto w-full mt-4 pt-3 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-500">
        <div className="flex items-center gap-1.5 font-medium">
          <Flame className="w-4 h-4 text-red-700" />
          <span>Schweizer Fondue- & Raclette-Mengenrechner • 200g Käse/Brot Standard pro Person</span>
        </div>
        <div className="flex items-center gap-1">
          <span>Bereitgestellt von</span>
          <a
            href="https://caquelon.de/"
            target="_blank"
            rel="noopener"
            title="Caquelon.de – Schweizer Fondue Ratgeber & Mengenrechner"
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
