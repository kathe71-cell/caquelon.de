
import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import IngredientCalculator from '../components/IngredientCalculator';
import SEOHead from '../components/SEOHead';
import SocialShare from '../components/SocialShare'; // Import the SocialShare component

const baseServings = 4;
const ingredients = [
  { name: 'Rinder- oder Hühnerfilet, hauchdünn', quantity: 600, unit: 'g' },
  { name: 'Kräftige Rinder- oder Gemüsebrühe', quantity: 1.5, unit: 'Liter' },
  { name: 'Gemüse (z.B. Brokkoli, Karotten, Pilze)', quantity: 'nach Belieben', unit: '' },
  { name: 'Glasnudeln', quantity: 100, unit: 'g' },
  { name: 'Sojasauce & Dips', quantity: 'zum Servieren', unit: '' },
];

const structuredData = {
  "@context": "https://schema.org/",
  "@type": "Recipe",
  "name": "Fondue Chinoise (Brühe-Fondue)",
  "image": [
    "https://images.unsplash.com/photo-1599558156293-2410b0a88b85?q=80&w=2070&auto=format&fit=crop"
  ],
  "author": {
    "@type": "Organization",
    "name": "Caquelon.de"
  },
  "datePublished": "2024-08-25",
  "description": "Leichtes Fondue-Rezept mit Brühe statt Öl. Ideal für kalorienbewusstes Schlemmen und eine tolle Alternative zum klassischen Fleischfondue.",
  "recipeCuisine": "Asiatisch",
  "prepTime": "PT15M",
  "cookTime": "PT10M",
  "totalTime": "PT25M",
  "keywords": "Fondue Chinoise, Brühe-Fondue, Fleischfondue, gesundes Fondue",
  "recipeYield": "4",
  "recipeCategory": "Fleischfondue",
  "recipeIngredient": ingredients.map(i => `${i.quantity}${i.unit} ${i.name}`),
  "recipeInstructions": [
    {
      "@type": "HowToStep",
      "text": "Das Fleisch in hauchdünne Scheiben schneiden (Tipp: leicht angefroren geht es besser)."
    },
    {
      "@type": "HowToStep",
      "text": "Die Brühe im Caquelon auf dem Herd zum Kochen bringen und heiß halten."
    },
    {
      "@type": "HowToStep",
      "text": "Das Caquelon auf das Rechaud stellen. Fleisch und Gemüse werden in kleinen Drahtkörbchen in der Brühe gegart."
    },
    {
      "@type": "HowToStep",
      "text": "Zum Schluss die Glasnudeln in der Brühe garen und die kräftige Suppe genießen."
    }
  ]
};

export default function FondueChinoise() {
  return (
    <>
      <SEOHead
        title="Fondue Chinoise (Brühe-Fondue) Rezept | Caquelon.de"
        description="Leichtes Fondue-Rezept mit Brühe statt Öl. Ideal für kalorienbewusstes Schlemmen und eine tolle Alternative zum klassischen Fleischfondue."
        keywords="Fondue Chinoise, Brühe-Fondue, Fleischfondue, gesundes Fondue"
        canonical="https://caquelon.de/FondueChinoise"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Fondue Chinoise <span className="text-red-900">(Brühe-Fondue)</span></h1>
            <p className="text-xl text-gray-600 mb-8">Leichtes Fondue-Rezept mit Brühe statt Öl. Ideal für kalorienbewusstes Schlemmen.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full"><Clock className="w-5 h-5 text-red-900" /><span>25 Minuten</span></div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full"><Users className="w-5 h-5 text-red-900" /><span>4 Personen</span></div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full"><ChefHat className="w-5 h-5 text-red-900" /><span>Mittel</span></div>
            </div>

            {/* Social Share */}
            <div className="flex justify-center mb-8">
              <SocialShare 
                title="Fondue Chinoise - Das gesunde Brühe-Fondue"
                description="Leichtes und gesundes Fondue mit Brühe statt Öl. Perfekt für kalorienbewusstes Schlemmen!"
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
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Das Fleisch in hauchdünne Scheiben schneiden (Tipp: leicht angefroren geht es besser).</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Die Brühe im Caquelon auf dem Herd zum Kochen bringen und heiß halten.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Das Caquelon auf das Rechaud stellen. Fleisch und Gemüse werden in kleinen Drahtkörbchen in der Brühe gegart.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Zum Schluss die Glasnudeln in der Brühe garen und die kräftige Suppe genießen.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Leichter Genuss, voller Geschmack!</h2>
            <p className="text-xl text-red-100 mb-8">Jedes Caquelon ist für Brühe-Fondue geeignet. Finde dein Lieblingsmodell!</p>
            <CTAButton href="https://amzn.to/4mthKBR" variant="secondary" size="large">Passendes Caquelon entdecken</CTAButton>
          </div>
        </section>
      </div>
    </>
  );
}
