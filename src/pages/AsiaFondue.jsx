import React from 'react';
import CTAButton from '../components/CTAButton';
import SEOHead from '../components/SEOHead';
import IngredientCalculator from '../components/IngredientCalculator';
import { Clock, Users } from 'lucide-react';

const baseServings = 4;
const ingredients = [
  { name: 'Hähnchenbrust oder Garnelen', quantity: 600, unit: 'g' },
  { name: 'Kokosmilch', quantity: 400, unit: 'ml' },
  { name: 'Hühnerbrühe', quantity: 600, unit: 'ml' },
  { name: 'Rote Currypaste', quantity: 2, unit: 'EL' },
  { name: 'Zitronengras', quantity: 2, unit: 'Stangen' },
  { name: 'Ingwer, in Scheiben', quantity: 3, unit: 'cm' },
  { name: 'Gemüse (Pak Choi, Pilze, Paprika)', quantity: 'nach Belieben', unit: '' },
  { name: 'Asiasaucen zum Dippen', quantity: 'nach Belieben', unit: '' },
];

export default function AsiaFondue() {
  return (
    <>
      <SEOHead 
        title="Asiatisches Kokos-Curry-Fondue Rezept | Caquelon.de"
        description="Eine exotische Fondue-Variante mit Kokosmilch, Curry und asiatischen Gewürzen. Perfekt für Liebhaber der Asiaküche."
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Asiatisches <span className="text-red-900">Kokos-Curry-Fondue</span></h1>
            <p className="text-xl text-gray-600 mb-8">Eine exotische Variante mit cremiger Kokosmilch, würziger Currypaste und asiatischen Aromen.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Clock className="w-5 h-5 text-red-900" /><span>25 Minuten</span></div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Users className="w-5 h-5 text-red-900" /><span>4 Personen</span></div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <IngredientCalculator baseServings={baseServings} ingredients={ingredients} />
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Zubereitung</h2>
              <ol className="space-y-4 text-gray-700">
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Zitronengras leicht zerdrücken. Kokosmilch, Brühe, Currypaste, Zitronengras und Ingwer im Caquelon erhitzen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Die Brühe 10 Minuten köcheln lassen, damit sich die Aromen entfalten.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Zitronengras und Ingwer entfernen. Das Caquelon auf das Rechaud stellen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Fleisch und Gemüse auf Fonduegabeln spießen und in der würzigen Kokos-Curry-Brühe garen.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Exotischer Genuss!</h2>
            <p className="text-xl text-red-100 mb-8">Entdecke neue Geschmackswelten mit dem traditionellen Caquelon.</p>
            <CTAButton href="https://amzn.to/4mthKBR" variant="secondary" size="large">Caquelon für Asia-Fondue entdecken</CTAButton>
          </div>
        </section>
      </div>
    </>
  );
}