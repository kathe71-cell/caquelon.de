import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import IngredientCalculator from '../components/IngredientCalculator';
import SEOHead from '../components/SEOHead';
import SocialShare from '../components/SocialShare';

const baseServings = 4;
const ingredients = [
  { name: 'Schweizer Gruyère, gerieben', quantity: 400, unit: 'g' },
  { name: 'Emmentaler, gerieben', quantity: 400, unit: 'g' },
  { name: 'Gemüsebrühe', quantity: 300, unit: 'ml' },
  { name: 'Traubensaft (weiß)', quantity: 100, unit: 'ml' },
  { name: 'Speisestärke', quantity: 2, unit: 'EL' },
  { name: 'Knoblauchzehe', quantity: 1, unit: 'Stück' },
  { name: 'Muskatnuss', quantity: 'nach Geschmack', unit: '' },
  { name: 'Brotwürfel (altbacken)', quantity: 800, unit: 'g' },
];

const structuredData = {
  "@context": "https://schema.org/",
  "@type": "Recipe",
  "name": "Käsefondue ohne Alkohol - familienfreundlich",
  "image": [
    "https://www.caquelon.de/og-image.png"
  ],
  "author": {
    "@type": "Organization",
    "name": "Caquelon.de"
  },
  "datePublished": "2024-08-25",
  "description": "Leckeres Käsefondue ohne Alkohol für Familie mit Kindern. Mit Traubensaft statt Wein - genauso cremig und lecker!",
  "recipeCuisine": "Schweizerisch",
  "prepTime": "PT10M",
  "cookTime": "PT10M",
  "totalTime": "PT20M",
  "keywords": "Käsefondue ohne Alkohol, alkoholfreies Fondue, Fondue für Kinder, familienfreundliches Käsefondue",
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
      "text": "Gemüsebrühe und Traubensaft im Caquelon erwärmen."
    },
    {
      "@type": "HowToStep",
      "text": "Den geriebenen Käse langsam einrühren, bis er vollständig geschmolzen ist."
    },
    {
      "@type": "HowToStep",
      "text": "Speisestärke mit etwas kalter Brühe anrühren, einrühren und mit Muskat abschmecken."
    }
  ]
};

export default function KaeseFondueOhneAlkohol() {
  return (
    <>
      <SEOHead 
        title="Käsefondue ohne Alkohol Rezept für Familien | Caquelon.de"
        description="Leckeres Käsefondue ohne Alkohol für Familie mit Kindern. Mit Traubensaft statt Wein - genauso cremig und lecker!"
        keywords="Käsefondue ohne Alkohol, alkoholfreies Fondue, Fondue für Kinder, familienfreundliches Käsefondue"
        canonical="https://www.caquelon.de/kaesefondueohnealkohol"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Käsefondue <span className="text-red-900">ohne Alkohol</span></h1>
            <p className="text-xl text-gray-600 mb-8">Familienfreundliches Käsefondue-Rezept mit Traubensaft statt Wein. Perfekt für Kinder!</p>
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
                title="Käsefondue ohne Alkohol - Perfekt für Familien mit Kindern"
                description="Leckeres alkoholfreies Käsefondue mit Traubensaft statt Wein. Genauso cremig und köstlich!"
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
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Gemüsebrühe und Traubensaft im Caquelon erwärmen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Den geriebenen Käse langsam einrühren, bis er vollständig geschmolzen ist.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Speisestärke mit etwas kalter Brühe anrühren, einrühren und mit Muskat abschmecken.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Perfekt für die ganze Familie!</h2>
            <p className="text-xl text-red-100 mb-8">Entdecke familienfreundliche Fonduesets ohne Alkohol-Brenner.</p>
            <CTAButton href="https://amzn.to/4mthKBR" variant="secondary" size="large">Passendes Caquelon entdecken</CTAButton>
          </div>
        </section>
      </div>
    </>
  );
}