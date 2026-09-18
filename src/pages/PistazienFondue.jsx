import React from 'react';
import CTAButton from '../components/CTAButton';
import SEOHead from '../components/SEOHead';
import IngredientCalculator from '../components/IngredientCalculator';
import SocialShare from '../components/SocialShare';
import { Clock, Users, CheckCircle } from 'lucide-react';
import { createPageUrl } from '@/utils';

const baseServings = 4;
const ingredients = [
  { name: 'Weiße Schokolade', quantity: 350, unit: 'g' },
  { name: 'Pistazienmus (100% Pistazie)', quantity: 80, unit: 'g' },
  { name: 'Schlagsahne', quantity: 180, unit: 'ml' },
  { name: 'Gehackte Pistazien (geröstet)', quantity: 30, unit: 'g' },
  { name: 'Prise Meersalz', quantity: 1, unit: 'Prise' },
  { name: 'Frische Erdbeeren, Himbeeren, Waffeln', quantity: 'zum Dippen', unit: '' },
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
          "name": "Sahne und Schokolade",
          "text": "Sahne im Fonduetopf erwärmen und die weiße Schokolade darin unter ständigem Rühren langsam schmelzen."
      },
      {
          "@type": "HowToStep",
          "name": "Pistaziencreme einrühren",
          "text": "Die Pistaziencreme und eine Prise Meersalz hinzufügen und cremig verrühren."
      },
      {
          "@type": "HowToStep",
          "name": "Garnieren und servieren",
          "text": "Mit gehackten Pistazien bestreuen und warm servieren."
      }
  ],
  "name": "Pistazien-Schokoladenfondue",
  "author": {
    "@type": "Organization",
    "name": "Caquelon.de"
  },
  "datePublished": "2026-09-03",
  "description": "Edles Pistazien-Schokoladenfondue mit weißer Schokolade und feinstem Pistazienmus. Perfekt für Gourmets!",
  "prepTime": "PT10M",
  "cookTime": "PT10M",
  "totalTime": "PT20M",
  "recipeYield": "4-6",
  "recipeCategory": "Dessert",
  "keywords": "Pistazien Fondue, Pistazien Schokofondue, Weißes Schokofondue mit Pistazie, Gourmet Schokofondue"
};

export default function PistazienFondue() {
  return (
    <>
      <SEOHead 
        title="Pistazien-Schokoladenfondue Rezept | Edles Gourmet-Dessert"
        description="Feinstes Pistazien-Schokoladenfondue aus weißer Schokolade und cremiger Pistaziencreme. Schnell zubereitet und unwiderstehlich lecker!"
        keywords="Pistazien Fondue, Pistazien Schokofondue, Pistaziencreme Fondue, Weißes Schokofondue mit Pistazie"
        canonical="https://www.caquelon.de/pistazienfondue"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-amber-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Pistazien-<span className="text-red-900">Schokoladenfondue</span></h1>
            <p className="text-xl text-gray-600 mb-8">Ein edles Highlight für Gourmets: Samtige weiße Schokolade trifft auf aromatisches Pistazienmus und knackige Pistazienstücke.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Clock className="w-5 h-5 text-red-900" /><span>15 Minuten</span></div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Users className="w-5 h-5 text-red-900" /><span>4-6 Personen</span></div>
            </div>

            {/* Social Share */}
            <div className="flex justify-center mb-8">
              <SocialShare 
                title="Pistazien-Schokoladenfondue - Edles Gourmet-Dessert"
                description="Samtige weiße Schokolade trifft auf feinstes Pistazienmus! Entdecke dieses edle Dessert-Fondue."
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
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Die Sahne im Caquelon bei niedriger Stufe leicht erwärmen (nicht kochen).</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Die weiße Schokolade in kleine Stücke brechen und langsam in der warmen Sahne unter Rühren schmelzen lassen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Das Pistazienmus sowie eine klitzekleine Prise Meersalz einrühren, bis eine homogene, zartgrüne Creme entsteht.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Vor dem Servieren mit den gehackten Pistazien bestreuen. Auf ein Stövchen mit Teelicht stellen und mit Erdbeeren, Himbeeren oder Biskuit genießen!</li>
              </ol>
            </div>
          </div>

          {/* Tips Section */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Profi-Tipps für dein Pistazien-Fondue
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Das richtige Pistazienmus</h4>
                    <p className="text-gray-600">Verwende 100% reines Pistazienmus ohne Zuckerzusatz für ein intensives, natürliches Pistazienaroma.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Die besten Dipper</h4>
                    <p className="text-gray-600">Frische Säure von Erdbeeren oder Himbeeren passt perfekt zur Süße der weißen Schokolade. Entdecke auch unsere weiteren <a href={createPageUrl('FondueRezepte')} className="text-red-900 underline hover:text-red-700">Fondue Rezepte</a>.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <CTAButton href="https://amzn.to/4fSioGv">
                  Passenden Schokofondue-Topf kaufen *
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
