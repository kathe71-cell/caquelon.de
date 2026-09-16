import React from 'react';
import { createPageUrl } from '@/utils';
import { CheckCircle2, ShieldCheck, ShoppingBag, Star, Award, ChevronRight } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import SEOHead from '../components/SEOHead';
import SocialShare from '../components/SocialShare';
import FloatingCTABar from '../components/FloatingCTABar';

export default function FondueKaese() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://caquelon.de/fonduekaese",
        "name": "Fondue Käse kaufen: Schweizer AOP Käsesorten & Mischungen",
        "description": "Welcher Käse eignet sich für Fondue? Ratgeber für Gruyère AOP, Vacherin Fribourgeois, Appenzeller & Emmentaler.",
        "inLanguage": "de-DE"
      },
      {
        "@type": "Article",
        "headline": "Welche Käsesorten eignen sich am besten für Käsefondue?",
        "author": {
          "@type": "Organization",
          "name": "Caquelon.de"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Caquelon.de",
          "url": "https://caquelon.de"
        }
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="Fondue Käse kaufen: Die besten Käsesorten & Mischungen"
        description="Welcher Käse schmilzt am besten? Ratgeber für Gruyère AOP, Vacherin Fribourgeois, Appenzeller & Emmentaler. Mit Bezugsquellen & Mischverhältnis!"
        keywords="Fondue Käse kaufen, Käse für Fondue, Fondue Käsemischung, Gruyère kaufen, Vacherin Fribourgeois, Appenzeller Fondue"
        canonical="https://caquelon.de/fonduekaese"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-[#faf8f5] text-stone-900">
        {/* Editorial Hero */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-stone-900 via-stone-900 to-amber-950 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 rounded-full text-amber-300 text-xs font-bold uppercase mb-6">
              <Award className="w-4 h-4" />
              <span>Schweizer Käsekunde & Kaufberater</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Der perfekte <span className="text-amber-400">Fondue Käse</span> für sämigen Genuss
            </h1>

            <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
              Der Käse ist das Herzstück jedes Fondues! Erfahre, welche Sorten perfekt schmelzen, wie du sie kombinierst und wo du originale AOP-Käse kaufst.
            </p>

            <div className="flex justify-center mb-6">
              <SocialShare 
                title="Fondue Käse kaufen - Die besten Käsesorten & Mischungen"
                description="Welcher Käse eignet sich für Fondue? Entdecke Gruyère, Vacherin & die besten Schweizer Mischungen."
              />
            </div>
          </div>
        </section>

        {/* Cheese Varieties Section */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
              Die 4 Säulen des perfekten Käsefondues
            </h2>
            <p className="text-stone-600 text-sm mt-2">
              Eine gute Fondue-Mischung kombiniert immer mindestens einen würzigen Schnittkäse mit einem besonders cremig schmelzenden Käse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Gruyère */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">MUST-HAVE BASIS</span>
                  <span className="text-amber-500 font-bold text-xs">AOP Zertifiziert</span>
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Le Gruyère AOP</h3>
                <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                  Ein kräftiger, würzig-nussiger Schweizer Hartkäse aus Rohmilch. Er bildet das geschmackliche Fundament fast jedes authentischen Fondues.
                </p>
                <div className="bg-stone-50 p-3 rounded-xl text-xs space-y-1 text-stone-700 mb-6">
                  <div><strong>Reifegrad:</strong> Réserve (mind. 10 Monate gereift)</div>
                  <div><strong>Geschmack:</strong> Nussig, würzig, leicht pikant</div>
                </div>
              </div>
              <CTAButton href="https://amzn.to/4mLWWEX" size="small" className="w-full">
                Gruyère AOP bei Amazon bestellen *
              </CTAButton>
            </div>

            {/* Vacherin Fribourgeois */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">CREME-GARANT</span>
                  <span className="text-amber-500 font-bold text-xs">AOP Zertifiziert</span>
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Vacherin Fribourgeois AOP</h3>
                <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                  Der Schmelzkönig aus dem Kanton Freiburg! Ein halbharter Käse mit extrem angenehmer Cremigkeit, der dem Fondue seine seidenweiche Textur verleiht.
                </p>
                <div className="bg-stone-50 p-3 rounded-xl text-xs space-y-1 text-stone-700 mb-6">
                  <div><strong>Schmelzverhalten:</strong> Extrem geschmeidig & cremig</div>
                  <div><strong>Geschmack:</strong> Harzig, aromatisch, samtig</div>
                </div>
              </div>
              <CTAButton href="https://amzn.to/4mLWWEX" size="small" className="w-full">
                Vacherin Fribourgeois kaufen *
              </CTAButton>
            </div>

            {/* Appenzeller */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-red-900 bg-red-100 px-3 py-1 rounded-full">KRÄUTER-WÜRZE</span>
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Appenzeller Käse</h3>
                <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                  Mit einer geheimen Kräutersulze gepflegt. Perfekt, wenn man dem Fondue eine kräftige, würzig-pikante Note verleihen möchte (ca. 20-30% Anteil).
                </p>
                <div className="bg-stone-50 p-3 rounded-xl text-xs space-y-1 text-stone-700 mb-6">
                  <div><strong>Besonderheit:</strong> Kräuteraroma durch Sulze-Reifung</div>
                  <div><strong>Geschmack:</strong> Würziger als Gruyère, leicht scharf</div>
                </div>
              </div>
              <CTAButton href="https://amzn.to/4mLWWEX" size="small" variant="outline" className="w-full">
                Appenzeller Käse ansehen *
              </CTAButton>
            </div>

            {/* Emmentaler */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-blue-900 bg-blue-100 px-3 py-1 rounded-full">MILD & MILD-NUSSIG</span>
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Emmentaler AOP</h3>
                <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                  Der berühmte Großlochkäse wird vor allem bei milderen Familienfondues beigemischt. Er mildert die Schärfe kräftigerer Käse ab.
                </p>
                <div className="bg-stone-50 p-3 rounded-xl text-xs space-y-1 text-stone-700 mb-6">
                  <div><strong>Eigenschaft:</strong> Sehr mild, zieht schöne Fäden</div>
                  <div><strong>Geschmack:</strong> Sanft, leicht süßlich-nussig</div>
                </div>
              </div>
              <CTAButton href="https://amzn.to/4mLWWEX" size="small" variant="outline" className="w-full">
                Schweizer Emmentaler ansehen *
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Ready Mix Banner CTA */}
        <section className="py-16 bg-white border-t border-stone-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-red-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
                Original Schweizer Fondue-Mischung (Moitié-Moitié)
              </h3>
              <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto mb-8">
                Wenn du dir das Reiben sparen möchtest: Original verzehrfertige Mischung aus der Schweiz mit Gruyère & Vacherin AOP für traditionell sämiges Käsefondue.
              </p>
              <CTAButton href="https://amzn.to/4mLWWEX" size="large" variant="secondary">
                Fertige Käsemischung ansehen *
              </CTAButton>
            </div>
          </div>
        </section>

        <FloatingCTABar 
          title="Schweizer Fondue Käse AOP"
          subtitle="Gruyère & Vacherin Mischung versandfertig bei Amazon"
          link="https://amzn.to/4mLWWEX"
        />
      </div>
    </>
  );
}
