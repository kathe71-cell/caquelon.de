import React from 'react';
import { ShieldCheck, Flame, Zap, CheckCircle2, AlertTriangle, HelpCircle, ArrowRight, Award } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import SEOHead from '../components/SEOHead';
import SocialShare from '../components/SocialShare';
import ProductComparisonTable from '../components/ProductComparisonTable';
import FloatingCTABar from '../components/FloatingCTABar';
import { createPageUrl } from '@/utils';

export default function CaquelonKaufen() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.caquelon.de/CaquelonKaufen",
        "url": "https://www.caquelon.de/CaquelonKaufen",
        "name": "Caquelon kaufen: Der große Fonduetopf & Fondueset Test 2026",
        "description": "Welcher Fonduetopf passt zu dir? Kaufberatung für Caquelons aus Keramik, Gusseisen & Edelstahl mit Induktions-Check.",
        "inLanguage": "de-DE"
      },
      {
        "@type": "HowTo",
        "name": "Wie wähle ich den perfekten Fonduetopf (Caquelon)?",
        "description": "Schritt-für-Schritt Kaufberatung zur Auswahl des passenden Caquelons für Käse-, Fleisch- oder Schokoladenfondue.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Material bestimmen",
            "text": "Für Käsefondue ist feuerfeste Keramik der Goldstandard. Für Fleischfondue in Öl wählen Sie Gusseisen oder Edelstahl."
          },
          {
            "@type": "HowToStep",
            "name": "Induktions-Kompatibilität prüfen",
            "text": "Prüfen Sie, ob Sie einen Induktionsherd besitzen. Gusseisen und Edelstahl funktionieren direkt, Keramik benötigt ein Induktions-Set."
          },
          {
            "@type": "HowToStep",
            "name": "Größe festlegen",
            "text": "Rechnen Sie mit ca. 200-250g Käse pro Person. Für 4 Personen empfehlen wir ein Volumen von mindestens 1,5 Litern."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Was ist der Unterschied zwischen einem Caquelon und einem normalen Topf?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ein Caquelon besitzt dicke Wände aus Keramik oder Gusseisen, die Wärme extrem langsam und gleichmäßig abgeben. Dadurch brennt geschmolzener Käse nicht an und die Temperatur bleibt am Tisch konstant."
            }
          },
          {
            "@type": "Question",
            "name": "Kann man ein Keramik-Caquelon auf dem Induktionsherd nutzen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Reine Keramik ist nicht magnetisch und funktioniert nicht direkt auf Induktion. Es gibt jedoch spezielle Induktions-Adapterplatten oder moderne Caquelons mit integriertem Edelstahl-Boden."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="Caquelon kaufen: Der große Fonduetopf & Set Kaufberater"
        description="Welches Caquelon passt zu deinen Abenden? Unabhängige Kaufberatung für Fonduetöpfe aus Keramik, Gusseisen & Edelstahl. Mit Induktions-Tipps!"
        keywords="Caquelon kaufen, Fonduetopf kaufen, Fondueset Induktion, Keramik Caquelon, Gusseisen Fonduetopf, Kuhn Rikon Zermatt, Le Creuset Fondue"
        canonical="https://www.caquelon.de/caquelonkaufen"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-[#faf8f5]">
        {/* Editorial Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-red-950 via-red-900 to-stone-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 px-4 py-1.5 rounded-full text-amber-300 text-xs font-bold uppercase tracking-widest mb-6">
              <Award className="w-4 h-4" />
              <span>Material- &amp; Kaufberatung</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Das passende <span className="text-amber-400">Caquelon kaufen</span> – Welcher Fonduetopf ist der richtige?
            </h1>

            <p className="text-lg md:text-xl text-stone-300 max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
              Ein hochwertiges Caquelon hält ein Leben lang. Wir zeigen dir, wie sich <strong>Keramik, Gusseisen und Edelstahl</strong> unterscheiden und welches Modell perfekt zu deinem Induktions- oder Gasherd passt.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm font-semibold text-stone-300 mb-8">
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Für Käse, Fleisch &amp; Schokolade</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Induktions-Kompatibilität geprüft</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Materialspezifikationen geprüft</span>
              </div>
            </div>

            <div className="flex justify-center">
              <SocialShare 
                title="Caquelon kaufen: Der große Fonduetopf-Kaufberater 2026"
                description="Welches Caquelon passt zu deinen Abenden? Unabhängige Kaufberatung für Keramik, Gusseisen & Edelstahl."
              />
            </div>
          </div>
        </section>

        {/* Product Comparison Section */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductComparisonTable />
        </section>

        {/* Detailed Material Guide */}
        <section className="py-16 bg-white border-t border-stone-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
                Keramik, Gusseisen oder Edelstahl? <span className="text-red-900">Der Material-Vergleich</span>
              </h2>
              <p className="text-stone-600 text-base md:text-lg">
                Jedes Material hat spezifische Vorteile bei Wärmespeicherung, Temperaturbeständigkeit und Pflege.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Keramik */}
              <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200 flex flex-col justify-between hover:shadow-lg transition">
                <div>
                  <div className="w-12 h-12 bg-red-900/10 text-red-900 rounded-2xl flex items-center justify-center font-bold text-2xl mb-6">
                    🧱
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-3">Feuerfeste Keramik</h3>
                  <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                    Der unangefochtene Schweizer Klassiker für Käsefondue. Keramik gibt die Wärme sehr langsam ab, sodass der Käse sanft schmilzt, ohne anzubrennen.
                  </p>
                  
                  <div className="space-y-2 text-xs font-medium mb-6">
                    <div className="flex justify-between py-1 border-b border-stone-200">
                      <span className="text-stone-500">Wärmespeicherung:</span>
                      <span className="font-bold text-stone-900">Sehr hoch (9/10)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-200">
                      <span className="text-stone-500">Ideal für:</span>
                      <span className="font-bold text-stone-900">Käsefondue</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-200">
                      <span className="text-stone-500">Empfindlichkeit:</span>
                      <span className="font-bold text-stone-900">Thermoschock vermeiden</span>
                    </div>
                  </div>
                </div>

                <CTAButton href="https://amzn.to/4fV2GdS" size="small" variant="outline" className="w-full">
                  Keramik Caquelons ansehen *
                </CTAButton>
              </div>

              {/* Gusseisen */}
              <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200 flex flex-col justify-between hover:shadow-lg transition">
                <div>
                  <div className="w-12 h-12 bg-amber-900/10 text-amber-900 rounded-2xl flex items-center justify-center font-bold text-2xl mb-6">
                    🍳
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-3">Emailliertes Gusseisen</h3>
                  <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                    Die robusteste Wahl für höchste Flexibilität. Gusseisen funktioniert direkt auf Induktionsherden und eignet sich sowohl für Käse- als auch für heißes Fettfondue.
                  </p>
                  
                  <div className="space-y-2 text-xs font-medium mb-6">
                    <div className="flex justify-between py-1 border-b border-stone-200">
                      <span className="text-stone-500">Wärmespeicherung:</span>
                      <span className="font-bold text-stone-900">Extrem hoch (10/10)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-200">
                      <span className="text-stone-500">Ideal für:</span>
                      <span className="font-bold text-stone-900">Käse- & Fleischfondue</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-200">
                      <span className="text-stone-500">Induktion:</span>
                      <span className="font-bold text-emerald-700">100% Direkt geeignet</span>
                    </div>
                  </div>
                </div>

                <CTAButton href="https://amzn.to/4fSioGv" size="small" variant="outline" className="w-full">
                  Gusseisen Caquelons ansehen *
                </CTAButton>
              </div>

              {/* Edelstahl */}
              <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200 flex flex-col justify-between hover:shadow-lg transition">
                <div>
                  <div className="w-12 h-12 bg-blue-900/10 text-blue-900 rounded-2xl flex items-center justify-center font-bold text-2xl mb-6">
                    ✨
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-3">Edelstahl</h3>
                  <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                    Perfekt für Brühe- und Fettfondues (Fondue Chinoise / Bourguignonne). Wird extrem schnell heiß und lässt sich mühelos in der Spülmaschine reinigen.
                  </p>
                  
                  <div className="space-y-2 text-xs font-medium mb-6">
                    <div className="flex justify-between py-1 border-b border-stone-200">
                      <span className="text-stone-500">Erwärmungszeit:</span>
                      <span className="font-bold text-stone-900">Sehr schnell (10/10)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-200">
                      <span className="text-stone-500">Ideal für:</span>
                      <span className="font-bold text-stone-900">Fleisch- & Brühefondue</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-200">
                      <span className="text-stone-500">Pflege:</span>
                      <span className="font-bold text-stone-900">Spülmaschinenfest</span>
                    </div>
                  </div>
                </div>

                <CTAButton href="https://amzn.to/3JoYc39" size="small" variant="outline" className="w-full">
                  Edelstahl Sets ansehen *
                </CTAButton>
              </div>
            </div>
          </div>
        </section>

        {/* Induction Guide Banner */}
        <section className="py-16 bg-[#faf8f5]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-xl">
                <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Wichtiger Induktions-Tipp</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                  Hast du einen Induktionsherd in der Küche?
                </h3>
                <p className="text-stone-300 text-sm md:text-base leading-relaxed">
                  Herkömmliche Ton- und Keramikcaquelons leiten keine magnetischen Schwingungen. Nutze für dein Keramiktopf-Set eine <strong>Edelstahl-Adapterplatte</strong> oder wähle direkt ein gusseisernes Set.
                </p>
              </div>

              <div className="flex-shrink-0 w-full md:w-auto">
                <CTAButton href="https://amzn.to/4fSioGv" variant="secondary" size="large" className="w-full">
                  Induktionsgeeignetes Gusseisen-Set ansehen *
                </CTAButton>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Cross-Link Hub */}
        <section className="py-16 bg-white border-t border-stone-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-stone-900 mb-6">
              Passende Rezepte & Ratgeber für dein neues Caquelon
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <a href={createPageUrl('SchweizerKaeseFondue')} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 hover:border-red-900 text-left transition group">
                <div className="font-bold text-stone-900 group-hover:text-red-900 transition">Schweizer Käsefondue</div>
                <p className="text-xs text-stone-500 mt-1">Das originale 50/50 Rezept</p>
              </a>
              <a href={createPageUrl('FondueKaese')} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 hover:border-red-900 text-left transition group">
                <div className="font-bold text-stone-900 group-hover:text-red-900 transition">Fondue-Käse Ratgeber</div>
                <p className="text-xs text-stone-500 mt-1">Gruyère, Vacherin & Mischungen</p>
              </a>
              <a href={createPageUrl('FondueAbendPlanen')} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 hover:border-red-900 text-left transition group">
                <div className="font-bold text-stone-900 group-hover:text-red-900 transition">Fondue-Abend planen</div>
                <p className="text-xs text-stone-500 mt-1">Mengen, Dips & Vorbereitung</p>
              </a>
            </div>
          </div>
        </section>

        {/* Sticky Floating CTA */}
        <FloatingCTABar 
          title="Kaufberatung & Modell-Vergleich"
          subtitle="Kuhn Rikon, Le Creuset & Spring im Überblick"
          link="https://amzn.to/4oVKIMA"
        />
      </div>
    </>
  );
}
