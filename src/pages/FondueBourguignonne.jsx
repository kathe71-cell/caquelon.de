
import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import IngredientCalculator from '../components/IngredientCalculator';
import SEOHead from '../components/SEOHead';
import SocialShare from '../components/SocialShare'; // Import the SocialShare component

const baseServings = 4;
const ingredients = [
  { name: 'Rinderfilet, gewürfelt', quantity: 800, unit: 'g' },
  { name: 'Pflanzenöl (hitzebeständig)', quantity: 1, unit: 'Liter' },
  { name: 'Rosmarinzweig', quantity: 1, unit: 'Stück' },
  { name: 'Knoblauchzehen', quantity: 2, unit: 'Stück' },
  { name: 'Verschiedene Dips & Saucen', quantity: 'nach Belieben', unit: '' },
];

const structuredData = {
  "@context": "https://schema.org/",
  "@type": "Recipe",
  "name": "Fondue Bourguignonne (Öl-Fondue)",
  "image": [
    "https://caquelon.de/og-image.svg"
  ],
  "author": {
    "@type": "Organization",
    "name": "Caquelon.de"
  },
  "datePublished": "2024-08-25",
  "description": "Das klassische Fleischfondue mit Öl. Tipps für Fleischsorten, Dips und Beilagen für einen gelungenen Fondueabend.",
  "recipeCuisine": "Französisch",
  "prepTime": "PT20M",
  "cookTime": "PT10M",
  "totalTime": "PT30M",
  "keywords": "Fondue Bourguignonne, Fleischfondue, Öl-Fondue, Fondue Rezept",
  "recipeYield": "4",
  "recipeCategory": "Fleischfondue",
  "recipeIngredient": ingredients.map(i => `${i.quantity}${i.unit} ${i.name}`),
  "recipeInstructions": [
    {
      "@type": "HowToStep",
      "text": "Das Fleisch in mundgerechte Würfel schneiden und trockentupfen."
    },
    {
      "@type": "HowToStep",
      "text": "Das Öl im Caquelon auf dem Herd auf ca. 180°C erhitzen. Einen Holzlöffelstiel hineinhalten: Steigen Bläschen auf, ist die Temperatur richtig."
    },
    {
      "@type": "HowToStep",
      "text": "Rosmarin und angedrückte Knoblauchzehen ins heiße Öl geben."
    },
    {
      "@type": "HowToStep",
      "text": "Das Caquelon vorsichtig auf das Rechaud stellen. Jeder gart sein Fleisch nach Belieben auf der Fonduegabel."
    }
  ]
};

export default function FondueBourguignonne() {
  return (
    <>
      <SEOHead
        title="Fondue Bourguignonne (Öl-Fondue) Rezept | Caquelon.de"
        description="Das klassische Fleischfondue mit Öl. Tipps für Fleischsorten, Dips und Beilagen für einen gelungenen Fondueabend."
        keywords="Fondue Bourguignonne, Fleischfondue, Öl-Fondue, Fondue Rezept"
        canonical="https://caquelon.de/FondueBourguignonne"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Fondue Bourguignonne <span className="text-red-900">(Öl-Fondue)</span></h1>
            <p className="text-xl text-gray-600 mb-8">Das klassische Fleischfondue mit Öl. Tipps für Fleischsorten, Dips und Beilagen.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full"><Clock className="w-5 h-5 text-red-900" /><span>30 Minuten</span></div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full"><Users className="w-5 h-5 text-red-900" /><span>4 Personen</span></div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full"><ChefHat className="w-5 h-5 text-red-900" /><span>Mittel</span></div>
            </div>

            {/* Social Share */}
            <div className="flex justify-center mb-8">
              <SocialShare 
                title="Fondue Bourguignonne - Das klassische Fleischfondue mit Öl"
                description="Das perfekte Rezept für Fleischfondue! Tipps für Fleischsorten, Dips und einen gelungenen Fondueabend."
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
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Das Fleisch in mundgerechte Würfel schneiden und trockentupfen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Das Öl im Caquelon auf dem Herd auf ca. 180°C erhitzen. Einen Holzlöffelstiel hineinhalten: Steigen Bläschen auf, ist die Temperatur richtig.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Rosmarin und angedrückte Knoblauchzehen ins heiße Öl geben.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Das Caquelon vorsichtig auf das Rechaud stellen. Jeder gart sein Fleisch nach Belieben auf der Fonduegabel.</li>
              </ol>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ein Fest für Fleischliebhaber!</h2>
            <p className="text-xl text-red-100 mb-8">Entdecke robuste Caquelons aus Gusseisen oder Edelstahl für dein perfektes Fleischfondue.</p>
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
