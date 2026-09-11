import React from 'react';
import { Clock, Users, ChefHat, CheckCircle } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import IngredientCalculator from '../components/IngredientCalculator';
import SEOHead from '../components/SEOHead';
import SocialShare from '../components/SocialShare';
import { createPageUrl } from '@/utils';

const baseServings = 4;
const ingredients = [
  { name: 'Weiße Schokolade (gehackt)', quantity: 400, unit: 'g' },
  { name: 'Sahne', quantity: 150, unit: 'ml' },
  { name: 'Kokosmilch', quantity: 50, unit: 'ml' },
  { name: 'Vanilleextrakt', quantity: 1, unit: 'TL' },
  { name: 'Frische Beeren, Kokoschips', quantity: 'zum Dippen', unit: '' },
];

const structuredData = {
  "@context": "https://schema.org/",
  "@type": "Recipe",
  "name": "Weißes Schokoladenfondue mit Kokos",
  "author": {
    "@type": "Organization",
    "name": "Caquelon.de"
  },
  "datePublished": "2024-12-18",
  "description": "Elegantes Fondue mit weißer Schokolade, Kokos und Vanille. Perfekt mit frischen Beeren!",
  "prepTime": "PT5M",
  "cookTime": "PT7M",
  "totalTime": "PT12M",
  "recipeYield": "4-6",
  "recipeCategory": "Dessert",
  "keywords": "weißes Schokoladenfondue, Dessert Fondue, Schokofondue weiß"
};

export default function WeisseSchokoladenFondue() {
  return (
    <>
      <SEOHead
        title="Weißes Schokoladenfondue Rezept | Elegant & Cremig"
        description="Elegantes Fondue mit weißer Schokolade, Kokos und Vanille. Perfekt mit frischen Beeren - in nur 12 Minuten fertig!"
        keywords="weißes Schokoladenfondue, weißes Schokofondue, Dessert Fondue, Schokofondue weiß, elegantes Dessert"
        canonical="https://caquelon.de/WeisseSchokoladenFondue"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Fondue mit <span className="text-red-900">weißer Schokolade</span></h1>
          <p className="text-xl text-gray-600 mb-8">Rezept für cremiges Schokofondue mit weißer Schokolade, Beeren & Kokos.</p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full"><Clock className="w-5 h-5 text-red-900" /><span>12 Minuten</span></div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full"><Users className="w-5 h-5 text-red-900" /><span>4-6 Personen</span></div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full"><ChefHat className="w-5 h-5 text-red-900" /><span>Einfach</span></div>
          </div>

          {/* Social Share */}
          <div className="flex justify-center mb-8">
            <SocialShare 
              title="Weißes Schokoladenfondue - Eleganter Nachtisch"
              description="Cremiges Fondue mit weißer Schokolade, perfekt mit Beeren und Kokos. Der elegante Dessert-Hit!"
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
              <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Sahne und Kokosmilch im Caquelon bei sehr schwacher Hitze erwärmen. Weiße Schokolade brennt leicht an!</li>
              <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Die gehackte weiße Schokolade dazugeben und unter ständigem Rühren langsam schmelzen.</li>
              <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Vanilleextrakt einrühren. Das Caquelon auf ein Stövchen mit Teelicht stellen.</li>
              <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Mit frischen Beeren, Ananas und Kokoschips servieren.</li>
            </ol>
          </div>
        </div>

        {/* Tips Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Tipps für das perfekte weiße Schokoladenfondue
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Vorsicht beim Schmelzen</h4>
                  <p className="text-gray-600">Weiße Schokolade brennt schneller an als dunkle! Verwende nur sehr geringe Hitze und rühre ständig.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Beste Dips</h4>
                  <p className="text-gray-600">Erdbeeren, Himbeeren, Ananas, Physalis und Kokoschips harmonieren perfekt. Für mehr Ideen schau in unsere <a href={createPageUrl('FondueRezepte')} className="text-red-900 underline hover:text-red-700">Dessert-Rezepte Sammlung</a>.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Variationen</h4>
                  <p className="text-gray-600">Probiere Zimt, Kardamom oder Limettenschale für exotische Geschmacksnoten!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ein Traum in Weiß!</h2>
          <p className="text-xl text-red-100 mb-8">Finde das perfekte Set für dein elegantes Schokoladenfondue.</p>
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