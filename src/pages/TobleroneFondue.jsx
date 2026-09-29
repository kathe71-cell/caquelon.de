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
  { name: 'Toblerone-Schokolade', quantity: 400, unit: 'g' },
  { name: 'Sahne', quantity: 200, unit: 'ml' },
  { name: 'Honig', quantity: 1, unit: 'EL' },
  { name: 'Früchte, Kekse, Marshmallows', quantity: 'zum Dippen', unit: '' },
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
          "name": "Sahne erhitzen",
          "text": "Schlagsahne im Caquelon vorsichtig erwärmen."
      },
      {
          "@type": "HowToStep",
          "name": "Toblerone schmelzen",
          "text": "Die Toblerone in Stücke brechen und in der Sahne unter Rühren schmelzen lassen."
      },
      {
          "@type": "HowToStep",
          "name": "Servieren",
          "text": "Auf dem Rechaud platzieren und mit Früchten und Biskuit genießen."
      }
  ],
  "name": "Toblerone-Schokoladenfondue",
  "author": {
    "@type": "Organization",
    "name": "Caquelon.de"
  },
  "datePublished": "2024-12-18",
  "description": "Schweizer Klassiker als Schokofondue! Cremige Toblerone mit Honig-Mandel-Stückchen.",
  "prepTime": "PT5M",
  "cookTime": "PT5M",
  "totalTime": "PT10M",
  "recipeYield": "4-6",
  "recipeCategory": "Dessert",
  "keywords": "Toblerone Fondue, Schweizer Schokofondue, Honig Schokolade"
};

export default function TobleroneFondue() {
  return (
    <>
      <SEOHead 
        title="Toblerone-Schokoladenfondue Rezept | Schweizer Klassiker"
        description="Der Schweizer Klassiker als Schokofondue! Cremige Toblerone mit Honig-Mandel-Stückchen - einfach unwiderstehlich in 10 Min."
        keywords="Toblerone Fondue, Toblerone Schokofondue, Schweizer Schokofondue, Honig Schokolade Fondue"
        canonical="https://www.caquelon.de/tobleronefondue"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-amber-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Toblerone-<span className="text-red-900">Schokoladenfondue</span></h1>
            <p className="text-xl text-gray-600 mb-8">Der Schweizer Klassiker im Schokofondue-Topf! Cremiges Toblerone-Fondue mit Honig-Mandel-Stückchen.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Clock className="w-5 h-5 text-red-900" /><span>10 Minuten</span></div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Users className="w-5 h-5 text-red-900" /><span>4-6 Personen</span></div>
            </div>

            {/* Social Share */}
            <div className="flex justify-center mb-8">
              <SocialShare 
                title="Toblerone-Schokoladenfondue - Schweizer Klassiker"
                description="Der Schweizer Klassiker als Schokofondue! Cremige Toblerone mit Honig-Mandel-Stückchen."
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
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Toblerone-Schokolade in Stücke brechen und mit Sahne im Caquelon bei sehr schwacher Hitze erwärmen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Unter ständigem Rühren schmelzen lassen, bis eine glatte Masse entsteht.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Honig unterrühren und das Caquelon auf ein Stövchen mit Teelicht stellen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Mit Früchten, Keksen und Marshmallows genießen - die Mandel-Honig-Stückchen sorgen für besonderen Geschmack!</li>
              </ol>
            </div>
          </div>

          {/* Tips Section */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Tipps für dein Toblerone-Fondue
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Die Mandel-Honig-Stückchen</h4>
                    <p className="text-gray-600">Das Besondere an Toblerone sind die knackigen Mandel-Nougat-Stückchen, die dem Fondue eine einzigartige Textur verleihen!</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Beste Dips</h4>
                    <p className="text-gray-600">Birnen, Äpfel, Trauben und Mandelkekse harmonieren perfekt mit dem Honig-Geschmack. Mehr <a href={createPageUrl('FondueRezepte')} className="text-red-900 underline hover:text-red-700">Dessert-Fondue Rezepte</a> findest du hier.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Toblerone-Sorten</h4>
                    <p className="text-gray-600">Probiere auch weiße oder dunkle Toblerone für Abwechslung!</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">Schweizer Tradition trifft Fondue!</h2>
            <p className="text-xl text-red-100 mb-8">Das perfekte Schokofondue-Set für den Toblerone-Klassiker.</p>
            <CTAButton href="https://amzn.to/4c4GZLx" variant="secondary" size="large">
              Schokofondue-Set entdecken *
            </CTAButton>
            <p className="text-sm text-red-200 mt-4">* = Affiliate-Link / Werbung</p>
          </div>
        </section>
      </div>
    
      <FloatingCTABar title="Fonduetopf kaufen" subtitle="Keramik, Gusseisen & Edelstahl" link={createPageUrl('CaquelonKaufen')} />
    </>
  );
}