import React from 'react';
import CTAButton from '../components/CTAButton';
import SEOHead from '../components/SEOHead';
import IngredientCalculator from '../components/IngredientCalculator';
import SocialShare from '../components/SocialShare';
import { Clock, Users } from 'lucide-react';
import FloatingCTABar from '../components/FloatingCTABar';
import { createPageUrl } from '@/utils';

const baseServings = 4;
const ingredients = [
  { name: 'Milder bis würziger Käse (z.B. Fontina, Gruyère)', quantity: 500, unit: 'g' },
  { name: 'Passierte Tomaten (Passata)', quantity: 200, unit: 'g' },
  { name: 'Trockener Weißwein', quantity: 100, unit: 'ml' },
  { name: 'Knoblauchzehe, gehackt', quantity: 1, unit: 'Stück' },
  { name: 'Getrockneter Oregano', quantity: 1, unit: 'TL' },
  { name: 'Speisestärke', quantity: 1, unit: 'EL' },
  { name: 'Ciabatta oder Baguette', quantity: 'zum Dippen', unit: '' },
];

export default function TomatenFondue() {
  return (
    <>
      <SEOHead 
        title="Tomaten-Käsefondue 'Italian Style' Rezept | Caquelon.de"
        description="Ein fruchtiges, mediterranes Käsefondue mit Tomaten und Kräutern. Einfach und schnell zubereitet."
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-red-50 to-yellow-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tomaten-Käsefondue <span className="text-red-900">'Italian Style'</span></h1>
            <p className="text-xl text-gray-600 mb-8">Mediterraner Genuss aus dem Caquelon – cremig, fruchtig und voller Geschmack.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Clock className="w-5 h-5 text-red-900" /><span>20 Minuten</span></div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"><Users className="w-5 h-5 text-red-900" /><span>4 Personen</span></div>
            </div>

            {/* Social Share */}
            <div className="flex justify-center mb-8">
              <SocialShare 
                title="Tomaten-Käsefondue Italian Style - Mediterraner Genuss"
                description="Fruchtiges Käsefondue mit Tomaten und italienischen Kräutern. Der mediterrane Twist für dein Caquelon!"
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
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Knoblauch im Caquelon andünsten. Mit Weißwein ablöschen und die passierten Tomaten hinzufügen. Alles kurz aufkochen lassen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Hitze reduzieren. Den geriebenen Käse nach und nach unter Rühren zugeben, bis er vollständig geschmolzen ist.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Speisestärke mit etwas kaltem Wasser anrühren, zum Fondue geben und unter Rühren eindicken lassen.</li>
                <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Mit Oregano, Salz und Pfeffer abschmecken und sofort mit Brot servieren.</li>
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
            <h2 className="text-3xl font-bold text-white mb-4">La Dolce Vita im Fonduetopf!</h2>
            <p className="text-xl text-red-100 mb-8">Finde das passende Caquelon für dein nächstes Fondue-Fest.</p>
            <CTAButton href="https://amzn.to/4oVKIMA" variant="secondary" size="large">Passendes Caquelon entdecken</CTAButton>
          </div>
        </section>
      </div>
      <FloatingCTABar title="Fonduetopf kaufen" subtitle="Keramik, Gusseisen & Edelstahl" link={createPageUrl('CaquelonKaufen')} />
    </>
  );
}