import React from 'react';
import CTAButton from '../components/CTAButton';
import SEOHead from '../components/SEOHead';
import IngredientCalculator from '../components/IngredientCalculator';
import { Clock, Users } from 'lucide-react';
import FloatingCTABar from '../components/FloatingCTABar';
import { createPageUrl } from '@/utils';

const baseServings = 4;
const ingredients = [
  { name: 'Rinderfilet, in Streifen', quantity: 600, unit: 'g' },
  { name: 'Schweinefilet, in Streifen', quantity: 200, unit: 'g' },
  { name: 'Trockener Weißwein', quantity: 1, unit: 'Liter' },
  { name: 'Kräuterbouquet (Thymian, Rosmarin)', quantity: 1, unit: 'Bund' },
  { name: 'Knoblauchzehen', quantity: 3, unit: 'Stück' },
  { name: 'Lorbeerblätter', quantity: 2, unit: 'Stück' },
  { name: 'Gemüse (Brokkoli, Champignons)', quantity: 'nach Belieben', unit: '' },
  { name: 'Verschiedene Dips', quantity: 'zum Servieren', unit: '' },
];

export default function FondueBacchus() {
  return (
    <>
      <SEOHead 
        title="Fondue Bacchus (Weißwein-Fondue) Rezept | caquelon.de"
        description="Eine elegante Fondue-Variante, bei der Fleisch und Gemüse in siedendem Weißwein gegart werden."
        canonical="https://www.caquelon.de/fonduebacchus"
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Fondue <span className="text-red-900">Bacchus</span></h1>
            <p className="text-xl text-gray-600 mb-8">Eine elegante Variante, bei der Fleisch und Gemüse in siedendem Weißwein mit Kräutern gegart werden.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Clock className="w-5 h-5 text-red-900" /><span>25 Minuten</span></div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Users className="w-5 h-5 text-red-900" /><span>4 Personen</span></div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <IngredientCalculator baseServings={baseServings} ingredients={ingredients} category="bruehe" />
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Zubereitung</h2>
              <ol className="space-y-4 text-gray-700">
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Weißwein mit Kräuterbouquet, Knoblauch und Lorbeerblättern im Caquelon erhitzen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Den Wein zum Sieden bringen, aber nicht stark kochen lassen - der Alkohol soll teilweise erhalten bleiben.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Das Caquelon auf das Rechaud stellen und die Temperatur konstant halten.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Fleisch und Gemüse auf Fonduegabeln spießen und im aromatischen Weißwein garen. Mit Dips servieren.</li>
              </ol>
            </div>
          </div>
        </section>
        {/* Produktempfehlung */}
        <section className="py-12 bg-amber-50 border-t border-amber-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border border-amber-200 shadow-lg p-6 flex flex-col sm:flex-row items-start gap-6">
              <div className="text-4xl">🥩</div>
              <div className="flex-1">
                <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">Empfohlenes Caquelon für dieses Rezept</div>
                <h3 className="text-xl font-extrabold text-stone-900 mb-2">Spring Classic Edelstahl-Fondueset</h3>
                <p className="text-stone-600 text-sm mb-3">Robustes Edelstahl-Caquelon mit Sicherheits-Brenner – ideal für Brühe und Fleischfondue. Spülmaschinenfest und besonders langlebig.</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-2xl font-extrabold text-stone-900">ab ~89 €</span>
                  <CTAButton href="https://amzn.to/3JoYc39" size="small">Jetzt bei Amazon ansehen *</CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Wie Bacchus es geliebt hätte!</h2>
            <p className="text-xl text-red-100 mb-8">Eine edle Art zu fonduieren - mit dem passenden Caquelon wird es perfekt.</p>
            <CTAButton href="https://amzn.to/3JoYc39" variant="secondary" size="large">Edles Caquelon entdecken</CTAButton>
          </div>
        </section>
      </div>
      <FloatingCTABar title="Fonduetopf kaufen" subtitle="Keramik, Gusseisen & Edelstahl" link={createPageUrl('CaquelonKaufen')} />
    </>
  );
}