import React from 'react';
import { createPageUrl } from '@/utils';
import { CheckCircle, AlertCircle, Star, Flame, Award } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import SEOHead from '../components/SEOHead';
import SocialShare from '../components/SocialShare';

export default function RacletteKaese() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Raclette Käse kaufen: Die besten Käsesorten für perfektes Raclette",
    "description": "Welcher Käse eignet sich für Raclette? Entdecke die besten Raclette-Käsesorten, Reifung und wo du authentischen Schweizer Raclette-Käse kaufen kannst.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.caquelon.de/RacletteKaese"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Caquelon.de",
      "url": "https://www.caquelon.de"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.caquelon.de/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Raclette Käse",
          "item": "https://www.caquelon.de/raclettekaese"
        }
      ]
    }
  };

  return (
    <>
      <SEOHead 
        title="Raclette Käse kaufen: Schweizer AOP Käsesorten für Raclette"
        description="Welcher Käse eignet sich für Raclette? Entdecke die besten Raclette-Käsesorten, Reifung und wo du authentischen Schweizer Raclette-Käse kaufen kannst."
        keywords="Raclette Käse, Käse für Raclette, Raclette du Valais, Schweizer Raclette Käse, Raclette Käse kaufen"
        canonical="https://www.caquelon.de/raclettekaese"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-2xl">🧀</span>
                <span className="text-sm font-medium text-gray-700">Würzig • Schmelzend • Aromatisch</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Der richtige <span className="text-red-900">Raclette Käse</span> für perfekten Genuss
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Der Käse ist das Herzstück jedes Raclette-Abends! Hier erfährst du, welche Käsesorten sich am besten eignen, 
                wie du sie richtig auswählst und wo du authentischen Schweizer Raclette-Käse kaufen kannst.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <CTAButton href="https://amzn.to/3KFuLu1" size="large">
                  Jetzt Raclette Käse kaufen *
                </CTAButton>
              </div>

              {/* Social Share */}
              <div className="flex justify-center mb-6">
                <SocialShare 
                  title="Raclette Käse kaufen - Der ultimative Guide für perfektes Raclette"
                  description="Entdecke die besten Käsesorten für dein Raclette und wo du authentischen Schweizer Käse kaufen kannst!"
                />
              </div>
              
              <p className="text-sm text-gray-500">* = Affiliate-Link / Werbung</p>
            </div>
          </div>
        </section>

        {/* Die besten Raclette-Käsesorten */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
              Die <span className="text-red-900">Top 5</span> Raclette-Käsesorten
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Raclette du Valais */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-yellow-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Raclette du Valais AOP</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Der absolute Klassiker aus dem Wallis! Mit geschützter Herkunftsbezeichnung und 
                  unverwechselbarem Geschmack - würzig, aromatisch und perfekt schmelzend.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Perfekte Schmelzeigenschaften</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Würzig-nussiger Geschmack</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>3-6 Monate gereift</span>
                  </div>
                </div>
              </div>

              {/* Raclette de Savoie */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-red-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Raclette de Savoie</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Die französische Alternative! Etwas milder und cremiger als das Schweizer Original, 
                  aber genauso authentisch und schmackhaft.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Besonders cremig</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Milder Geschmack</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Gut für Einsteiger</span>
                  </div>
                </div>
              </div>

              {/* Raclette mit Pfeffer */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                    <Flame className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Raclette mit Pfeffer</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Für alle, die es pikant mögen! Mit schwarzem Pfeffer verfeinert, 
                  bringt dieser Käse eine würzige Schärfe auf den Teller.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Pikant und würzig</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Mit ganzen Pfefferkörnern</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Für Liebhaber</span>
                  </div>
                </div>
              </div>

              {/* Raclette mit Knoblauch */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-green-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Raclette mit Knoblauch</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Der aromatische Allrounder! Mit feinem Knoblauch verfeinert, 
                  perfekt für alle, die kräftige Geschmacksnoten lieben.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Würzig-aromatisch</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Mit echtem Knoblauch</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Sehr beliebt</span>
                  </div>
                </div>
              </div>

              {/* Raclette Natur */}
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-amber-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Raclette Natur</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Der Purist! Ohne zusätzliche Gewürze, dafür mit dem vollständigen, 
                  authentischen Raclette-Geschmack.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Pure Käse-Aromatik</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Vielseitig kombinierbar</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Der Klassiker</span>
                  </div>
                </div>
              </div>

              {/* Fondue-Käse Info Box */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border-2 border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🫕</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Fondue-Käse</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Fondue-Käse ist NICHT für Raclette geeignet! Er ist speziell zum Schmelzen im Topf 
                  gemacht. Für Fondue-Abende ist er perfekt!
                </p>
                <CTAButton href={createPageUrl('FondueKaese')} size="small" className="w-full">
                  Mehr über Fondue-Käse
                </CTAButton>
              </div>
            </div>
          </div>
        </section>

        {/* Die richtige Käsemenge */}
        <section className="py-20 bg-gradient-to-b from-stone-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Die richtige <span className="text-red-900">Käsemenge</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center">
              Wie viel Raclette-Käse braucht man pro Person? Hier die Faustregel:
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-5xl font-bold text-red-900 mb-2">200-250g</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pro Person</h3>
                <p className="text-gray-600">
                  Die ideale Menge für einen normalen Appetit bei einem geselligen Raclette-Abend.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-2 border-red-200">
                <div className="text-5xl font-bold text-red-900 mb-2">300g</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Für große Esser</h3>
                <p className="text-gray-600">
                  Wenn deine Gäste großen Hunger haben oder es der Hauptgang ist.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-5xl font-bold text-red-900 mb-2">150-180g</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Für Kinder</h3>
                <p className="text-gray-600">
                  Kleinere Portionen für jüngere Gäste - reicht völlig aus.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-100 to-orange-100 p-8 rounded-2xl max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">💡 Profi-Tipp</h3>
              <p className="text-gray-700 text-center">
                Lieber etwas mehr kaufen! Übrig gebliebener Raclette-Käse lässt sich prima für Aufläufe, 
                überbackene Gerichte oder beim nächsten Raclette-Abend verwenden. Im Kühlschrank hält er 
                sich gut verpackt mehrere Wochen.
              </p>
            </div>

            <div className="text-center mt-12">
              <CTAButton href="https://amzn.to/3KFuLu1" size="large">
                Raclette Käse bestellen *
              </CTAButton>
              <p className="text-sm text-gray-500 mt-2">* = Affiliate-Link / Werbung</p>
            </div>
          </div>
        </section>

        {/* Kauftipps */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              <span className="text-red-900">Kauftipps</span> für Raclette-Käse
            </h2>

            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Scheiben oder am Stück?</h3>
                    <p className="text-gray-700">
                      Vorgeschnittene Scheiben sind praktisch, aber Käse am Stück bleibt länger frisch 
                      und schmeckt intensiver. Du kannst ihn selbst in Scheiben schneiden oder hobeln.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Auf Qualität achten</h3>
                    <p className="text-gray-700">
                      Echter Schweizer Raclette du Valais AOP oder Raclette de Savoie IGP garantieren 
                      Qualität. Diese geschützten Herkunftsbezeichnungen stehen für traditionelle Herstellung.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Reifegrad beachten</h3>
                    <p className="text-gray-700">
                      Für Raclette eignet sich junger bis mittelalter Käse am besten (3-6 Monate Reifung). 
                      Er schmilzt perfekt und entwickelt eine schöne goldbraune Kruste.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Lagerung beachten</h3>
                    <p className="text-gray-700">
                      Raclette-Käse im Kühlschrank bei 5-8°C lagern, gut verpackt in Käsepapier oder 
                      Frischhaltefolie. Etwa 30 Minuten vor dem Racletten aus dem Kühlschrank nehmen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bereit für dein perfektes <span className="text-amber-300">Raclette</span>?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Entdecke jetzt hochwertigen Raclette-Käse und starte mit dem richtigen Raclette-Grill in dein Genuss-Abenteuer!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="https://amzn.to/3KFuLu1" variant="secondary" size="large">
                Raclette Käse kaufen *
              </CTAButton>
              <CTAButton href={createPageUrl('Raclette')} variant="outline" size="large">
                Raclette-Ratgeber
              </CTAButton>
            </div>
            
            <p className="text-sm text-red-200 mt-4">* = Affiliate-Link / Werbung</p>
          </div>
        </section>
      </div>
    </>
  );
}