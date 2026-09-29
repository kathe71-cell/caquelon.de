import React from 'react';
import CTAButton from '../components/CTAButton';
import SEOHead from '../components/SEOHead';
import IngredientCalculator from '../components/IngredientCalculator';
import { Clock, Users } from 'lucide-react';
import FloatingCTABar from '../components/FloatingCTABar';
import { createPageUrl } from '@/utils';

const baseServings = 2;
const ingredients = [
  { name: 'Gruyère, gerieben', quantity: 300, unit: 'g' },
  { name: 'Emmentaler, gerieben', quantity: 200, unit: 'g' },
  { name: 'Champagner (trocken)', quantity: 200, unit: 'ml' },
  { name: 'Trüffelöl', quantity: 1, unit: 'TL' },
  { name: 'Speisestärke', quantity: 1, unit: 'TL' },
  { name: 'Knoblauchzehe', quantity: 1, unit: 'Stück' },
  { name: 'Weißer Pfeffer', quantity: 1, unit: 'Prise' },
  { name: 'Baguette oder Brioche', quantity: 'zum Dippen', unit: '' },
];

export default function ChampagnerFondue() {
  return (
    <>
      <SEOHead 
        title="Luxuriöses Champagner-Trüffel-Fondue | Caquelon.de"
        description="Ein edles Käsefondue mit Champagner und Trüffelöl für besondere Anlässe. Perfekt für romantische Abende."
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Champagner-<span className="text-red-900">Trüffel-Fondue</span></h1>
            <p className="text-xl text-gray-600 mb-8">Eine luxuriöse Variante für besondere Anlässe - mit edlem Champagner und aromatischem Trüffelöl.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Clock className="w-5 h-5 text-red-900" /><span>25 Minuten</span></div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Users className="w-5 h-5 text-red-900" /><span>2-4 Personen</span></div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <IngredientCalculator baseServings={baseServings} ingredients={ingredients} />
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Zubereitung</h2>
              <ol className="space-y-4 text-gray-700">
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Caquelon mit Knoblauch ausreiben. Champagner vorsichtig erwärmen - nicht kochen lassen!</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Den geriebenen Käse portionsweise unter Rühren zugeben und langsam schmelzen lassen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Speisestärke mit etwas kaltem Champagner anrühren und eindicken lassen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Trüffelöl und Pfeffer unterrühren. Mit Baguette oder Brioche servieren.</li>
              </ol>
              <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 leading-relaxed">
                <strong>Gourmet-Tipp:</strong> Wer statt synthetischem Trüffelöl lieber echten schwarzen Sommertrüffel frisch über das fertige Käsefondue hobeln möchte, findet auf <a href="https://www.sommertrueffel.de/" target="_blank" rel="noopener" className="text-amber-900 font-bold underline hover:text-amber-700">sommertrueffel.de</a> einen praktischen Portionsrechner für die optimale Gramm-Dosierung sowie Tipps zu Frische und Hobeltechnik.
              </div>
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
            <h2 className="text-3xl font-bold text-white mb-4">Luxus im Caquelon!</h2>
            <p className="text-xl text-red-100 mb-8">Für besondere Momente verdient man auch ein besonderes Caquelon.</p>
            <CTAButton href="https://amzn.to/4oVKIMA" variant="secondary" size="large">Edles Caquelon entdecken</CTAButton>
          </div>
        </section>
      </div>
      <FloatingCTABar title="Fonduetopf kaufen" subtitle="Keramik, Gusseisen & Edelstahl" link={createPageUrl('CaquelonKaufen')} />
    </>
  );
}