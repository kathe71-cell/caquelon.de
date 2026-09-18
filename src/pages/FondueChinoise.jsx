import React from 'react';
import { Clock, Users, ChefHat, ShieldAlert, Info } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import IngredientCalculator from '../components/IngredientCalculator';
import SEOHead from '../components/SEOHead';
import SocialShare from '../components/SocialShare';

const baseServings = 4;
const ingredients = [
  { name: 'Rinder- oder Kalbfleisch (hauchdünn)', quantity: 400, unit: 'g' },
  { name: 'Hähnchen- oder Putenbrust (hauchdünn)', quantity: 300, unit: 'g' },
  { name: 'Kräftige Rinder- oder Gemüsebrühe', quantity: 1.2, unit: 'Liter' },
  { name: 'Gemüse (z.B. Brokkoli, Karotten, Pilze)', quantity: 'nach Belieben', unit: '' },
  { name: 'Glasnudeln', quantity: 100, unit: 'g' },
  { name: 'Asiatische Saucen & Dips', quantity: 'nach Belieben', unit: '' }
];

const structuredData = {
  "@context": "https://schema.org/",
  "@type": "Recipe",
  "name": "Fondue Chinoise (Brühe-Fondue)",
  "image": [
    "https://www.caquelon.de/og-image.svg"
  ],
  "author": {
    "@type": "Organization",
    "name": "Caquelon.de"
  },
  "datePublished": "2024-08-25",
  "description": "Klassisches Fondue Chinoise mit siedender Brühe. Fleisch- und Gemüsezubereitung mit wichtigen BfR-Gartipps für Geflügel.",
  "recipeCuisine": "Asiatisch / Schweizer Festtagstradition",
  "prepTime": "PT20M",
  "cookTime": "PT15M",
  "totalTime": "PT35M",
  "keywords": "Fondue Chinoise, Brühe-Fondue, Fleischfondue, gesundes Fondue",
  "recipeYield": "4",
  "recipeCategory": "Fleischfondue",
  "recipeIngredient": ingredients.map(i => `${i.quantity} ${i.unit} ${i.name}`),
  "recipeInstructions": [
    {
      "@type": "HowToStep",
      "text": "Das Fleisch hauchdünn gegen die Faser schneiden (Tipp: 30 Minuten leicht anfrieren erleichtert das feine Schneiden)."
    },
    {
      "@type": "HowToStep",
      "text": "Die kräftig gewürzte Brühe im Topf auf dem Herd aufkochen und sprudelnd heiß halten."
    },
    {
      "@type": "HowToStep",
      "text": "Den Fonduetopf auf das Rechaud am Tisch stellen. Fleisch- und Gemüsestücke in feinen Drahtsiebkörbchen in die siedende Brühe tauchen."
    },
    {
      "@type": "HowToStep",
      "text": "Rindfleisch benötigt in der siedenden Brühe ca. 1–2 Minuten. Geflügelstücke (Hähnchen, Pute) müssen stets vollständig durchgegart werden (BfR-Empfehlung: mindestens 70 °C im Kern für mindestens 2 Minuten)."
    }
  ]
};

export default function FondueChinoise() {
  return (
    <>
      <SEOHead
        title="Fondue Chinoise (Brühe-Fondue) Rezept & Anleitung | caquelon.de"
        description="Leichtes Festtags-Fondue mit heißer Brühe. Exakte Mengenkalkulation für Fleisch und Gemüse, Saucenideen und BfR-Gartipps."
        keywords="Fondue Chinoise, Brühe-Fondue, Fleischfondue, Festtagsfondue"
        canonical="https://www.caquelon.de/fonduechinoise"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <section className="py-16 bg-gradient-to-br from-red-950 via-red-900 to-stone-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Fondue Chinoise <span className="text-amber-400">(Brühe-Fondue)</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-8 font-normal">
              Das traditionelle Schweizer Festtagsfondue. Feine Fleischtranchen und knackiges Gemüse sanft in aromatischer Bouillon gegart.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-xs sm:text-sm font-semibold text-stone-200">
              <div className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-full"><Clock className="w-4 h-4 text-amber-400" /><span>25 Minuten</span></div>
              <div className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-full"><Users className="w-4 h-4 text-amber-400" /><span>4 Personen</span></div>
              <div className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-full"><ChefHat className="w-4 h-4 text-amber-400" /><span>Mittel</span></div>
            </div>

            <div className="flex justify-center">
              <SocialShare 
                title="Fondue Chinoise - Das festliche Brühe-Fondue"
                description="Leichtes und festliches Fondue mit aromatischer Brühe statt Öl. Perfekt für gesellige Abende!"
              />
            </div>
          </div>
        </section>

        {/* BfR Hygiene- & Durchgarhinweis */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
          <div className="bg-emerald-50 border-2 border-emerald-300 rounded-3xl p-6 shadow-md text-stone-900">
            <div className="flex items-center gap-2 text-emerald-950 font-black text-sm uppercase tracking-wider mb-2">
              <ShieldAlert className="w-5 h-5 text-emerald-800 shrink-0" />
              <span>Sicherheitshinweis für Geflügel &amp; Fleischhygiene (BfR)</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-xs text-stone-700">
              <div className="bg-white p-3 rounded-2xl border border-emerald-200">
                <strong className="text-emerald-950 block mb-1">🍗 Geflügel vollständig durchgaren</strong>
                <span>
                  Hähnchen- und Putenstreifen müssen in der siedenden Brühe <strong>vollständig durchgegart</strong> werden (Kerntemperatur mind. 70 °C für 2 Minuten). Niemals roh oder glasig verzehren.
                </span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-emerald-200">
                <strong className="text-emerald-950 block mb-1">🥢 Getrennte Siebe &amp; Besteck</strong>
                <span>
                  Für rohes Fleisch am Tisch separate Gabeln oder Zangen verwenden und diese nicht mit gegarten Speisen oder verzehrfertigen Saucen in Kontakt bringen.
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
              title="Brühe-Fondue Mengenrechner"
              category="bruehe"
            />
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200">
              <h2 className="text-2xl font-black text-stone-900 mb-6">Zubereitungsschritte</h2>
              <ol className="space-y-4 text-stone-700 text-sm">
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                  <span>Das Fleisch in hauchdünne Tranchen schneiden. Tipp: Wenn man das Fleisch 30 Minuten vor dem Schneiden ins Gefrierfach legt, gelingen gleichmäßige Papierscheiben.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                  <span>Die Bouillon (mit Ingwer, Kräutern oder Sternanis verfeinert) im Topf auf dem Herd zum Kochen bringen.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                  <span>Den Topf auf das Rechaud am Tisch stellen. Fleisch und Gemüse in kleinen Drahtkörbchen oder mit Fonduegabeln in die kochende Brühe halten.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                  <span>Zum feierlichen Abschluss die Glasnudeln in der eingekochten, aromareichen Fleischbrühe garziehen lassen und als feine Suppe aus Tassen löffeln.</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-red-950 to-stone-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Fonduetöpfe für Brühe &amp; Chinoise</h2>
            <p className="text-stone-300 max-w-xl mx-auto text-sm mb-8">
              Für Chinoise eignen sich Edelstahl- und Gusseisentöpfe mit Siebkörbchen optimal.
            </p>
            <CTAButton href="https://amzn.to/45s2s4M" variant="secondary" size="large">
              Passendes Set mit Siebkörben prüfen *
            </CTAButton>
            <p className="text-xs text-stone-400 mt-3">* Partnerlink / Werbung</p>
          </div>
        </section>
      </div>
    </>
  );
}
