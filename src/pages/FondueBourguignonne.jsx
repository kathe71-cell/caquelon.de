import React from 'react';
import { Clock, Users, ChefHat, ShieldAlert, AlertTriangle, Flame } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import IngredientCalculator from '../components/IngredientCalculator';
import SEOHead from '../components/SEOHead';
import SocialShare from '../components/SocialShare';

const baseServings = 4;
const ingredients = [
  { name: 'Rinderfilet / Hüfte, trockengetupft', quantity: 600, unit: 'g' },
  { name: 'Puten- oder Hähnchenbrust (stets durchgaren!)', quantity: 300, unit: 'g' },
  { name: 'Pflanzenöl (hitzebeständig; max. 1/3–1/2 Topffüllung)', quantity: 0.85, unit: 'Liter' },
  { name: 'Rosmarinzweig & Knoblauchzehe', quantity: 2, unit: 'Stück' },
  { name: 'Verschiedene Dips & Saucen', quantity: 'nach Belieben', unit: '' }
];

const structuredData = {
  "@context": "https://schema.org/",
  "@type": "Recipe",
  "name": "Fondue Bourguignonne (Öl-Fondue)",
  "image": [
    "https://caquelon.de/og-image.svg"
  ],
  "author": {
    "@type": "Organization",
    "name": "Caquelon.de"
  },
  "datePublished": "2024-08-25",
  "description": "Klassisches Fleischfondue in heißem Pflanzenöl. Wichtige Hygiene- und Garhinweise nach BfR-Standards für sicheren Genuss.",
  "recipeCuisine": "Französisch",
  "prepTime": "PT20M",
  "cookTime": "PT15M",
  "totalTime": "PT35M",
  "keywords": "Fondue Bourguignonne, Fleischfondue, Öl-Fondue, Fondue Rezept, BfR Hygiene",
  "recipeYield": "4",
  "recipeCategory": "Fleischfondue",
  "recipeIngredient": ingredients.map(i => `${i.quantity} ${i.unit} ${i.name}`),
  "recipeInstructions": [
    {
      "@type": "HowToStep",
      "text": "Das Fleisch in mundgerechte Würfel schneiden und mit Küchenpapier absolut trocken tupfen, um Fettspritzer zu vermeiden."
    },
    {
      "@type": "HowToStep",
      "text": "Das hitzebeständige Öl im Edelstahl- oder Gusseisentopf auf dem Herd auf ca. 175–180 °C erhitzen (Holzlöffeltest: es steigen feine Bläschen auf)."
    },
    {
      "@type": "HowToStep",
      "text": "Den Topf vorsichtig auf das Rechaud am Tisch stellen. Niemals unbeaufsichtigt lassen."
    },
    {
      "@type": "HowToStep",
      "text": "Rindfleisch je nach Vorliebe ca. 1,5 bis 3 Minuten garen. Geflügelfleisch (Hähnchen, Pute) muss aus Infektionsschutzgründen zwingend vollständig durchgegart werden (mindestens 70 °C für 2 Minuten im Kern, Quelle: BfR)."
    }
  ]
};

export default function FondueBourguignonne() {
  return (
    <>
      <SEOHead
        title="Fondue Bourguignonne (Öl-Fondue) Rezept & Sicherheit | caquelon.de"
        description="Das klassische Fleischfondue mit Öl. Rezepte, Fleischmengen pro Person und wichtige BfR-Hygienehinweise für sicheres Garen."
        keywords="Fondue Bourguignonne, Fleischfondue, Öl-Fondue, Fondue Rezept, Fleisch garen"
        canonical="https://caquelon.de/fonduebourguignonne"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-red-950 via-red-900 to-stone-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Fondue Bourguignonne <span className="text-amber-400">(Öl-Fondue)</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-8 font-normal">
              Der Klassiker für Fleischliebhaber. Knusprig gegartes Rind, Schwein und Geflügel mit passenden Saucen und geprüften Sicherheitshinweisen.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-xs sm:text-sm font-semibold text-stone-200">
              <div className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-full"><Clock className="w-4 h-4 text-amber-400" /><span>30 Minuten</span></div>
              <div className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-full"><Users className="w-4 h-4 text-amber-400" /><span>4 Personen</span></div>
              <div className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-full"><ChefHat className="w-4 h-4 text-amber-400" /><span>Mittel</span></div>
            </div>

            <div className="flex justify-center">
              <SocialShare 
                title="Fondue Bourguignonne - Das klassische Fleischfondue mit Öl"
                description="Das perfekte Rezept für Fleischfondue mit praxiserprobten Hygiene- und Sicherheitstipps!"
              />
            </div>
          </div>
        </section>

        {/* Wichtige BfR-Hygiene- & Heißöl-Warnbox */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
          <div className="bg-red-50 border-2 border-red-300 rounded-3xl p-6 shadow-md text-stone-900">
            <div className="flex items-center gap-2 text-red-950 font-black text-sm uppercase tracking-wider mb-3">
              <ShieldAlert className="w-5 h-5 text-red-800 shrink-0" />
              <span>Verbraucherschutz &amp; Hygiene-Standards (BfR &amp; Küchenpraxis)</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-xs text-stone-700">
              <div className="bg-white p-3.5 rounded-2xl border border-red-200">
                <strong className="text-red-950 block mb-1">🍗 Geflügel immer durchgaren</strong>
                <span>
                  Geflügel (Hähnchen, Pute) darf <strong>niemals rosa oder halbroh</strong> verzehrt werden. Zur Vermeidung von Campylobacter- oder Salmonellen-Infektionen muss das Fleisch im Kern mindestens <strong>70 °C für 2 Minuten</strong> erreichen (Quelle: Bundesinstitut für Risikobewertung, BfR).
                </span>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-red-200">
                <strong className="text-red-950 block mb-1">🍴 Strikte Küchentrennung</strong>
                <span>
                  Rohes Fleisch und dessen austretender Saft dürfen niemals mit Beilagen, Saucen oder Brot in Berührung kommen. Am Tisch für rohes Fleisch separates Besteck oder Schneidebretter nutzen.
                </span>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-red-200">
                <strong className="text-red-950 block mb-1">🔥 Heißöl &amp; Füllhöhe</strong>
                <span>
                  Den Topf <strong>maximal zu 1/3 bis 1/2</strong> mit Öl füllen (Überschäumungsgefahr beim Eintauchen). Fleisch vorher trocken tupfen. <strong>Niemals Wasser auf brennendes Öl gießen</strong> (Explosionsgefahr – Fettbrand mit Deckel oder Löschdecke ersticken).
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <IngredientCalculator 
              baseServings={baseServings} 
              ingredients={ingredients} 
              title="Fleischfondue Mengenrechner"
              category="fleisch-oel"
            />
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200">
              <h2 className="text-2xl font-black text-stone-900 mb-6">Zubereitungsschritte</h2>
              <ol className="space-y-4 text-stone-700 text-sm">
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                  <span>Das Fleisch in mundgerechte Würfel (ca. 2–3 cm) schneiden und mit Küchenpapier gründlich trocken tupfen (verhindert gefährliche Ölspritzer).</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                  <span>Das Pflanzenöl (ca. 0,75–0,9 l bei einem 1,8-L-Topf; Herstellerfüllgrenze von maximal 1/2 Topfhöhe strikt beachten!) im Fondue-Topf auf dem Herd auf ca. 175–180 °C erhitzen. Holzstäbchen-Test: Bilden sich feine Bläschen, ist das Fett heiß genug.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                  <span>Für dezentes Aroma den Rosmarinzweig und eine angedrückte Knoblauchzehe kurz ins heiße Öl halten.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                  <span>Den Topf vorsichtig auf das Rechaud am Tisch stellen. Rindfleisch nach persönlichem Garwunsch (1,5–3 Min.) garen. <strong>Geflügelfleisch zwingend vollständig durchgaren!</strong></span>
                </li>
              </ol>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gradient-to-br from-red-950 to-stone-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Passendes Set für Fleischfondue</h2>
            <p className="text-stone-300 max-w-xl mx-auto text-sm mb-8">
              Für heißes Öl eignen sich ausschließlich Edelstahl oder emailliertes Gusseisen mit Spritzschutz. Keramik-Caquelons sind für Fettfondue ungeeignet.
            </p>
            <CTAButton href="https://amzn.to/3JoYc39" variant="secondary" size="large">
              Passendes Edelstahl-Fondueset ansehen *
            </CTAButton>
            <p className="text-xs text-stone-400 mt-3">* Partnerlink / Werbung</p>
          </div>
        </section>
      </div>
    </>
  );
}
