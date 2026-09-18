import React from 'react';
import { Flame, Zap, CheckSquare, Utensils, GlassWater, CookingPot, ShieldCheck, Sparkles, Star } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import SEOHead from '../components/SEOHead';
import SocialShare from '../components/SocialShare';
import FloatingCTABar from '../components/FloatingCTABar';
import { createPageUrl } from '@/utils';

export default function FondueZubehoer() {
  const zubehoer = [
    { 
      title: 'Farbcodierte Fonduegabeln', 
      description: 'Das A und O am Tisch! Ergonomische Gabeln mit farblicher Markierung, damit jeder Gast seine Gabel im Caquelon mühelos wiederfindet.', 
      badge: 'ESSENTIELL',
      link: "https://amzn.to/4c4GZLx" 
    },
    { 
      title: 'Rechaud & Pastenbrenner', 
      description: 'Das Stövchen mit regulierbarem Edelstahl-Brenner. Hält das Caquelon stundenlang auf konstanter Serviertemperatur.', 
      badge: 'STÖVCHEN',
      link: "https://amzn.to/45pYv3t" 
    },
    { 
      title: 'Fondueteller mit 5 Fächern', 
      description: 'Spezialteller mit vertieften Abteilungen. Verhindert, dass Dips, Saucen, Fleisch und Beilagen ineinander verlaufen.', 
      badge: 'PRAKTISCH',
      link: "https://amzn.to/3Vv2XzT" 
    },
    { 
      title: 'Sicherheits-Brenngel & Brennpaste', 
      description: 'Rauchfreie und geruchlose Brennpaste in Portionsdosen. Eine Dose brennt ca. 2 bis 2,5 Stunden absolut gleichmäßig.', 
      badge: 'SICHERHEIT',
      link: "https://amzn.to/45pYv3t" 
    },
    { 
      title: 'Induktions-Adapterplatte', 
      description: 'Ermöglicht die Nutzung traditioneller Keramik-Caquelons auf moderner Induktion. Einfach zwischen Kochfeld und Caquelon legen.', 
      badge: 'INDUKTION',
      link: "https://amzn.to/4c2Yd8w" 
    },
    { 
      title: 'Edelstahl-Fonduesiebe (für Chinoise)', 
      description: 'Feine Siebkörbchen für Brühe-Fondue, um heruntergefallenes Fleisch oder Gemüse spielend leicht herauszufischen.', 
      badge: 'BRÜHE-FONDUE',
      link: "https://amzn.to/45s2s4M" 
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Essentielles Fondue Zubehör 2026",
    "description": "Die Checkliste für wichtiges Fondue-Zubehör: Gabeln, Rechauds, Brennpaste, Induktionsplatten und Fondueteller.",
    "itemListElement": zubehoer.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.title,
      "description": item.description
    }))
  };

  return (
    <>
      <SEOHead 
        title="Fondue Zubehör 2026: Was man wirklich für den Fondue-Abend braucht"
        description="Checkliste für essentielles Fondue-Zubehör: Fonduegabeln, Rechauds, Sicherheits-Brenngel, Fächerteller & Induktions-Adapterplatten."
        keywords="Fondue Zubehör, Fonduegabeln, Rechaud Brenner, Brennpaste Fondue, Fondueteller Fächer, Induktionsplatte Caquelon"
        canonical="https://www.caquelon.de/fonduezubehoer"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-[#faf8f5] text-stone-900">
        {/* Editorial Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-stone-900 via-stone-900 to-amber-950 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 rounded-full text-amber-300 text-xs font-bold uppercase mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Zubehör & Ausstattung Guide 2026</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Fondue <span className="text-amber-400">Zubehör</span> – Was man wirklich braucht
            </h1>

            <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
              Das richtige Zubehör sorgt für mehr Sicherheit am Tisch, entspanntes Schlemmen und verhindert lästige Verwechslungen von Gabeln und Saucen.
            </p>

            <div className="flex justify-center">
              <SocialShare 
                title="Fondue Zubehör Checkliste 2026 - Was wirklich wichtig ist"
                description="Von farbigen Gabeln über Sicherheits-Brennpaste bis zu Induktionsplatten: Das beste Zubehör im Überblick."
              />
            </div>
          </div>
        </section>

        {/* Grid of Accessories */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {zubehoer.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold bg-amber-100 text-amber-900 px-3 py-1 rounded-full uppercase">
                      {item.badge}
                    </span>
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                  <p className="text-stone-600 text-xs leading-relaxed mb-6">{item.description}</p>
                </div>
                <CTAButton href={item.link} size="small" variant="outline" className="w-full">
                  Bei Amazon ansehen *
                </CTAButton>
              </div>
            ))}
          </div>
        </section>

        {/* Complete Sets CTA Banner */}
        <section className="py-16 bg-white border-t border-stone-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-stone-900 to-red-950 text-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
                Lieber alles in einem Komplett-Set kaufen?
              </h3>
              <p className="text-stone-300 text-sm max-w-xl mx-auto mb-6">
                Entdecke durchdachte Fonduesets inklusive Caquelon, Rechaud, Brenner und farbcodierten Gabeln.
              </p>
              <CTAButton href="https://amzn.to/4oVKIMA" size="large" variant="secondary">
                Passende Fonduesets ansehen *
              </CTAButton>
            </div>
          </div>
        </section>

        <FloatingCTABar 
          title="Fonduetopf Kaufberatung"
          subtitle="Modelle aus Keramik, Gusseisen &amp; Edelstahl"
          link={createPageUrl('CaquelonKaufen')}
        />
      </div>
    </>
  );
}
