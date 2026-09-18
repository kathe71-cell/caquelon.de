import React from 'react';
import { Clock, Users, ChefHat, CheckCircle } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import IngredientCalculator from '../components/IngredientCalculator';
import SEOHead from '../components/SEOHead';
import SocialShare from '../components/SocialShare'; // Import the SocialShare component
import { createPageUrl } from '@/utils';

const baseServings = 4;
const ingredients = [
  { name: 'Zartbitterschokolade (gehackt)', quantity: 400, unit: 'g' },
  { name: 'Sahne', quantity: 200, unit: 'ml' },
  { name: 'Butter', quantity: 1, unit: 'EL' },
  { name: 'Früchte, Kekse, Marshmallows', quantity: 'zum Dippen', unit: '' },
];

const structuredData = {
  "@context": "https://schema.org/",
  "@type": "Recipe",
  "name": "Klassisches Schokoladenfondue",
  "image": [
    "https://www.caquelon.de/og-image.png"
  ],
  "author": {
    "@type": "Organization",
    "name": "Caquelon.de"
  },
  "datePublished": "2024-08-25",
  "description": "Cremiges Schokofondue in 10 Min selber machen! Das perfekte Dessert-Rezept für Partys, Kindergeburtstage & süße Abende.",
  "prepTime": "PT5M",
  "cookTime": "PT5M",
  "totalTime": "PT10M",
  "keywords": "Schokoladenfondue Rezept, Schokofondue selber machen, Dessert Fondue",
  "recipeYield": "4-6",
  "recipeCategory": "Dessert",
  "recipeIngredient": ingredients.map(i => `${i.quantity}${i.unit} ${i.name}`),
  "recipeInstructions": [
    {
      "@type": "HowToStep",
      "text": "Sahne und Butter im Caquelon bei schwacher Hitze erwärmen."
    },
    {
      "@type": "HowToStep",
      "text": "Die gehackte Schokolade dazugeben und unter ständigem Rühren langsam schmelzen lassen, bis eine glatte Masse entsteht."
    },
    {
      "@type": "HowToStep",
      "text": "Das Caquelon auf das Rechaud stellen (kleinste Flamme oder Teelicht)."
    },
    {
      "@type": "HowToStep",
      "text": "Mit Früchten, Keksen und Marshmallows servieren."
    }
  ]
};

export default function SchokoladenFondue() {
  return (
    <>
      <SEOHead
        title="Einfaches Schokoladenfondue Rezept | Der Hit für Partys"
        description="Cremiges Schokofondue in 10 Min selber machen! Das perfekte Dessert-Rezept für Partys, Kindergeburtstage & süße Abende. Inkl. Obst-Tipps."
        keywords="Schokoladenfondue Rezept, Schokofondue selber machen, Dessert Fondue, Schokofondue Früchte, Kindergeburtstag"
        canonical="https://www.caquelon.de/schokoladenfondue"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-orange-50 to-pink-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Klassisches <span className="text-red-900">Schokoladenfondue</span></h1>
            <p className="text-xl text-gray-600 mb-8">Schokofondue für Partys & Geburtstage. Einfaches Rezept mit Tipps für Obst, Kekse & mehr.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Clock className="w-5 h-5 text-red-900" />
                <span className="font-medium">10 Minuten</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Users className="w-5 h-5 text-red-900" />
                <span className="font-medium">4-6 Personen</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <ChefHat className="w-5 h-5 text-red-900" />
                <span className="font-medium">Einfach</span>
              </div>
            </div>

            {/* Social Share */}
            <div className="flex justify-center mb-8">
              <SocialShare 
                title="Einfaches Schokoladenfondue Rezept - Der Hit für jede Party"
                description="Cremiges Schokofondue in nur 10 Minuten! Das perfekte Dessert-Rezept für Partys und süße Abende."
              />
            </div>
          </div>
        </section>

        {/* Recipe Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <IngredientCalculator baseServings={baseServings} ingredients={ingredients} />
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Zubereitung</h2>
              <ol className="space-y-4 text-gray-700">
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Sahne und Butter im Caquelon bei schwacher Hitze erwärmen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Die gehackte Schokolade dazugeben und unter ständigem Rühren langsam schmelzen lassen, bis eine glatte Masse entsteht.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Das Caquelon auf das Rechaud stellen (kleinste Flamme oder Teelicht).</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Mit Früchten, Keksen und Marshmallows servieren.</li>
              </ol>
            </div>
          </div>

          {/* Tips Section */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Tipps für das beste Schokoladenfondue
              </h3>
              <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Welche Früchte & Beilagen?</h4>
                      <p className="text-gray-600">Besonders gut passen: Erdbeeren, Bananenstücke, Weintrauben, Apfel- und Birnenspalten, Marshmallows, Waffelstücke, Kekse und kleine Brownie-Würfel.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Schokolade variieren</h4>
                      <p className="text-gray-600">Du kannst auch Vollmilchschokolade verwenden oder eine Mischung aus Zartbitter und Vollmilch. Für noch mehr Ideen, schau dir alle unsere <a href={createPageUrl('FondueRezepte')} className="text-red-900 underline hover:text-red-700">Dessert-Fondue Rezepte</a> an.</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Der süße Höhepunkt jeder Party!</h2>
            <p className="text-xl text-red-100 mb-8">Entdecke die besten Schokofondue-Sets für unvergessliche Dessert-Momente.</p>
            <CTAButton href="https://amzn.to/4mthKBR" variant="secondary" size="large">
              Passendes Caquelon entdecken *
            </CTAButton>
            <p className="text-sm text-red-200 mt-4">* = Affiliate-Link / Werbung</p>
          </div>
        </section>
      </div>
    </>
  );
}