import React from 'react';
import CTAButton from '../components/CTAButton';
import FloatingCTABar from '../components/FloatingCTABar';
import SEOHead from '../components/SEOHead';
import IngredientCalculator from '../components/IngredientCalculator';
import SocialShare from '../components/SocialShare';
import { Clock, Users, CheckCircle } from 'lucide-react';
import { createPageUrl } from '@/utils';

const baseServings = 4;
const ingredients = [
  { name: 'Zucker', quantity: 200, unit: 'g' },
  { name: 'Sahne (zimmerwarm)', quantity: 200, unit: 'ml' },
  { name: 'Butter', quantity: 50, unit: 'g' },
  { name: 'Meersalz', quantity: 1, unit: 'TL' },
  { name: 'Äpfel, Brownie-Stücke, Popcorn', quantity: 'zum Dippen', unit: '' },
];

const structuredData = {
  "@context": "https://schema.org/",
  "@type": "Recipe",
  "image": [
    "https://www.caquelon.de/og-image.png"
  ],
  "recipeIngredient": ingredients.map(i => `${i.quantity}${i.unit} ${i.name}`),
  "recipeInstructions": [
      {
          "@type": "HowToStep",
          "name": "Karamell vorbereiten",
          "text": "Sahne und braunen Zucker im Caquelon erwärmen, Butter dazugeben und sanft köcheln lassen."
      },
      {
          "@type": "HowToStep",
          "name": "Salz zufügen",
          "text": "Fleur de Sel unterrühren und die Karamellmasse zu einer sämigen Sauce eindicken."
      },
      {
          "@type": "HowToStep",
          "name": "Warm servieren",
          "text": "Auf dem Rechaud warmhalten und mit Apfelschnitzen und Brezeln dippen."
      }
  ],
  "name": "Gesalzenes Karamell-Fondue",
  "author": {
    "@type": "Organization",
    "name": "Caquelon.de"
  },
  "datePublished": "2024-12-18",
  "description": "Unwiderstehlich süß-salzige Karamell-Fondue! Perfekt zu Äpfeln, Brownies und Popcorn.",
  "prepTime": "PT5M",
  "cookTime": "PT10M",
  "totalTime": "PT15M",
  "recipeYield": "4-6",
  "recipeCategory": "Dessert",
  "keywords": "Karamell Fondue, gesalzenes Karamell, süß salzig Dessert"
};

export default function KaramellFondue() {
  return (
    <>
      <SEOHead 
        title="Gesalzenes Karamell-Fondue Rezept | Süß trifft Salzig"
        description="Eine unwiderstehlich süß-salzige Kombination! Perfekt zu Äpfeln, Brownie-Stücken und Popcorn. In 15 Min fertig."
        keywords="Karamell Fondue, gesalzenes Karamell, Salted Caramel Fondue, süß salzig Dessert, Karamell Dessert"
        canonical="https://www.caquelon.de/karamellfondue"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Gesalzenes <span className="text-red-900">Karamell-Fondue</span></h1>
            <p className="text-xl text-gray-600 mb-8">Eine unwiderstehliche Kombination aus süß und salzig. Perfekt zu Äpfeln, Brownie-Stücken und Popcorn.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Clock className="w-5 h-5 text-red-900" /><span>15 Minuten</span></div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Users className="w-5 h-5 text-red-900" /><span>4-6 Personen</span></div>
            </div>

            {/* Social Share */}
            <div className="flex justify-center mb-8">
              <SocialShare 
                title="Gesalzenes Karamell-Fondue - Süß trifft salzig!"
                description="Unwiderstehlich süß-salzige Karamell-Fondue! Perfekt zu Äpfeln, Brownies und Popcorn."
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <IngredientCalculator baseServings={baseServings} ingredients={ingredients} />
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Zubereitung</h2>
              <ol className="space-y-4 text-gray-700">
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Zucker in einem Topf ohne Rühren zu goldenem Karamell schmelzen lassen (Vorsicht: sehr heiß!).</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Topf vom Herd nehmen und vorsichtig die warme Sahne unter ständigem Rühren zugießen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Butter und Meersalz einrühren, bis eine glatte Masse entsteht.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>In das Caquelon umfüllen und auf einem Stövchen mit Teelicht warm halten. Mit Früchten und Süßigkeiten servieren.</li>
              </ol>
            </div>
          </div>

          {/* Tips Section */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Tipps für perfektes Karamell-Fondue
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Vorsicht beim Karamellisieren</h4>
                    <p className="text-gray-600">Karamell wird sehr heiß (über 170°C)! Beim Zugeben der Sahne vorsichtig sein - es spritzt stark. Langsam einrühren.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Die besten Dips</h4>
                    <p className="text-gray-600">Granny Smith Äpfel, gesalzenes Popcorn, Brownie-Würfel, Brezeln und Birnen sind perfekt! Entdecke mehr <a href={createPageUrl('FondueRezepte')} className="text-red-900 underline hover:text-red-700">Dessert-Fondues</a>.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Temperatur halten</h4>
                    <p className="text-gray-600">Karamell verfestigt sich schnell. Verwende nur ein Teelicht zum Warmhalten, keine Spiritusflamme!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produktempfehlung */}
        <section className="py-12 bg-amber-50 border-t border-amber-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border border-amber-200 shadow-lg p-6 flex flex-col sm:flex-row items-start gap-6">
              <div className="text-4xl">🍫</div>
              <div className="flex-1">
                <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">Empfohlenes Set für dieses Rezept</div>
                <h3 className="text-xl font-extrabold text-stone-900 mb-2">Schokofondue-Set mit Keramiktopf</h3>
                <p className="text-stone-600 text-sm mb-3">Spezielles Schoko-Fondue-Set mit kleinerer Flamme für cremige Schokolade ohne Anbrennen. Perfekt für Dessert-Fondues.</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-2xl font-extrabold text-stone-900">ab ~35 €</span>
                  <CTAButton href="https://amzn.to/4c4GZLx" size="small">Jetzt bei Amazon ansehen *</CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Süß trifft salzig!</h2>
            <p className="text-xl text-red-100 mb-8">Das perfekte Dessert-Fondue für alle, die es gerne außergewöhnlich mögen.</p>
            <CTAButton href="https://amzn.to/4c4GZLx" variant="secondary" size="large">
              Dessert-Fondue-Set entdecken *
            </CTAButton>
            <p className="text-sm text-red-200 mt-4">* = Affiliate-Link / Werbung</p>
          </div>
        </section>
      </div>
    
      <FloatingCTABar title="Fonduetopf kaufen" subtitle="Keramik, Gusseisen & Edelstahl" link={createPageUrl('CaquelonKaufen')} />
    </>
  );
}