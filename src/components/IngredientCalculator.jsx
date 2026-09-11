import React, { useState } from 'react';
import { Users, Utensils, Wine, Scale } from 'lucide-react';

export default function IngredientCalculator({ baseServings = 4, ingredients = [], title = "Zutaten-Rechner" }) {
  const [servings, setServings] = useState(baseServings);

  const calculateQuantity = (baseQuantity) => {
    if (typeof baseQuantity !== 'number') {
      return baseQuantity;
    }
    const calculated = (baseQuantity / baseServings) * servings;
    if (calculated % 1 !== 0) {
      return parseFloat(calculated.toFixed(1));
    }
    return Math.round(calculated);
  };

  // Estimate total cheese quantity for Käsefondue
  const totalCheeseGram = servings * 200; // Standard 200g cheese per person
  const totalBreadGram = servings * 200; // Standard 200g bread per person

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-stone-200">
      <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-6">
        <div>
          <h2 className="text-2xl font-extrabold text-stone-900">{title}</h2>
          <p className="text-xs text-stone-500 mt-0.5">Mengen automatisch anpassen</p>
        </div>
        <div className="flex items-center gap-1.5 bg-red-900/10 text-red-900 px-3 py-1.5 rounded-full font-bold text-sm">
          <Users className="w-4 h-4" />
          <span>{servings} Person{servings > 1 ? 'en' : ''}</span>
        </div>
      </div>

      {/* Interactive Slider */}
      <div className="mb-8 bg-stone-50 p-4 rounded-2xl border border-stone-200">
        <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
          <span>Portionsgröße wählen:</span>
          <span className="text-red-900 font-extrabold text-base">{servings} Personen</span>
        </div>
        <input
          id="servings"
          type="range"
          min="1"
          max="12"
          value={servings}
          onChange={(e) => setServings(Number(e.target.value))}
          className="w-full h-3 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-red-900"
        />
        <div className="flex justify-between text-[10px] text-stone-400 mt-1 font-semibold">
          <span>1 Person</span>
          <span>4 Personen</span>
          <span>8 Personen</span>
          <span>12 Personen</span>
        </div>
      </div>

      {/* Ingredients List */}
      <ul className="space-y-3.5 text-stone-800 mb-6">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex justify-between items-center border-b border-stone-100 pb-2.5 last:border-b-0">
            <span className="text-sm font-medium pr-4">{ingredient.name}</span>
            <span className="text-sm font-bold text-stone-900 bg-stone-100 px-2.5 py-1 rounded-lg">
              {calculateQuantity(ingredient.quantity)} {ingredient.unit}
            </span>
          </li>
        ))}
      </ul>

      {/* Practical Guide Box */}
      <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 text-xs space-y-2 text-stone-700">
        <div className="flex items-center gap-2 font-bold text-amber-900">
          <Scale className="w-4 h-4 text-amber-800" />
          <span>Faustregel pro Person:</span>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
          <div className="bg-white p-2 rounded-xl border border-amber-200/60">
            <span className="text-stone-500 block">Käse-Bedarf:</span>
            <strong className="text-stone-900 text-xs">{totalCheeseGram}g Käse gesamt</strong>
          </div>
          <div className="bg-white p-2 rounded-xl border border-amber-200/60">
            <span className="text-stone-500 block">Brot-Bedarf:</span>
            <strong className="text-stone-900 text-xs">{totalBreadGram}g Würfelbrot</strong>
          </div>
        </div>
      </div>
    </div>
  );
}