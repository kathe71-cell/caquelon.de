import React from 'react';
import { Wine, UtensilsCrossed, Users, CheckCircle2, ShieldCheck, Flame, Calendar, Sparkles } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import SEOHead from '../components/SEOHead';
import SocialShare from '../components/SocialShare';
import FloatingCTABar from '../components/FloatingCTABar';
import { createPageUrl } from '@/utils';

export default function FondueAbendPlanen() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://caquelon.de/FondueAbendPlanen",
        "url": "https://caquelon.de/FondueAbendPlanen",
        "name": "Fondue-Abend planen: Mengenkalkulator, Dips & Checkliste 2026",
        "description": "Die perfekte Vorbereitung für deinen Fondue-Abend: Mengenkalkulation pro Person, Weinbegleitung, Beilagen und Vorbereitungs-Checkliste."
      },
      {
        "@type": "HowTo",
        "name": "Wie plant man den perfekten Fondue-Abend?",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Mengen berechnen",
            "text": "Planen Sie ca. 200g bis 250g Käse oder Fleisch pro Person sowie 200g Würfelbrot ein."
          },
          {
            "@type": "HowToStep",
            "name": "Getränke kühlen",
            "text": "Stellen Sie trockenen Fendant (Chasselas) oder frischen Schwarztee bereit. Vermeiden Sie eiskaltes Wasser bei Käsefondue."
          },
          {
            "@type": "HowToStep",
            "name": "Zubehör prüfen",
            "text": "Prüfen Sie Brennpaste für das Rechaud, Fonduegabeln und Teller mit Dipping-Fächern."
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="Fondue-Abend planen 2026: Mengenkalkulation, Dips & Checkliste"
        description="So gelingt der perfekte Fondue-Abend! Mengenrechner pro Person, ideale Weinbegleitung, Saucen & Checkliste für Gastgeber."
        keywords="Fondue Abend planen, Fondue Mengen pro Person, wieviel Käse pro Person Fondue, Fondue Vorbereitung, Fondue Zubehör"
        canonical="https://caquelon.de/FondueAbendPlanen"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-[#faf8f5] text-stone-900">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-stone-900 via-stone-900 to-amber-950 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 rounded-full text-amber-300 text-xs font-bold uppercase mb-6">
              <Calendar className="w-4 h-4" />
              <span>Gastgeber-Leitfaden & Checkliste 2026</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Den perfekten <span className="text-amber-400">Fondue-Abend</span> planen
            </h1>

            <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
              Von der exakten Mengenkalkulation über die ideale Weinbegleitung bis hin zur stressfreien Vorbereitung – damit dein Abend unvergesslich wird.
            </p>

            <div className="flex justify-center">
              <SocialShare 
                title="Fondue-Abend planen: Mengenkalkulation & Gast-Checkliste"
                description="Der komplette Leitfaden für unvergessliche Fondue-Abende mit Freunden und Familie!"
              />
            </div>
          </div>
        </section>

        {/* Quantities Overview Grid */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
              Mengen-Kalkulation pro Person
            </h2>
            <p className="text-stone-600 text-sm mt-2">
              Verhindere böse Überraschungen: Diese Richtwerte garantieren, dass alle satt werden, ohne Unmengen wegwerfen zu müssen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-md">
              <div className="w-12 h-12 bg-red-900/10 text-red-900 rounded-2xl flex items-center justify-center font-bold text-2xl mb-6">
                🧀
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Käsefondue</h3>
              <div className="text-3xl font-extrabold text-red-900 mb-3">200g - 250g</div>
              <p className="text-xs text-stone-600 mb-4">Geriebene Käsemischung pro Person. Dazu ca. 200g Würfelbrot (Baguette oder Landbrot).</p>
              <a href={createPageUrl('SchweizerKaeseFondue')} className="text-xs font-bold text-red-900 hover:underline">
                Rezept mit Rechner öffnen &rarr;
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-md">
              <div className="w-12 h-12 bg-amber-900/10 text-amber-900 rounded-2xl flex items-center justify-center font-bold text-2xl mb-6">
                🥩
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Fleischfondue (Öl/Brühe)</h3>
              <div className="text-3xl font-extrabold text-amber-900 mb-3">200g - 300g</div>
              <p className="text-xs text-stone-600 mb-4">Fleisch pro Person (Rind, Pute, Schwein, Garnelen). Dazu 3-4 verschiedene Saucen & Dips.</p>
              <a href={createPageUrl('FondueBourguignonne')} className="text-xs font-bold text-amber-900 hover:underline">
                Fleischfondue Rezept &rarr;
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-md">
              <div className="w-12 h-12 bg-amber-600/10 text-amber-700 rounded-2xl flex items-center justify-center font-bold text-2xl mb-6">
                🍓
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Schokoladenfondue</h3>
              <div className="text-3xl font-extrabold text-amber-700 mb-3">75g - 100g</div>
              <p className="text-xs text-stone-600 mb-4">Schokolade pro Person. Dazu ca. 150g frisches Obst (Erdbeeren, Bananen, Trauben).</p>
              <a href={createPageUrl('SchokoladenFondue')} className="text-xs font-bold text-amber-700 hover:underline">
                Schokofondue Rezept &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Detailed Host Checklist Section */}
        <section className="py-16 bg-white border-t border-stone-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-stone-900 text-center mb-10">
              Gastgeber-Checkliste für den Abend
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-200">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900 text-base">Rechaud & Brennstoff prüfen</h4>
                  <p className="text-stone-600 text-sm mt-1">Sicherstellen, dass ausreichend Brennpaste oder Sicherheitsbrenngel vorhanden ist. Eine Dose hält ca. 2 bis 2,5 Stunden.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-200">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900 text-base">Getränkeauswahl abstimmen</h4>
                  <p className="text-stone-600 text-sm mt-1">Zum Käsefondue passt am besten trockener Schweizer Weißwein (Fendant/Chasselas) oder warmer Schwarztee. Eisgekühlte kohlensäurehaltige Getränke vermeiden (Käse im Magen liegt sonst schwerer).</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-200">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900 text-base">Fonduegabeln & Teller bereitstellen</h4>
                  <p className="text-stone-600 text-sm mt-1">Farbcodierte Gabeln verhindern Verwechslungen am Tisch. Spezialteller mit Fächern sorgen dafür, dass sich Saucen nicht vermischen.</p>
                </div>
              </div>
            </div>

            {/* Accessory CTA Box */}
            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-red-950 to-stone-900 text-white text-center shadow-xl">
              <h3 className="text-2xl font-extrabold mb-3">Noch Zubehör nötig?</h3>
              <p className="text-stone-300 text-sm max-w-xl mx-auto mb-6">
                Entdecke Sicherheits-Brenngel, Rechauds, Teller mit Fächern und Sets aus Fonduegabeln.
              </p>
              <CTAButton href="https://amzn.to/4mtlG5v" variant="secondary" size="large">
                Fondue-Zubehör bei Amazon finden *
              </CTAButton>
            </div>
          </div>
        </section>

        <FloatingCTABar 
          title="Optimaler Fonduetopf gesucht?"
          subtitle="Testsieger Caquelons aus Keramik & Gusseisen"
          link={createPageUrl('CaquelonKaufen')}
        />
      </div>
    </>
  );
}
