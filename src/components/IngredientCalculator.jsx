import React, { useState } from 'react';
import { Users, Scale, AlertTriangle, Flame, Info } from 'lucide-react';

export default function IngredientCalculator({ 
  baseServings = 4, 
  ingredients = [], 
  title = "Zutaten-Rechner",
  category = "kaese" // "kaese" | "raclette" | "fleisch-oel" | "bruehe" | "dessert"
}) {
  const [servings, setServings] = useState(baseServings);

  const calculateQuantity = (ingredient) => {
    // Akzeptiert sowohl ingredient.quantity als auch ingredient.amount
    const rawVal = ingredient.quantity !== undefined ? ingredient.quantity : ingredient.amount;
    
    if (typeof rawVal !== 'number') {
      return rawVal || '';
    }
    
    // Lineare Skalierung für reguläre Zutaten
    // Ausnahme: Öl und Brühe im Fonduetopf dürfen nicht unbeschränkt wachsen!
    const isOil = ingredient.name.toLowerCase().includes('öl') || 
                  ingredient.name.toLowerCase().includes('oel') ||
                  ingredient.name.toLowerCase().includes('pflanzenöl');
    const isBroth = ingredient.name.toLowerCase().includes('brühe') ||
                    ingredient.name.toLowerCase().includes('bouillon');

    if (isOil && (ingredient.unit.toLowerCase() === 'liter' || ingredient.unit.toLowerCase() === 'l')) {
      // Herstellerfüllgrenze hat Vorrang: 1,8-L-Topf max. zu 1/3 bis 1/2 befüllen -> ca. 0,85 L pro Topf
      return servings <= 6 ? 0.85 : 1.7;
    }

    if (isBroth && (ingredient.unit.toLowerCase() === 'liter' || ingredient.unit.toLowerCase() === 'l')) {
      // 1 Topf fasst ca. 1.0 - 1.2 L; ab 7 Personen 2 Töpfe = 2.4 L
      return servings <= 6 ? 1.2 : 2.4;
    }

    const calculated = (rawVal / baseServings) * servings;
    if (calculated % 1 !== 0) {
      return parseFloat(calculated.toFixed(1));
    }
    return Math.round(calculated);
  };

  // Berechnet die tatsächliche Summe aller Fleisch- und Fischzutaten direkt aus der Zutatenliste
  const calculateTotalMeat = () => {
    const meatKeywords = ['rind', 'hähnchen', 'puten', 'schwein', 'kalb', 'fleisch', 'filet', 'hüfte', 'ente', 'lamm', 'fisch', 'lachs', 'garnele', 'tofu'];
    const meatItems = ingredients.filter(item => {
      const nameLower = (item.name || '').toLowerCase();
      const unitLower = (item.unit || '').toLowerCase();
      const isWeight = unitLower === 'g' || unitLower === 'gramm' || unitLower === 'kg';
      return isWeight && meatKeywords.some(kw => nameLower.includes(kw));
    });

    if (meatItems.length > 0) {
      let totalGrams = 0;
      meatItems.forEach(item => {
        const rawVal = item.quantity !== undefined ? item.quantity : item.amount;
        if (typeof rawVal === 'number') {
          const scaled = (rawVal / baseServings) * servings;
          const inGrams = (item.unit || '').toLowerCase() === 'kg' ? scaled * 1000 : scaled;
          totalGrams += inGrams;
        }
      });
      return Math.round(totalGrams);
    }

    // Fallback falls keine Keyword-Treffer
    return Math.round(servings * 225);
  };

  // Bestimme den effektiven Rezepttyp (falls nicht explizit übergeben, anhand der Zutaten erkennen)
  const detectCategory = () => {
    if (category) return category;
    const names = ingredients.map(i => i.name.toLowerCase()).join(' ');
    if (names.includes('pflanzenöl') || names.includes('öl-fondue')) return 'fleisch-oel';
    if (names.includes('brühe') || names.includes('bouillon') || names.includes('dashi')) return 'bruehe';
    if (names.includes('schokolade') || names.includes('kuvertüre') || names.includes('nutella')) return 'dessert';
    if (names.includes('raclette')) return 'raclette';
    return 'kaese';
  };

  const effectiveCategory = detectCategory();

  // Topf- und Kapazitätswarnung bei Gruppen
  const potCount = servings <= 6 ? 1 : (servings <= 10 ? 2 : 3);

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

      {/* Interaktiver Personen-Schieberegler */}
      <div className="mb-8 bg-stone-50 p-4 rounded-2xl border border-stone-200">
        <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
          <span>Portionsgröße wählen:</span>
          <span className="text-red-900 font-extrabold text-base">{servings} {servings === 1 ? 'Person' : 'Personen'}</span>
        </div>
        <input
          id="servings-slider"
          type="range"
          min="1"
          max="12"
          value={servings}
          onChange={(e) => setServings(Number(e.target.value))}
          className="w-full h-3 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-red-900"
          aria-label="Anzahl der Personen für Mengenberechnung"
        />
        <div className="flex justify-between text-[10px] text-stone-400 mt-1 font-semibold">
          <span>1 Person</span>
          <span>4 Personen</span>
          <span>8 Personen</span>
          <span>12 Personen</span>
        </div>
      </div>

      {/* Zutatenliste mit skalierten Werten */}
      <ul className="space-y-3.5 text-stone-800 mb-6">
        {ingredients.map((ingredient, index) => {
          const qty = calculateQuantity(ingredient);
          return (
            <li key={index} className="flex justify-between items-center border-b border-stone-100 pb-2.5 last:border-b-0">
              <span className="text-sm font-medium pr-4">{ingredient.name}</span>
              <span className="text-sm font-bold text-stone-900 bg-stone-100 px-2.5 py-1 rounded-lg shrink-0">
                {qty} {ingredient.unit}
              </span>
            </li>
          );
        })}
      </ul>

      {/* Rezeptspezifische Mengenübersicht & Topfkapazitäts-Hinweis */}
      {effectiveCategory === 'kaese' && (
        <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 text-xs space-y-3 text-stone-700">
          <div className="flex items-center gap-2 font-bold text-amber-950">
            <Scale className="w-4 h-4 text-amber-800" />
            <span>Käsefondue Richtwerte (ca. 200 g Käse &amp; Brot pro Kopf):</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="bg-white p-2.5 rounded-xl border border-amber-200/80">
              <span className="text-stone-500 block">Käse-Bedarf gerieben:</span>
              <strong className="text-stone-900 text-xs">{servings * 200} g Käsemischung</strong>
            </div>
            <div className="bg-white p-2.5 rounded-xl border border-amber-200/80">
              <span className="text-stone-500 block">Brot-Bedarf gewürfelt:</span>
              <strong className="text-stone-900 text-xs">{servings * 200} g Weißbrot</strong>
            </div>
          </div>
          {servings >= 7 && (
            <div className="flex items-start gap-2 bg-amber-100/90 p-2.5 rounded-xl text-[11px] text-amber-950">
              <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-800" />
              <span>
                <strong>Topf-Empfehlung für {servings} Personen:</strong> Mindestens <strong>{potCount} Caquelons</strong> am Tisch aufstellen. Bei mehr als 6 Personen kühlt der Käse durch zu viele Gabeln aus und brennt unten leicht an.
              </span>
            </div>
          )}
        </div>
      )}

      {effectiveCategory === 'raclette' && (
        <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 text-xs space-y-3 text-stone-700">
          <div className="flex items-center gap-2 font-bold text-amber-950">
            <Scale className="w-4 h-4 text-amber-800" />
            <span>Raclette Richtwerte (220 g Käse &amp; 200 g Kartoffeln pro Person):</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="bg-white p-2.5 rounded-xl border border-amber-200/80">
              <span className="text-stone-500 block">Raclettekäse in Scheiben:</span>
              <strong className="text-stone-900 text-xs">{servings * 220} g Käse</strong>
            </div>
            <div className="bg-white p-2.5 rounded-xl border border-amber-200/80">
              <span className="text-stone-500 block">Gschwellti (Kartoffeln):</span>
              <strong className="text-stone-900 text-xs">{servings * 200} g Kartoffeln</strong>
            </div>
          </div>
          <div className="text-[11px] text-stone-600 bg-white/70 p-2 rounded-xl border border-amber-200/60">
            Dazu ca. {servings * 50} g Essiggemüse (Cornichons, Silberzwiebeln) und frischer Pfeffer aus der Mühle.
          </div>
        </div>
      )}

      {effectiveCategory === 'fleisch-oel' && (
        <div className="bg-red-50/80 border border-red-200 rounded-2xl p-4 text-xs space-y-3 text-stone-700">
          <div className="flex items-center gap-2 font-bold text-red-950">
            <Flame className="w-4 h-4 text-red-800" />
            <span>Fleischfondue (Öl) Richtwerte &amp; Füllgrenzen:</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="bg-white p-2.5 rounded-xl border border-red-200/80">
              <span className="text-stone-500 block">Fleisch-Gesamtmenge:</span>
              <strong className="text-stone-900 text-xs">{calculateTotalMeat().toLocaleString('de-DE')} g ({Math.round(calculateTotalMeat() / 100) / 10} kg)</strong>
              <span className="text-[10px] text-stone-500 block mt-0.5">
                (entspricht {Math.round(calculateTotalMeat() / servings)} g p.P.)
              </span>
            </div>
            <div className="bg-white p-2.5 rounded-xl border border-red-200/80">
              <span className="text-stone-500 block">Ölmenge im Topf:</span>
              <strong className="text-stone-900 text-xs">{servings <= 6 ? 'ca. 0,75–0,9 l (1 Topf)' : 'ca. 1,5–1,8 l (auf 2 Töpfe verteilt)'}</strong>
              <span className="text-[10px] text-stone-500 block mt-0.5">
                (Herstellergrenze max. 1/2 Füllung!)
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2 bg-red-100/90 p-2.5 rounded-xl text-[11px] text-red-950">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-red-800" />
            <div>
              <strong>Herstellerfüllgrenze hat Vorrang vor Pauschalwerten:</strong> Die Topfkapazität (z. B. 1,8 Liter beim Spring-Set) darf beim Frittieren <strong>maximal zu 1/3 bis 1/2 befüllt werden (ca. 0,75 bis maximal 0,9 Liter Öl pro Topf)</strong>. Niemals einen vollen Liter Öl in einen 1,8-Liter-Topf füllen, da heißes Fett beim Eintauchen des Fleisches stark aufschäumt und überschwappen kann.
              {servings >= 7 && (
                <span className="block mt-1 font-semibold">
                  Ab 7 Personen zwingend einen zweiten Fonduetopf aufstellen, um Überfüllung zu vermeiden und die Mindestbrattemperatur (175 °C) zu halten.
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {effectiveCategory === 'bruehe' && (
        <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4 text-xs space-y-3 text-stone-700">
          <div className="flex items-center gap-2 font-bold text-emerald-950">
            <Scale className="w-4 h-4 text-emerald-800" />
            <span>Brühe-Fondue (Chinoise / Bacchus / Shabu Shabu) Richtwerte:</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="bg-white p-2.5 rounded-xl border border-emerald-200/80">
              <span className="text-stone-500 block">Fleisch / Fisch:</span>
              <strong className="text-stone-900 text-xs">{calculateTotalMeat().toLocaleString('de-DE')} g ({Math.round(calculateTotalMeat() / 100) / 10} kg)</strong>
              <span className="text-[10px] text-stone-500 block mt-0.5">
                (entspricht {Math.round(calculateTotalMeat() / servings)} g p.P.)
              </span>
            </div>
            <div className="bg-white p-2.5 rounded-xl border border-emerald-200/80">
              <span className="text-stone-500 block">Gemüse &amp; Pilze:</span>
              <strong className="text-stone-900 text-xs">{servings * 150} g gesamt</strong>
            </div>
          </div>
          <div className="flex items-start gap-2 bg-emerald-100/90 p-2.5 rounded-xl text-[11px] text-emerald-950">
            <Info className="w-4 h-4 shrink-0 mt-0.5 text-emerald-800" />
            <div>
              <strong>Brühe-Tipp:</strong> Grundfüllung {servings <= 6 ? 'ca. 1,0–1,2 Liter' : 'ca. 2,0–2,4 Liter auf 2 Töpfe verteilt'} (stets Füllstandsmarkierung des Topfes beachten). Verdampfte Brühe während des Essens aus einer separaten Kanne mit heißer Brühe nachgießen, statt den Topf zu Beginn zu überfüllen.
            </div>
          </div>
        </div>
      )}

      {effectiveCategory === 'dessert' && (
        <div className="bg-pink-50/80 border border-pink-200 rounded-2xl p-4 text-xs space-y-3 text-stone-700">
          <div className="flex items-center gap-2 font-bold text-pink-950">
            <Scale className="w-4 h-4 text-pink-800" />
            <span>Schokoladenfondue Richtwerte (ca. 80–100 g Schokolade pro Kopf):</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="bg-white p-2.5 rounded-xl border border-pink-200/80">
              <span className="text-stone-500 block">Schokolade / Kuvertüre:</span>
              <strong className="text-stone-900 text-xs">{servings * 90} g</strong>
            </div>
            <div className="bg-white p-2.5 rounded-xl border border-pink-200/80">
              <span className="text-stone-500 block">Früchte &amp; Gebäck:</span>
              <strong className="text-stone-900 text-xs">{servings * 150} g zum Dippen</strong>
            </div>
          </div>
          {servings >= 7 && (
            <div className="text-[11px] text-pink-900 bg-pink-100/80 p-2 rounded-xl">
              Für größere Runden empfiehlt sich die Aufstellung von 2 kleinen Schokostövchen (z. B. 1x Zartbitter, 1x Vollmilch oder Weiß).
            </div>
          )}
        </div>
      )}
    </div>
  );
}