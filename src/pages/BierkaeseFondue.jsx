import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import FloatingCTABar from '../components/FloatingCTABar';
import { createPageUrl } from '@/utils';
import IngredientCalculator from '../components/IngredientCalculator';
import SEOHead from '../components/SEOHead';
import SocialShare from '../components/SocialShare';

const baseServings = 4;
const ingredients = [
  { name: 'Mittelalter Gouda, gerieben', quantity: 300, unit: 'g' },
  { name: 'Emmentaler, gerieben', quantity: 300, unit: 'g' },
  { name: 'Weißbier oder helles Bier', quantity: 400, unit: 'ml' },
  { name: 'Speisestärke', quantity: 2, unit: 'EL' },
  { name: 'Knoblauchzehe', quantity: 1, unit: 'Stück' },
  { name: 'Kümmel (gemahlen)', quantity: 1, unit: 'TL' },
  { name: 'Laugenbrezeln oder dunkles Brot', quantity: 'zum Dippen', unit: '' },
];

const structuredData = {
  "@context": "https://schema.org/",
  "@type": "Recipe",
  "name": "Bierkäse-Fondue mit Brezn",
  "image": [
    "https://www.caquelon.de/og-image.png"
  ],
  "author": {
    "@type": "Organization",
    "name": "Caquelon.de"
  },
  "datePublished": "2024-08-25",
  "description": "Ein deftiges Käsefondue mit kräftigem Bier und Kümmel. Perfekt mit Laugenbrezeln für Bayern-Fans!",
  "recipeCuisine": "Bayerisch",
  "prepTime": "PT15M",
  "cookTime": "PT10M",
  "totalTime": "PT25M",
  "keywords": "Bierkäse Fondue, Bier Fondue, bayerisches Fondue, Oktoberfest Fondue",
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
      "text": "Das Bier im Caquelon erwärmen (nicht kochen lassen)."
    },
    {
      "@type": "HowToStep",
      "text": "Den geriebenen Käse nach und nach einrühren, bis er vollständig geschmolzen ist."
    },
    {
      "@type": "HowToStep",
      "text": "Speisestärke mit etwas kaltem Bier anrühren, einrühren und mit Kümmel abschmecken."
    }
  ]
};

export default function BierkaeseFondue() {
  return (
    <>
      <SEOHead 
        title="Bierkäse-Fondue mit Brezn Rezept | Caquelon.de"
        description="Ein deftiges Käsefondue mit kräftigem Bier und Kümmel. Perfekt mit Laugenbrezeln für Bayern-Fans!"
        keywords="Bierkäse Fondue, Bier Fondue, bayerisches Fondue, Oktoberfest Fondue"
        canonical="https://www.caquelon.de/bierkaesefondue"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Bierkäse-Fondue <span className="text-red-900">mit Brezn</span></h1>
            <p className="text-xl text-gray-600 mb-8">Ein deftiges Käsefondue mit kräftigem Bier und Kümmel. Perfekt für Bayern-Fans!</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Clock className="w-5 h-5 text-red-900" />
                <span className="font-medium">25 Minuten</span>
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
                title="Bierkäse-Fondue mit Brezn - Bayerischer Genuss im Caquelon"
                description="Deftiges Käsefondue mit Bier und Kümmel. Perfekt mit Laugenbrezeln für echte Bayern-Fans!"
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
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Das Bier im Caquelon erwärmen (nicht kochen lassen).</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Den geriebenen Käse nach und nach einrühren, bis er vollständig geschmolzen ist.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Speisestärke mit etwas kaltem Bier anrühren, einrühren und mit Kümmel abschmecken.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Produktempfehlung */}
        <section className="py-12 bg-amber-50 border-t border-amber-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border border-amber-200 shadow-lg p-6 flex flex-col sm:flex-row items-start gap-6">
              <div className="text-4xl">🍶</div>
              <div className="flex-1">
                <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">Empfohlenes Caquelon für dieses Rezept</div>
                <h3 className="text-xl font-extrabold text-stone-900 mb-2">Kuhn Rikon Zermatt Keramik-Caquelon</h3>
                <p className="text-stone-600 text-sm mb-3">Traditionelles Schweizer Keramik-Caquelon mit optimaler Wärmeverteilung für cremiges Käsefondue. Inklusive Rechaud und farbcodierten Gabeln.</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-2xl font-extrabold text-stone-900">ab ~89 €</span>
                  <CTAButton href="https://amzn.to/4oVKIMA" size="small">Jetzt bei Amazon ansehen *</CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Prost und Mahlzeit!</h2>
            <p className="text-xl text-red-100 mb-8">Entdecke robuste Caquelons für deine deftigen Fondue-Abende.</p>
            <CTAButton href="https://amzn.to/4oVKIMA" variant="secondary" size="large">Passendes Caquelon entdecken</CTAButton>
          </div>
        </section>
      </div>
    
      <FloatingCTABar title="Fonduetopf kaufen" subtitle="Keramik, Gusseisen & Edelstahl" link={createPageUrl('CaquelonKaufen')} />
    </>
  );
}