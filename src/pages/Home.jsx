import React, { useState } from 'react';
import { createPageUrl } from '@/utils';
import RecipeCard from '../components/RecipeCard';
import ProductComparisonTable from '../components/ProductComparisonTable';
import FloatingCTABar from '../components/FloatingCTABar';
import CTAButton from '../components/CTAButton';
import SEOHead from '../components/SEOHead';
import SocialShare from '../components/SocialShare';
import GourmetPairingGuide from '../components/GourmetPairingGuide';
import FondueFinderQuiz from '../components/FondueFinderQuiz';
import { Flame, ShieldCheck, Award, Star, Utensils, Users, ArrowRight, CheckCircle2, Code2, Copy, Check } from 'lucide-react';

const featuredRecipes = [
  {
    title: "Original Schweizer Käsefondue (Moitié-Moitié)",
    description: "Das klassische Schweizer Rezept mit 50% Gruyère AOP und 50% Vacherin Fribourgeois AOP für unvergleichliche Cremigkeit.",
    category: "Käsefondue",
    cookTime: "25 Min",
    servings: "4-6",
    difficulty: "Einfach",
    linkTo: createPageUrl("SchweizerKaeseFondue")
  },
  {
    title: "Fondue Bourguignonne (Fleisch in Öl)",
    description: "Der Klassiker für Fleischliebhaber: Zartes Rinderfilet, Schwein und Pute in sprudelnd heißem Pflanzenöl perfekt auf den Punkt gegart.",
    category: "Fleischfondue",
    cookTime: "30 Min",
    servings: "4-6",
    difficulty: "Mittel",
    linkTo: createPageUrl("FondueBourguignonne")
  },
  {
    title: "Veganes Käsefondue auf Cashew-Basis",
    description: "Cremige und würzige pflanzliche Fondue-Alternative aus Cashews, Weißwein und Hefeflocken.",
    category: "Veganes Fondue",
    cookTime: "20 Min",
    servings: "4",
    difficulty: "Mittel",
    linkTo: createPageUrl("VeganesKaeseFondue")
  },
  {
    title: "Pistazien-Schokoladenfondue",
    description: "Luxuriöses Dessert-Fondue aus weißer Schokolade mit 100% Pistazienmus und gehackten Pistazien.",
    category: "Dessert",
    cookTime: "15 Min",
    servings: "4-6",
    difficulty: "Einfach",
    linkTo: createPageUrl("PistazienFondue")
  }
];

export default function Home() {
  const [copiedEmbed, setCopiedEmbed] = useState(false);

  const copyEmbedCode = () => {
    const code = `<iframe src="https://caquelon.de/rechner-embed" width="100%" height="650" style="border:none; border-radius:24px; box-shadow:0 4px 20px rgba(0,0,0,0.08);" title="Käsefondue Mengenrechner"></iframe>\n<p style="font-size:12px; color:#78716c; text-align:center;">Mengenrechner bereitgestellt von <a href="https://caquelon.de" target="_blank" rel="noopener" style="color:#7f1d1d; text-decoration:underline;">caquelon.de</a></p>`;
    navigator.clipboard.writeText(code);
    setCopiedEmbed(true);
    setTimeout(() => setCopiedEmbed(false), 2500);
  };

  const [copiedCitation, setCopiedCitation] = useState(false);

  const copyCitationText = () => {
    const citation = "caquelon.de Fachredaktion (2026). Caquelon-Kaufberatung & Schweizer Fondue-Mengenlehre. https://caquelon.de/ (Stand: September 2026)";
    navigator.clipboard.writeText(citation);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2500);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://caquelon.de/#website",
        "url": "https://caquelon.de/",
        "name": "Caquelon.de",
        "description": "Der unabhängige Fondue- & Fonduetopf-Ratgeber",
        "inLanguage": "de-DE",
        "publisher": { "@id": "https://caquelon.de/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://caquelon.de/fonduerezepte?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://caquelon.de/#organization",
        "name": "Caquelon.de",
        "url": "https://caquelon.de/",
        "logo": "https://caquelon.de/favicon.svg"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://caquelon.de/#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Startseite",
            "item": "https://caquelon.de/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://caquelon.de/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Was ist ein Caquelon und wofür wird es verwendet?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ein Caquelon ist ein traditioneller Schweizer Fonduetopf mit Stielgriff aus hitzebeständiger Keramik, Steingut oder emailliertem Gusseisen. Durch die dickwandige Bauweise speichert und verteilt er Hitze besonders gleichmäßig, sodass Käsefondue cremig bleibt, ohne anzubrennen."
            }
          },
          {
            "@type": "Question",
            "name": "Welches Material eignet sich am besten für Käsefondue?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Für klassisches Käsefondue ist glasierte Keramik oder Steingut die erste Wahl, da sie Wärme sanft und träge abgibt. Für Induktionsherde oder Allround-Nutzung (auch Fleischfondue) empfiehlt sich emailliertes Gusseisen."
            }
          },
          {
            "@type": "Question",
            "name": "Wie viel Gramm Käse rechnet man pro Person?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Die Schweizer Faustformel besagt: 200 g geriebene Käsemischung (z. B. 100 g Gruyère AOP und 100 g Vacherin Fribourgeois AOP) sowie ca. 200 g Brot und 100 ml trockener Weißwein pro erwachsener Person."
            }
          },
          {
            "@type": "Question",
            "name": "Funktioniert jedes Caquelon auf einem Induktionsherd?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nein. Reine Keramik- oder Ton-Caquelons sind nicht ferromagnetisch und funktionieren auf Induktion nur mit einer speziellen Induktions-Adapterplatte. Wer direkt auf Induktion erhitzen möchte, benötigt ein Caquelon aus Gusseisen oder mit integriertem Edelstahl-Magnetboden."
            }
          }
        ]
      },
      {
        "@type": "Recipe",
        "@id": "https://caquelon.de/#recipe-moitie-moitie",
        "name": "Original Schweizer Käsefondue (Moitié-Moitié)",
        "description": "Das klassische Schweizer Nationalgericht aus 50% Le Gruyère AOP und 50% Vacherin Fribourgeois AOP.",
        "recipeCategory": "Hauptgericht",
        "recipeCuisine": "Schweizer Küche",
        "prepTime": "PT10M",
        "cookTime": "PT15M",
        "totalTime": "PT25M",
        "recipeYield": "4 Portionen",
        "recipeIngredient": [
          "400 g Le Gruyère AOP (gerieben)",
          "400 g Vacherin Fribourgeois AOP (gerieben)",
          "300 ml trockener Schweizer Weißwein (z. B. Fendant / Chasselas)",
          "1 Knoblauchzehe (halbiert)",
          "1 EL Speisestärke (Maizena)",
          "1 TL frischer Zitronensaft",
          "1 kleines Glas Kirschwasser (ca. 20 ml)",
          "Frisch geriebene Muskatnuss und schwarzer Pfeffer",
          "800 g knuspriges Weißbrot oder Baguette (gewürfelt)"
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="Caquelon.de – Der Fondue- & Fonduetopf Ratgeber 2026"
        description="Fonduetopf Kaufberatung, Schweizer Käsefondue-Rezepte & Mengenkalkulation. Entdecke die besten Caquelons aus Keramik & Gusseisen."
        keywords="Caquelon, Fonduetopf kaufen, Schweizer Käsefondue, Fondue Rechaud, Fondue Set Induktion, Caquelon Test 2026"
        canonical="https://caquelon.de/"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-[#faf8f5] text-stone-900">
        {/* Editorial Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-stone-900 via-stone-900 to-red-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Der perfekte <span className="text-amber-400">Fondue-Abend</span> beginnt mit dem richtigen Caquelon
              </h1>

              <p className="text-lg md:text-xl text-stone-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
                Vergesse angebrannte Käsemassen und rauchende Öltöpfe. Wir testen die besten Fonduetöpfe für Induktion, Ceran und Rechaud – inkl. erprobter Rezepte & Mengenkalkulator.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                <CTAButton href={createPageUrl('CaquelonKaufen')} size="large" variant="secondary">
                  Top 3 Caquelons im Test *
                </CTAButton>
                <CTAButton href={createPageUrl('FondueRezepte')} size="large" variant="outlineLight">
                  Alle 26 Rezepte durchsuchen &rarr;
                </CTAButton>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs text-stone-300">
                <div className="flex items-center justify-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Unabhängige Tests</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>26 Erprobte Rezepte</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>Mengenrechner integriert</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>100% DSGVO-Konform</span>
                </div>
              </div>

              {/* Position-0 Featured Snippet Definition Box */}
              <div className="mt-8 text-left bg-stone-800/80 border-l-4 border-amber-400 p-5 rounded-r-2xl border border-white/10 shadow-lg">
                <div className="flex items-center gap-2 mb-2 text-xs font-extrabold uppercase tracking-wider text-amber-300">
                  <Utensils className="w-4 h-4 text-amber-400" />
                  <span>Definition &amp; Warenkunde (Position-0)</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-medium">
                  Ein <strong className="text-white font-bold">Caquelon</strong> (französisch für Kasserolle) ist ein traditioneller Fonduetopf mit Stielgriff aus hitzebeständigem Steingut, glasierter Keramik oder Gusseisen, der speziell für die Zubereitung von Schweizer Käsefondue konzipiert ist. Durch die dicken Wände leitet und speichert das Material die Wärme besonders schonend und gleichmäßig, sodass der geschmolzene Käse bei niedriger Flamme auf dem Rechaud cremig bleibt, ohne anzubrennen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Fondue-Finder Quiz */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
          <FondueFinderQuiz />
        </section>

        {/* Category Shortcut Grid */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
              Entdecke deine Welt des Fondues
            </h2>
            <p className="text-stone-600 text-sm mt-2">
              Wähle deine bevorzugte Art des Fondues für spezifische Rezepte und die beste Topf-Empfehlung.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <a href={createPageUrl('SchweizerKaeseFondue')} className="group bg-white rounded-3xl p-6 border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-14 h-14 bg-amber-100 text-amber-900 rounded-2xl flex items-center justify-center font-bold text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                🧀
              </div>
              <h3 className="font-extrabold text-stone-900 text-base group-hover:text-red-900 transition">Käsefondue</h3>
              <p className="text-xs text-stone-500 mt-1">Moitié-Moitié, Bierkäse & ohne Alkohol</p>
            </a>

            <a href={createPageUrl('FondueBourguignonne')} className="group bg-white rounded-3xl p-6 border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-14 h-14 bg-red-100 text-red-900 rounded-2xl flex items-center justify-center font-bold text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                🥩
              </div>
              <h3 className="font-extrabold text-stone-900 text-base group-hover:text-red-900 transition">Fleischfondue</h3>
              <p className="text-xs text-stone-500 mt-1">Bourguignonne in Öl & Brühe (Chinoise)</p>
            </a>

            <a href={createPageUrl('VeganesKaeseFondue')} className="group bg-white rounded-3xl p-6 border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-900 rounded-2xl flex items-center justify-center font-bold text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                🌱
              </div>
              <h3 className="font-extrabold text-stone-900 text-base group-hover:text-red-900 transition">Veganes Fondue</h3>
              <p className="text-xs text-stone-500 mt-1">Cashew-Käse & würziger Gemüse-Sud</p>
            </a>

            <a href={createPageUrl('SchokoladenFondue')} className="group bg-white rounded-3xl p-6 border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-14 h-14 bg-amber-900/10 text-amber-900 rounded-2xl flex items-center justify-center font-bold text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                🍫
              </div>
              <h3 className="font-extrabold text-stone-900 text-base group-hover:text-red-900 transition">Dessert Fondue</h3>
              <p className="text-xs text-stone-500 mt-1">Pistazie, Toblerone & Nutella</p>
            </a>
          </div>
        </section>

        {/* Product Comparison Section */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductComparisonTable />
        </section>

        {/* Gourmet Sommelier & Pairing Guide */}
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GourmetPairingGuide />
        </section>

        {/* Featured Recipes Section */}
        <section className="py-16 bg-white border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
              <div>
                <span className="text-xs font-bold text-red-900 uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full">Beliebteste Klassiker</span>
                <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight mt-3">
                  Erprobte Rezepte für dein Caquelon
                </h2>
              </div>
              <a href={createPageUrl('FondueRezepte')} className="mt-4 md:mt-0 text-sm font-bold text-red-900 hover:text-red-700 underline flex items-center gap-1">
                <span>Alle 26 Rezepte ansehen</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredRecipes.map((recipe, index) => (
                <RecipeCard key={index} {...recipe} />
              ))}
            </div>
          </div>
        </section>

        {/* Embed Code Widget Box for Food Blogs */}
        <section className="py-12 bg-stone-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-2">
                    <Code2 className="w-3.5 h-3.5" />
                    Kostenloses Widget für Food-Blogs &amp; Kochportale
                  </div>
                  <h3 className="text-xl font-black text-white">Käsefondue-Mengenrechner auf deiner Website einbinden</h3>
                  <p className="text-xs sm:text-sm text-stone-400 mt-1">
                    Biete deinen Lesern eine automatische Mengenberechnung für Schweizer Käsefondue &amp; Raclette per sauberem iFrame.
                  </p>
                </div>
                <button
                  onClick={copyEmbedCode}
                  className="self-start md:self-center px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs flex items-center gap-2 transition-colors shadow-sm cursor-pointer shrink-0"
                >
                  {copiedEmbed ? <Check className="w-4 h-4 text-emerald-900" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmbed ? 'Code kopiert!' : 'Embed-Code kopieren'}</span>
                </button>
              </div>
              <div className="bg-stone-900 rounded-lg p-3 text-xs font-mono text-stone-300 overflow-x-auto border border-stone-800">
                <code>{`<iframe src="https://caquelon.de/rechner-embed" width="100%" height="650" style="border:none; border-radius:24px;" title="Käsefondue Mengenrechner"></iframe>\n<p style="font-size:12px; color:#78716c; text-align:center;">Bereitgestellt von <a href="https://caquelon.de" target="_blank" rel="noopener">caquelon.de</a></p>`}</code>
              </div>
            </div>
          </div>
        </section>

        {/* E-E-A-T Editorial Trust Box */}
        <section className="py-12 bg-[#fbf9f6] border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4 border-b border-stone-200">
                <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-900 flex items-center justify-center font-black text-lg shrink-0">
                  🫕
                </div>
                <div>
                  <h4 className="text-base font-bold text-stone-900">Fachredaktion caquelon.de</h4>
                  <p className="text-xs text-stone-500">Stand: September 2026 • Schweizer Kulinarik, AOP-Käsekunde &amp; Materialtests</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-600">
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-stone-900 mb-1">
                    <Utensils className="w-4 h-4 text-red-900" />
                    <span>AOP Schweizer Standards</span>
                  </div>
                  <p>Authentische Rezepturen basierend auf den Schweizer Originalen Le Gruyère AOP und Vacherin Fribourgeois AOP.</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-stone-900 mb-1">
                    <ShieldCheck className="w-4 h-4 text-red-900" />
                    <span>Unabhängige Materialprüfungen</span>
                  </div>
                  <p>Unabhängiges Fachportal nach § 5 DDG ohne Verkaufsbindung an einzelne Topfhersteller. Reale thermische Tests auf Induktion &amp; Rechaud.</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-stone-900 mb-1">
                    <Award className="w-4 h-4 text-red-900" />
                    <span>Geprüfte Portionsmengen</span>
                  </div>
                  <p>Praxiserprobte Richtwerte (200 g Käse und 200 g Brot pro Person) für gelingsichere Fondue-Abende ohne Reste oder Mangel.</p>
                </div>
              </div>
            </div>

            {/* Academic & Editorial Citation Box (APA / Harvard Format) */}
            <div className="mt-6 bg-stone-100/90 border border-stone-300/80 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Zitation für Journalisten, Food-Blogger &amp; Fachautoren (APA / Harvard)</span>
                <p className="text-xs sm:text-sm font-mono text-stone-800 mt-1 select-all">
                  caquelon.de Fachredaktion (2026). Caquelon-Kaufberatung &amp; Schweizer Fondue-Mengenlehre. https://caquelon.de/ (Stand: September 2026).
                </p>
              </div>
              <button
                onClick={copyCitationText}
                className="px-3.5 py-2 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-900 font-bold text-xs flex items-center gap-1.5 transition shadow-xs cursor-pointer shrink-0"
              >
                {copiedCitation ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5 text-stone-700" />}
                <span>{copiedCitation ? 'Zitat kopiert!' : 'Zitierlink kopieren'}</span>
              </button>
            </div>
          </div>
        </section>

        {/* Floating Conversion Bar */}
        <FloatingCTABar 
          title="Optimaler Fonduetopf gesucht?"
          subtitle="Top 3 Caquelons aus Keramik & Gusseisen im Test"
          link={createPageUrl('CaquelonKaufen')}
        />
      </div>
    </>
  );
}
