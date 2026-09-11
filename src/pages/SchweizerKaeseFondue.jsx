import React from 'react';
import { Clock, Users, ShieldCheck, CheckCircle2, AlertCircle, ShoppingBag, Flame } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import IngredientCalculator from '../components/IngredientCalculator';
import SEOHead from '../components/SEOHead';
import SocialShare from '../components/SocialShare';
import FloatingCTABar from '../components/FloatingCTABar';
import { createPageUrl } from '@/utils';

const baseServings = 4;
const ingredients = [
  { name: 'Schweizer Gruyère (AOP), frisch gerieben', quantity: 400, unit: 'g' },
  { name: 'Vacherin Fribourgeois (AOP), frisch gerieben', quantity: 400, unit: 'g' },
  { name: 'Trockener Schweizer Weißwein (z.B. Fendant / Chasselas)', quantity: 300, unit: 'ml' },
  { name: 'Kirschwasser (Schweizer Kirsch)', quantity: 2, unit: 'EL' },
  { name: 'Maisstärke (Maizena)', quantity: 1, unit: 'EL' },
  { name: 'Frische Knoblauchzehe (halbieren)', quantity: 1, unit: 'Stück' },
  { name: 'Prise Muskatnuss & frisch gemahlener Pfeffer', quantity: 1, unit: 'Prise' },
  { name: 'Altbackenes Würfelbrot (Baguette oder Landbrot)', quantity: 800, unit: 'g' },
];

const structuredData = {
  "@context": "https://schema.org/",
  "@type": "Recipe",
  "name": "Original Schweizer Käsefondue (Moitié-Moitié)",
  "image": [
    "https://images.unsplash.com/photo-1628840428115-431a479979b4?q=80&w=1974&auto=format&fit=crop"
  ],
  "author": {
    "@type": "Organization", 
    "name": "Caquelon.de"
  },
  "datePublished": "2026-09-03",
  "description": "Das original Schweizer Käsefondue Moitié-Moitié mit Gruyère AOP, Vacherin Fribourgeois AOP und Kirschwasser. Garantiert gelingsicher!",
  "recipeCuisine": "Schweizerisch",
  "prepTime": "PT10M",
  "cookTime": "PT15M", 
  "totalTime": "PT25M",
  "keywords": "Schweizer Käsefondue, Moitie Moitie Rezept, Gruyère Fondue, Vacherin Fondue, Original Fonduetopf Rezept",
  "recipeYield": "4",
  "recipeCategory": "Käsefondue",
  "recipeIngredient": ingredients.map(i => `${i.quantity}${i.unit} ${i.name}`),
  "recipeInstructions": [
    {
      "@type": "HowToStep",
      "text": "Das Keramik-Caquelon gründlich mit der halbierten Knoblauchzehe ausreiben."
    },
    {
      "@type": "HowToStep",
      "text": "Weißwein im Caquelon erwärmen, bis er leicht simmert (nicht kochen)."
    },
    {
      "@type": "HowToStep", 
      "text": "Geriebenen Gruyère und Vacherin portionsweise hinzufügen und bei mittlerer Hitze in Form einer 8 stetig rühren."
    },
    {
      "@type": "HowToStep",
      "text": "Maisstärke im Kirschwasser anrühren, in den schmelzenden Käse geben und kurz aufkochen lassen."
    }
  ]
};

export default function SchweizerKaeseFondue() {
  return (
    <>
      <SEOHead 
        title="Original Schweizer Käsefondue Rezept (Moitié-Moitié) | Gelingsicher"
        description="Das originale Schweizer Käsefondue Rezept (Moitié-Moitié) mit Gruyère AOP & Vacherin AOP. Mit Mengenumrechner & Profi-Tipps gegen Anbrennen!"
        keywords="Schweizer Käsefondue, Moitie Moitie, Gruyère Vacherin Fondue, Käsefondue Rezept original, Caquelon Käsefondue"
        canonical="https://caquelon.de/SchweizerKaeseFondue"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-[#faf8f5] text-stone-900">
        {/* Recipe Hero */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-stone-900 via-stone-900 to-red-950 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 rounded-full text-amber-300 text-xs font-bold uppercase mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Original Schweizer Klassiker (Moitié-Moitié)</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Original Schweizer <span className="text-amber-400">Käsefondue</span>
            </h1>

            <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
              Die perfekte Harmonie aus würzigem <strong>Gruyère AOP</strong> und cremigem <strong>Vacherin Fribourgeois AOP</strong>. Garantiert gelingsicher & sämig.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm font-semibold text-stone-200 mb-8">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>25 Minuten Gesamtzeit</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-amber-400" />
                <span>4 Personen (Standard)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Einfache Zubereitung</span>
              </div>
            </div>

            {/* Social Share */}
            <div className="flex justify-center">
              <SocialShare 
                title="Original Schweizer Käsefondue Rezept (Moitié-Moitié)"
                description="Das authentische Rezept mit Gruyère & Vacherin - sämig, cremig und garantiert gelingsicher."
              />
            </div>
          </div>
        </section>

        {/* Recipe Content & Calculator Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Ingredient Calculator (5 Cols) */}
            <div className="lg:col-span-5 sticky top-24">
              <IngredientCalculator baseServings={baseServings} ingredients={ingredients} title="Käsefondue Zutaten" />

              {/* Direct Buy Cheese Affiliate Box */}
              <div className="mt-6 bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/30 rounded-3xl p-6 text-stone-900 shadow-md">
                <div className="flex items-center gap-2 text-xs font-extrabold text-amber-900 uppercase tracking-wider mb-2">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Keine Lust selbst zu reiben?</span>
                </div>
                <h4 className="font-bold text-base mb-2">Original Schweizer Käsemischung bestellen</h4>
                <p className="text-xs text-stone-600 mb-4">
                  Fertig verzehrfertige AOP Gruyère & Vacherin Mischung in echter Schweizer Qualität direkt nach Hause geliefert.
                </p>
                <CTAButton href="https://amzn.to/4mLWWEX" size="small" variant="secondary" className="w-full text-xs">
                  Käsemischung bei Amazon ansehen *
                </CTAButton>
              </div>
            </div>

            {/* Right: Step-by-Step Instructions & Pro Tips (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Instructions Box */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200">
                <h2 className="text-2xl font-extrabold text-stone-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-red-900 text-white rounded-xl flex items-center justify-center text-sm">1</span>
                  Schritt-für-Schritt Zubereitung
                </h2>

                <ol className="space-y-6 text-stone-800 text-sm">
                  <li className="flex gap-4">
                    <span className="w-7 h-7 bg-stone-100 text-red-900 font-extrabold rounded-full flex items-center justify-center flex-shrink-0 text-xs">1</span>
                    <div>
                      <strong className="block text-stone-900 font-bold mb-1">Caquelon vorbereiten</strong>
                      Das Keramik-Caquelon gründlich mit der halbierten Knoblauchzehe ausreiben. Die Knoblauchreste können für extra Aroma im Topf verbleiben.
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <span className="w-7 h-7 bg-stone-100 text-red-900 font-extrabold rounded-full flex items-center justify-center flex-shrink-0 text-xs">2</span>
                    <div>
                      <strong className="block text-stone-900 font-bold mb-1">Weißwein erwärmen</strong>
                      Den trockenen Weißwein (Fendant) im Caquelon auf dem Herd bei mittlerer Hitze erwärmen, bis er leicht simmert. Nicht kochen lassen!
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <span className="w-7 h-7 bg-stone-100 text-red-900 font-extrabold rounded-full flex items-center justify-center flex-shrink-0 text-xs">3</span>
                    <div>
                      <strong className="block text-stone-900 font-bold mb-1">Käse schmelzen in der "8er-Form"</strong>
                      Den geriebenen Gruyère und Vacherin handvollweise unter stetigem Rühren in Form einer "8" dazugeben, bis der Käse vollständig geschmolzen ist.
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <span className="w-7 h-7 bg-stone-100 text-red-900 font-extrabold rounded-full flex items-center justify-center flex-shrink-0 text-xs">4</span>
                    <div>
                      <strong className="block text-stone-900 font-bold mb-1">Binden & Abschmecken</strong>
                      Die Maisstärke im Kirschwasser auflösen, in die Käsemasse gießen und einmal kurz aufkochen lassen. Mit frischem Muskat und Pfeffer abschmecken. Sofort aufs Stövchen stellen!
                    </div>
                  </li>
                </ol>
              </div>

              {/* Troubleshooting & Gelingsicher-Garantie */}
              <div className="bg-amber-50/80 rounded-3xl p-8 border border-amber-200 text-stone-800 space-y-4">
                <h3 className="text-xl font-bold text-amber-950 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-700" />
                  <span>Profi-Tipps: Was tun wenn...</span>
                </h3>

                <div className="grid sm:grid-cols-2 gap-4 text-xs">
                  <div className="bg-white p-4 rounded-2xl border border-amber-200">
                    <strong className="block font-bold text-stone-900 mb-1">Käse trennt sich / Fett schwimmt oben?</strong>
                    <p className="text-stone-600">Gib 1 TL in etwas Weißwein/Zitronensaft aufgelöste Maisstärke dazu und rühre kräftig durch.</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-amber-200">
                    <strong className="block font-bold text-stone-900 mb-1">Fondue ist zu flüssig?</strong>
                    <p className="text-stone-600">Einfach etwas mehr geriebenen Käse oder 1 TL Speisestärke einrühren und sanft köcheln lassen.</p>
                  </div>
                </div>
              </div>

              {/* Recommended Topf CTA */}
              <div className="bg-gradient-to-r from-stone-900 to-red-950 text-white rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div>
                  <h4 className="text-xl font-bold mb-1">Welches Caquelon nutzt man dafür?</h4>
                  <p className="text-xs text-stone-300">Wir empfehlen für Käsefondue feuerfeste Keramik aus der Schweiz.</p>
                </div>
                <CTAButton href={createPageUrl('CaquelonKaufen')} variant="secondary" size="small" className="flex-shrink-0">
                  Testsieger Caquelon ansehen &rarr;
                </CTAButton>
              </div>
            </div>

          </div>
        </section>

        {/* Floating Affiliate Bar */}
        <FloatingCTABar 
          title="Kuhn Rikon Zermatt Keramik-Caquelon"
          subtitle="Das beste Set für echtes Schweizer Käsefondue (4.9 ★)"
          link="https://amzn.to/4oVKIMA"
        />
      </div>
    </>
  );
}
