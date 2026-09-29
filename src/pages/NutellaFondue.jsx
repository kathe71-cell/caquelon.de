import React from 'react';
import { Clock, Users, ChefHat, CheckCircle } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import IngredientCalculator from '../components/IngredientCalculator';
import SEOHead from '../components/SEOHead';
import SocialShare from '../components/SocialShare';
import { createPageUrl } from '@/utils';
import FloatingCTABar from '../components/FloatingCTABar';

const baseServings = 4;
const ingredients = [
  { name: 'Nutella oder andere Nuss-Nougat-Creme', quantity: 400, unit: 'g' },
  { name: 'Sahne', quantity: 100, unit: 'ml' },
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
          "name": "Zutaten erwärmen",
          "text": "Die Sahne in einem hitzebeständigen Fonduetopf bei schwacher Hitze sanft erwärmen."
      },
      {
          "@type": "HowToStep",
          "name": "Nutella schmelzen",
          "text": "Die Nutella portionsweise mit dem Schneebesen einrühren, bis eine glatte, glänzende Schokoladencreme entsteht."
      },
      {
          "@type": "HowToStep",
          "name": "Warmhalten und genießen",
          "text": "Auf das Rechaud mit kleiner Flamme stellen und sofort mit Früchten, Marshmallows und Keksen genießen."
      }
  ],
  "name": "Nutella-Fondue",
  "author": {
    "@type": "Organization",
    "name": "Caquelon.de"
  },
  "datePublished": "2024-12-18",
  "description": "Schnelles Nutella-Fondue in 5 Minuten! Der absolute Party-Hit für Kindergeburtstage und süße Abende.",
  "prepTime": "PT2M",
  "cookTime": "PT3M",
  "totalTime": "PT5M",
  "recipeYield": "4-6",
  "recipeCategory": "Dessert",
  "keywords": "Nutella Fondue, schnelles Dessert, Kindergeburtstag Fondue"
};

export default function NutellaFondue() {
  return (
    <>
      <SEOHead
        title="Nutella-Fondue Rezept | In 5 Minuten fertig!"
        description="Schnelles Nutella-Fondue in nur 5 Minuten! Der absolute Party-Hit für Kindergeburtstage und süße Abende. Super einfach!"
        keywords="Nutella Fondue, Nutella Schokofondue, schnelles Dessert, Kindergeburtstag Fondue, einfaches Fondue"
        canonical="https://www.caquelon.de/nutellafondue"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nutella-Fondue</h1>
          <p className="text-xl text-gray-600 mb-8">Rezept für ein schnelles Nutella-Fondue mit Früchten, Keksen und Marshmallows.</p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full"><Clock className="w-5 h-5 text-red-900" /><span>5 Minuten</span></div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full"><Users className="w-5 h-5 text-red-900" /><span>4-6 Personen</span></div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full"><ChefHat className="w-5 h-5 text-red-900" /><span>Sehr Einfach</span></div>
          </div>

          {/* Social Share */}
          <div className="flex justify-center mb-8">
            <SocialShare 
              title="Nutella-Fondue - Der absolute Party-Hit!"
              description="Schnelles Nutella-Fondue in nur 5 Minuten. Perfekt für Kindergeburtstage und süße Abende!"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          {/* Replaced existing ingredients div with IngredientCalculator */}
          <IngredientCalculator baseServings={baseServings} ingredients={ingredients} /> 
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Zubereitung</h2>
            <ol className="space-y-4 text-gray-700">
              <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Nutella und Sahne in einem Topf bei sehr schwacher Hitze langsam erwärmen.</li>
              <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Ständig rühren, bis eine glatte, cremige Masse entsteht. Nicht kochen lassen!</li>
              <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Das Fondue in ein Caquelon umfüllen und auf einem Stövchen mit Teelicht warm halten.</li>
              <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Sofort mit den vorbereiteten Dips servieren und genießen.</li>
            </ol>
          </div>
        </div>

        {/* Tips Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Tipps für dein Nutella-Fondue
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Perfekt für Kindergeburtstage</h4>
                  <p className="text-gray-600">Kinder lieben dieses Fondue! Es ist schnell gemacht und garantiert ein Hit auf jeder Party.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Die besten Dips</h4>
                  <p className="text-gray-600">Bananen, Erdbeeren, Marshmallows, Waffelstücke und Donuts sind perfekte Begleiter. Mehr Dessert-Ideen findest du in unseren <a href={createPageUrl('FondueRezepte')} className="text-red-900 underline hover:text-red-700">Fondue-Rezepten</a>.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Alternative Nuss-Cremes</h4>
                  <p className="text-gray-600">Probiere auch andere Nuss-Nougat-Cremes oder mische verschiedene Sorten für neue Geschmackserlebnisse!</p>
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
                <p className="text-stone-600 text-sm mb-3">Spezielles Schoko-Fondue-Set mit kleinerer Flamme für cremige Schokolade ohne Anbrennen. Perfekt für Dessert-Fondues mit Früchten und Keksen.</p>
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
          <h2 className="text-3xl font-bold text-white mb-4">Der absolute Party-Hit!</h2>
          <p className="text-xl text-red-100 mb-8">Schneller geht's nicht! Finde das passende Schokofondue-Set für deine nächste Feier.</p>
          <CTAButton href="https://amzn.to/4c4GZLx" variant="secondary" size="large">
            Passendes Caquelon entdecken *
          </CTAButton>
          <p className="text-sm text-red-200 mt-4">* = Affiliate-Link / Werbung</p>
        </div>
      </section>
    </div>
      <FloatingCTABar title="Fonduetopf kaufen" subtitle="Keramik, Gusseisen & Edelstahl" link={createPageUrl('CaquelonKaufen')} />
    </>
  );
}