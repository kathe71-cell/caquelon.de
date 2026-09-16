import React, { useState } from 'react';
import { Check, Flame, Sparkles, ExternalLink, ShieldAlert, Info } from 'lucide-react';
import CTAButton from './CTAButton';
import ProductGraphic from './ProductGraphic';
import { PRODUCTS } from '../data/products';

export default function ProductComparisonTable() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredProducts = PRODUCTS.filter(product => {
    if (selectedFilter === 'induction') return product.induction.direct;
    if (selectedFilter === 'ceramic') return product.material.toLowerCase().includes('keramik');
    if (selectedFilter === 'cast-iron') return product.material.toLowerCase().includes('gusseisen');
    if (selectedFilter === 'stainless') return product.material.toLowerCase().includes('edelstahl');
    return true;
  });

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-stone-200">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 bg-red-100 text-red-900 px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Faktenbasierter Modell-Vergleich</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-stone-900 tracking-tight">
          Beliebte Fonduetöpfe im Material- &amp; Spezifikationsvergleich
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2">
          Vergleichende Übersicht der maßgeblichen Materialien, Induktionseignung und Füllmengen nach Herstellerdaten.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedFilter === 'all' 
                ? 'bg-red-900 text-white shadow-sm' 
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Alle Modelle ({PRODUCTS.length})
          </button>
          <button
            onClick={() => setSelectedFilter('ceramic')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedFilter === 'ceramic' 
                ? 'bg-red-900 text-white shadow-sm' 
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Feuerfeste Keramik
          </button>
          <button
            onClick={() => setSelectedFilter('cast-iron')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedFilter === 'cast-iron' 
                ? 'bg-red-900 text-white shadow-sm' 
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Emailliertes Gusseisen
          </button>
          <button
            onClick={() => setSelectedFilter('stainless')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedFilter === 'stainless' 
                ? 'bg-red-900 text-white shadow-sm' 
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Edelstahl 18/10
          </button>
          <button
            onClick={() => setSelectedFilter('induction')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedFilter === 'induction' 
                ? 'bg-red-900 text-white shadow-sm' 
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Direkt Induktionsfähig
          </button>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {filteredProducts.map((product) => (
          <div 
            key={product.id}
            className="flex flex-col justify-between rounded-3xl border border-stone-200 bg-stone-50/60 p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:bg-white"
          >
            <div>
              {/* Badge & Model */}
              <div className="flex justify-between items-start gap-2 mb-3">
                <span className="text-[11px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full bg-stone-200 text-stone-800">
                  {product.highlightTag}
                </span>
                <span className="text-xs font-mono text-stone-500 font-semibold">
                  {product.priceRange}
                </span>
              </div>

              {/* Product Title & Manufacturer */}
              <h3 className="font-extrabold text-stone-900 text-lg sm:text-xl leading-snug">
                {product.name}
              </h3>
              <p className="text-xs text-stone-500 mt-0.5 mb-4">
                Hersteller: <strong>{product.manufacturer}</strong> • Art.-Nr.: {product.articleNumber}
              </p>

              {/* Product Vector Graphic */}
              <div className="mb-5">
                <ProductGraphic productId={product.id} className="w-full h-44" />
              </div>

              {/* Key Specs Table */}
              <div className="space-y-2 text-xs mb-5 bg-white p-3.5 rounded-xl border border-stone-200/80">
                <div className="flex justify-between pb-1 border-b border-stone-100">
                  <span className="text-stone-500">Material:</span>
                  <span className="font-bold text-stone-900 text-right">{product.material}</span>
                </div>
                <div className="flex justify-between pb-1 border-b border-stone-100">
                  <span className="text-stone-500">Kapazität &amp; Ø:</span>
                  <span className="font-bold text-stone-900">{product.capacityLiters} l ({product.diameterCm} cm)</span>
                </div>
                <div className="flex justify-between pb-1 border-b border-stone-100">
                  <span className="text-stone-500">Direkt Induktion:</span>
                  <span className={`font-bold ${product.induction.direct ? 'text-emerald-700' : 'text-amber-800'}`}>
                    {product.induction.direct ? 'Ja (ferromagnetisch)' : 'Nein (Adapterplatte nötig)'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Zulässige Fonduearten:</span>
                  <span className="font-bold text-stone-900 text-right">
                    {product.allowedFondueTypes.map(t => {
                      if (t === 'kaese') return 'Käse';
                      if (t === 'oel') return 'Öl/Fett';
                      if (t === 'bruehe') return 'Brühe';
                      if (t === 'schoko') return 'Schokolade';
                      return t;
                    }).join(', ')}
                  </span>
                </div>
              </div>

              {/* Safety Notice if restricted */}
              {product.disallowedFondueTypes.length > 0 && (
                <div className="flex items-start gap-1.5 bg-amber-50 border border-amber-200/80 p-2.5 rounded-xl text-[11px] text-amber-900 mb-4">
                  <ShieldAlert className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-800" />
                  <span>{product.safetyNotice}</span>
                </div>
              )}

              {/* Pros & Cons */}
              <div className="space-y-1.5 text-xs text-stone-700 mb-6">
                {product.pros.map((pro, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pro}</span>
                  </div>
                ))}
                {product.cons.map((con, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-stone-500">
                    <span className="text-stone-400 font-bold ml-0.5 mr-1">•</span>
                    <span>{con}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button with legal affiliate notice */}
            <div className="pt-2">
              <CTAButton 
                href={product.affiliateLink}
                variant="secondary"
                size="medium"
                className="w-full flex items-center justify-center gap-1.5"
              >
                <span>Preise &amp; Verfügbarkeit prüfen *</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </CTAButton>
              <p className="text-[10px] text-stone-400 text-center mt-1.5">
                * Partnerlink / Werbung (Amazon.de)
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
