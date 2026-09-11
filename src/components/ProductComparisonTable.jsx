import React, { useState } from 'react';
import { Star, Check, ShieldCheck, Flame, Sparkles, ExternalLink } from 'lucide-react';
import CTAButton from './CTAButton';

const products = [
  {
    id: 1,
    name: "Kuhn Rikon Käsefondue-Set 'Zermatt'",
    badge: "TESTSIEGER 2026",
    badgeColor: "bg-amber-600 text-white",
    material: "Keramik (Feuerfest)",
    induction: "Nein (mit Adapterplatte ja)",
    servings: "4 - 6 Personen",
    rating: 4.9,
    reviewsCount: 1420,
    price: "ca. 89 - 110 €",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800&auto=format&fit=crop",
    pros: ["Authentische Schweizer Qualität", "Hervorragende Wärmespeicherung", "Käse brennt nicht an"],
    cons: ["Nicht direkt induktionsgeeignet"],
    link: "https://amzn.to/4oVKIMA",
    highlight: true
  },
  {
    id: 2,
    name: "Le Creuset Gusseisen Caquelon Set",
    badge: "PREMIUM-EMPFEHLUNG",
    badgeColor: "bg-red-900 text-white",
    material: "Emailliertes Gusseisen",
    induction: "Ja (Direkt Induktion)",
    servings: "4 - 8 Personen",
    rating: 4.8,
    reviewsCount: 890,
    price: "ca. 180 - 220 €",
    image: "https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=800&auto=format&fit=crop",
    pros: ["Für Induktion & alle Herdarten", "Extrem langlebig & kratzfest", "Auch für Öl- & Fleischfondue"],
    cons: ["Höheres Eigengewicht"],
    link: "https://amzn.to/4fSioGv",
    highlight: false
  },
  {
    id: 3,
    name: "Spring Classic Edelstahl Fondue-Set",
    badge: "PREIS-LEISTUNG-TIPP",
    badgeColor: "bg-emerald-700 text-white",
    material: "Edelstahl rostfrei",
    induction: "Ja",
    servings: "2 - 6 Personen",
    rating: 4.7,
    reviewsCount: 650,
    price: "ca. 59 - 79 €",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop",
    pros: ["Sehr pflegeleicht & spülmaschinenfest", "Schnelle Erwärmung", "Allrounder für Fleisch & Käse"],
    cons: ["Wärmespeicherung etwas geringer als Keramik"],
    link: "https://amzn.to/3JoYc39",
    highlight: false
  }
];

export default function ProductComparisonTable() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredProducts = selectedFilter === 'all' 
    ? products 
    : selectedFilter === 'induction' 
      ? products.filter(p => p.induction.includes('Ja'))
      : products.filter(p => p.material.toLowerCase().includes(selectedFilter));

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-stone-200 p-6 md:p-10 my-12">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 bg-stone-100 border border-stone-300 px-4 py-1.5 rounded-full text-xs font-bold text-stone-800 uppercase tracking-widest mb-4">
          <ShieldCheck className="w-4 h-4 text-red-900" />
          <span>Unabhängige Redaktionsempfehlung 2026</span>
        </div>
        <h3 className="text-2xl md:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
          Die 3 besten Fonduetöpfe im <span className="text-red-900">Vergleich</span>
        </h3>
        <p className="text-stone-600 text-base md:text-lg">
          Basierend auf Materialqualität, Wärmeverteilung, Kundenbewertungen und Praxistauglichkeit.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <button 
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${selectedFilter === 'all' ? 'bg-red-900 text-white shadow-md' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}`}
          >
            Alle Modelle ({products.length})
          </button>
          <button 
            onClick={() => setSelectedFilter('induction')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${selectedFilter === 'induction' ? 'bg-red-900 text-white shadow-md' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}`}
          >
            ⚡ Für Induktion
          </button>
          <button 
            onClick={() => setSelectedFilter('keramik')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${selectedFilter === 'keramik' ? 'bg-red-900 text-white shadow-md' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}`}
          >
            🧀 Keramik
          </button>
          <button 
            onClick={() => setSelectedFilter('gusseisen')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${selectedFilter === 'gusseisen' ? 'bg-red-900 text-white shadow-md' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}`}
          >
            🍳 Gusseisen
          </button>
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="grid lg:grid-cols-3 gap-8 items-stretch">
        {filteredProducts.map((product) => (
          <div 
            key={product.id}
            className={`relative rounded-2xl flex flex-col justify-between transition duration-300 ${
              product.highlight 
                ? 'bg-gradient-to-b from-amber-50/60 to-stone-50 border-2 border-amber-500 shadow-2xl scale-[1.02]' 
                : 'bg-stone-50/50 border border-stone-200 hover:shadow-xl hover:border-stone-300'
            } p-6`}
          >
            {/* Top Badge */}
            <div className="flex justify-between items-start mb-4">
              <span className={`text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm ${product.badgeColor}`}>
                {product.badge}
              </span>
              <div className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-full shadow-sm border border-stone-200 text-xs font-bold text-stone-800">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{product.rating}</span>
                <span className="text-stone-400 font-normal">({product.reviewsCount})</span>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h4 className="text-xl font-bold text-stone-900 mb-2 leading-snug">{product.name}</h4>
              <div className="text-sm font-bold text-red-900 mb-4">{product.price}</div>

              {/* Specs */}
              <div className="bg-white rounded-xl p-3 border border-stone-200 text-xs space-y-2 mb-5">
                <div className="flex justify-between">
                  <span className="text-stone-500">Material:</span>
                  <span className="font-semibold text-stone-800">{product.material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Induktion:</span>
                  <span className="font-semibold text-stone-800">{product.induction}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Kapazität:</span>
                  <span className="font-semibold text-stone-800">{product.servings}</span>
                </div>
              </div>

              {/* Pros */}
              <div className="space-y-2 mb-6">
                <p className="text-xs font-bold text-stone-700 uppercase tracking-wider">Vorteile:</p>
                {product.pros.map((pro, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{pro}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-stone-200 mt-auto text-center">
              <CTAButton href={product.link} size="default" className="w-full text-base">
                Preis & Verfügbarkeit prüfen *
              </CTAButton>
              <p className="text-[10px] text-stone-400 mt-2">💡 Beliebtester Bestseller bei Amazon</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
