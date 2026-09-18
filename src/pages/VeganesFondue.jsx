import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import IngredientCalculator from '../components/IngredientCalculator';
import SocialShare from '../components/SocialShare';
import SEOHead from '../components/SEOHead';

const baseServings = 4;
const ingredients = [
  { name: 'Fester Tofu, gewürfelt', quantity: 400, unit: 'g' },
  { name: 'Champignons, Brokkoli, Paprika', quantity: 800, unit: 'g' },
  { name: 'Kräftige Gemüsebrühe', quantity: 1.5, unit: 'Liter' },
  { name: 'Sojasauce', quantity: 4, unit: 'EL' },
  { name: 'Ingwer, gerieben', quantity: 1, unit: 'TL' },
  { name: 'Vegane Dips (z.B. auf Joghurtbasis)', quantity: 'nach Belieben', unit: '' },
];

const structuredData = {
  "@context": "https://schema.org/",
  "@type": "Recipe",
  "name": "Veganes Fondue mit Gemüse & Tofu",
  "image": [
    "https://www.caquelon.de/og-image.svg"
  ],
  "author": {
    "@type": "Organization",
    "name": "Caquelon.de"
  },
  "datePublished": "2024-08-25",
  "description": "Herzhaftes veganes Fondue mit Gemüse, Tofu und leckerer Brühe. Perfekt für pflanzliche Ernährung!",
  "recipeCuisine": "Vegan",
  "prepTime": "PT10M",
  "cookTime": "PT10M", 
  "totalTime": "PT20M",
  "keywords": "veganes Fondue, Tofu Fondue, pflanzliches Fondue, Gemüse Fondue",
  "recipeYield": "4",
  "recipeCategory": "Vegan",
  "recipeIngredient": ingredients.map(i => `${i.quantity}${i.unit} ${i.name}`),
  "recipeInstructions": [
    {
      "@type": "HowToStep",
      "text": "Tofu gut abtropfen lassen und in Würfel schneiden. Gemüse putzen und in mundgerechte Stücke teilen."
    },
    {
      "@type": "HowToStep",
      "text": "Gemüsebrühe mit Sojasauce und Ingwer im Caquelon zum Kochen bringen."
    },
    {
      "@type": "HowToStep",
      "text": "Das Caquelon auf dem Rechaud heiß halten."
    },
    {
      "@type": "HowToStep",
      "text": "Tofu und Gemüse auf Fonduegabeln spießen und in der heißen Brühe garen. Mit Dips servieren."
    }
  ]
};

export default function VeganesFondue() {
  return (
    <>
      <SEOHead
        title="Veganes Fondue Rezept mit Gemüse & Tofu | Caquelon.de"
        description="Herzhaftes veganes Fondue mit Gemüse, Tofu und leckerer Brühe. Perfekt für pflanzliche Ernährung!"
        keywords="veganes Fondue, Tofu Fondue, pflanzliches Fondue, Gemüse Fondue"
        canonical="https://www.caquelon.de/veganesfondue"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Veganes Fondue <span className="text-red-900">(Gemüse & Tofu)</span></h1>
            <p className="text-xl text-gray-600 mb-8">Herzhaftes veganes Fondue mit Gemüse, Tofu und leckerer Brühe. Perfekt für Gäste.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Clock className="w-5 h-5 text-red-900" />
                <span className="font-medium">20 Minuten</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Users className="w-5 h-5 text-red-900" />
                <span className="font-medium">4 Personen</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <ChefHat className="w-5 h-5 text-red-900" />
                <span className="font-medium">Einfach</span>
              </div>
            </div>

            {/* Social Share */}
            <div className="flex justify-center mb-8">
              <SocialShare 
                title="Veganes Fondue - Herzhafter Genuss ohne Fleisch"
                description="Köstliches veganes Fondue mit Gemüse und Tofu. Perfekt für pflanzliche Ernährung und gesellige Abende!"
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
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Tofu gut abtropfen lassen und in Würfel schneiden. Gemüse putzen und in mundgerechte Stücke teilen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Gemüsebrühe mit Sojasauce und Ingwer im Caquelon zum Kochen bringen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Das Caquelon auf dem Rechaud heiß halten.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Tofu und Gemüse auf Fonduegabeln spießen und in der heißen Brühe garen. Mit Dips servieren.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Genuss für alle!</h2>
            <p className="text-xl text-red-100 mb-8">Veganes Fondue gelingt in jedem Topf. Finde dein perfektes Caquelon-Set.</p>
            <CTAButton href="https://amzn.to/4mthKBR" variant="secondary" size="large">Passendes Caquelon entdecken</CTAButton>
          </div>
        </section>
      </div>
    </>
  );
}