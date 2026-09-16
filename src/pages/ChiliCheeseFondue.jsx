import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import IngredientCalculator from '../components/IngredientCalculator';
import SEOHead from '../components/SEOHead';
import SocialShare from '../components/SocialShare';

const baseServings = 4;
const ingredients = [
  { name: 'Mittelalter Cheddar, gerieben', quantity: 400, unit: 'g' },
  { name: 'Gruyère, gerieben', quantity: 200, unit: 'g' },
  { name: 'Trockener Weißwein', quantity: 250, unit: 'ml' },
  { name: 'Jalapeños (gehackt)', quantity: 2, unit: 'EL' },
  { name: 'Cayennepfeffer', quantity: 1, unit: 'TL' },
  { name: 'Speisestärke', quantity: 1, unit: 'EL' },
  { name: 'Knoblauchzehe', quantity: 1, unit: 'Stück' },
  { name: 'Nachos und Brotwürfel', quantity: 'zum Dippen', unit: '' },
];

const structuredData = {
  "@context": "https://schema.org/",
  "@type": "Recipe", 
  "name": "Feuriges Chili-Käsefondue",
  "image": [
    "https://caquelon.de/og-image.svg"
  ],
  "author": {
    "@type": "Organization",
    "name": "Caquelon.de"
  },
  "datePublished": "2024-08-25",
  "description": "Scharfes Käsefondue mit Jalapeños und Cayennepfeffer. Perfekt für alle, die es heiß mögen!",
  "recipeCuisine": "Tex-Mex",
  "prepTime": "PT10M",
  "cookTime": "PT10M",
  "totalTime": "PT20M",
  "keywords": "Chili Käsefondue, scharfes Fondue, Jalapeño Fondue, mexikanisches Fondue",
  "recipeYield": "4", 
  "recipeCategory": "Käsefondue",
  "recipeIngredient": ingredients.map(i => `${i.quantity}${i.unit} ${i.name}`),
  "recipeInstructions": [
    {
      "@type": "HowToStep",
      "text": "Caquelon mit der Knoblauchzehe ausreiben."
    },
    {
      "@type": "HowToStep",
      "text": "Weißwein im Caquelon erwärmen und gehackte Jalapeños hinzufügen."
    },
    {
      "@type": "HowToStep", 
      "text": "Den geriebenen Käse langsam einrühren, bis er vollständig geschmolzen ist."
    },
    {
      "@type": "HowToStep",
      "text": "Mit Speisestärke eindicken und mit Cayennepfeffer abschmecken."
    }
  ]
};

export default function ChiliCheeseFondue() {
  return (
    <>
      <SEOHead 
        title="Feuriges Chili-Käsefondue Rezept | Scharf & Würzig"
        description="Scharfes Käsefondue mit Jalapeños und Cayennepfeffer. Perfekt für alle, die es heiß mögen!"
        keywords="Chili Käsefondue, scharfes Fondue, Jalapeño Fondue, mexikanisches Fondue"
        canonical="https://caquelon.de/chilicheesefondue"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Feuriges <span className="text-red-900">Chili-Käsefondue</span></h1>
            <p className="text-xl text-gray-600 mb-8">Scharfes Käsefondue mit Jalapeños und Cayennepfeffer. Für alle, die es heiß mögen!</p>
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
                <span className="font-medium">Mittel</span>
              </div>
            </div>

            {/* Social Share */}
            <div className="flex justify-center mb-8">
              <SocialShare 
                title="Feuriges Chili-Käsefondue - Scharf & Würzig!"
                description="Scharfes Käsefondue mit Jalapeños für alle, die es heiß mögen. Das perfekte Party-Fondue!"
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
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Caquelon mit der Knoblauchzehe ausreiben.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Weißwein im Caquelon erwärmen und gehackte Jalapeños hinzufügen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Den geriebenen Käse langsam einrühren, bis er vollständig geschmolzen ist.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Mit Speisestärke eindicken und mit Cayennepfeffer abschmecken.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Feurig und lecker! 🌶️</h2>
            <p className="text-xl text-red-100 mb-8">Entdecke robuste Caquelons für deine scharfen Fondue-Experimente.</p>
            <CTAButton href="https://amzn.to/4mthKBR" variant="secondary" size="large">Passendes Caquelon entdecken</CTAButton>
          </div>
        </section>
      </div>
    </>
  );
}