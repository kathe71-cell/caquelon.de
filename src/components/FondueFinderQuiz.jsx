import React, { useState } from 'react';
import { Flame, Users, Sparkles, CheckCircle2, ArrowRight, Star, ShoppingCart } from 'lucide-react';
import CTAButton from './CTAButton';
import { createPageUrl } from '@/utils';

const quizData = [
  {
    id: "kaese-induktion",
    type: "Käsefondue (Induktion)",
    match: "Kuhn Rikon 'Zermatt' Induktions-Caquelon",
    material: "Feuerfeste Ton-Keramik mit Induktionsboden",
    why: "Speichert die Hitze optimal, brennt nicht an und funktioniert direkt auf allen Induktionskochfeldern.",
    price: "ca. 89 - 110 €",
    rating: "4.9 / 5.0 (Bestseller)",
    image: "🧀",
    link: "https://amzn.to/4oVKIMA",
    recipeLink: createPageUrl("SchweizerKaeseFondue"),
    recipeTitle: "Original Schweizer Moitié-Moitié"
  },
  {
    id: "kaese-klassisch",
    type: "Käsefondue (Klassisch / Gas / Ceran)",
    match: "Le Creuset Gusseisen-Caquelon 22cm",
    material: "Emailliertes Gusseisen",
    why: "Extrem langlebiger Klassiker. Gusseisen sorgt für die perfekte knusprige 'Grossmutter'-Käsekruste am Boden.",
    price: "ca. 149 - 180 €",
    rating: "4.8 / 5.0 (Premium)",
    image: "🫕",
    link: "https://amzn.to/4oVKIMA",
    recipeLink: createPageUrl("SchweizerKaeseFondue"),
    recipeTitle: "Schweizer Käsefondue Rezept"
  },
  {
    id: "fleisch-oel",
    type: "Fleischfondue in Öl (Bourguignonne)",
    match: "Spring Edelstahl-Fondueset mit Spritzschutz",
    material: "Hochglanz-Edelstahl 18/10",
    why: "Hitze-unempfindlich für sprudelnd heißes Öl. Inklusive Spritzschutz-Ring gegen Ölspritzer am Tisch.",
    price: "ca. 99 - 129 €",
    rating: "4.7 / 5.0 (Testsieger Öl)",
    image: "🥩",
    link: "https://amzn.to/464y1aB",
    recipeLink: createPageUrl("FondueBourguignonne"),
    recipeTitle: "Fondue Bourguignonne Rezept"
  },
  {
    id: "bruehe-chinoise",
    type: "Fleisch & Gemüse in Brühe (Chinoise / Asia)",
    match: "Edelstahl-Fondueset mit 6 Siebkörbchen",
    material: "Edelstahl mit Siebkörben",
    why: "Kalorienarm und gesund. Die Edelstahlsiebe ermöglichen einfaches Herausfischen von Fleisch & Gemüse.",
    price: "ca. 69 - 89 €",
    rating: "4.7 / 5.0 (Preis-Leistung)",
    image: "🥦",
    link: "https://amzn.to/45s2s4M",
    recipeLink: createPageUrl("FondueChinoise"),
    recipeTitle: "Fondue Chinoise Rezept"
  },
  {
    id: "dessert-schoko",
    type: "Schokoladenfondue & Desserts",
    match: "Keramik-Schokofondue mit Rechaud-Teelicht",
    material: "Feine Keramik mit Teelicht-Brenner",
    why: "Sanfte Hitze durch ein Teelicht verhindert, dass die Schokolade verbrennt oder graue Schlieren zieht.",
    price: "ca. 24 - 39 €",
    rating: "4.9 / 5.0 (Geschenk-Tipp)",
    image: "🍫",
    link: "https://amzn.to/4c4GZLx",
    recipeLink: createPageUrl("SchokoladenFondue"),
    recipeTitle: "Schokofondue Rezept"
  }
];

export default function FondueFinderQuiz() {
  const [fondueType, setFondueType] = useState("kaese");
  const [stovetop, setStovetop] = useState("induktion");
  const [people, setPeople] = useState("4");

  const getResult = () => {
    if (fondueType === "schoko") return quizData[4];
    if (fondueType === "oel") return quizData[2];
    if (fondueType === "bruehe") return quizData[3];
    if (stovetop === "induktion") return quizData[0];
    return quizData[1];
  };

  const result = getResult();

  return (
    <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-red-950 text-white rounded-3xl p-6 md:p-10 shadow-2xl border border-stone-800 my-10">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 rounded-full text-amber-300 text-xs font-bold uppercase mb-4">
          <Sparkles className="w-4 h-4" />
          <span>Interaktiver Berater 2026</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
          Welcher <span className="text-amber-400">Fonduetopf</span> passt zu deinem Abend?
        </h2>
        <p className="text-stone-300 text-sm md:text-base mt-2">
          Wähle deine Präferenzen und finde in 3 Klicks das perfekte Caquelon & Rezept.
        </p>
      </div>

      {/* Quiz Controls */}
      <div className="grid md:grid-cols-3 gap-6 mb-8 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
        {/* Step 1: Fondue-Art */}
        <div>
          <label className="block text-xs font-extrabold uppercase text-amber-400 mb-2 flex items-center gap-1.5">
            <Flame className="w-4 h-4" /> 1. Welches Fondue planst du?
          </label>
          <select 
            value={fondueType} 
            onChange={(e) => setFondueType(e.target.value)}
            className="w-full bg-stone-800 border border-stone-700 text-white text-sm rounded-xl p-3 focus:ring-2 focus:ring-amber-400 outline-none"
          >
            <option value="kaese">🧀 Schweizer Käsefondue</option>
            <option value="oel">🥩 Fleischfondue in Öl (Bourguignonne)</option>
            <option value="bruehe">🥦 Brühe-Fondue (Chinoise / Asia)</option>
            <option value="schoko">🍫 Schokoladenfondue</option>
          </select>
        </div>

        {/* Step 2: Herd-Art */}
        <div>
          <label className="block text-xs font-extrabold uppercase text-amber-400 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> 2. Welchen Herd nutzt du?
          </label>
          <select 
            value={stovetop} 
            onChange={(e) => setStovetop(e.target.value)}
            disabled={fondueType === "schoko"}
            className="w-full bg-stone-800 border border-stone-700 text-white text-sm rounded-xl p-3 focus:ring-2 focus:ring-amber-400 outline-none disabled:opacity-50"
          >
            <option value="induktion">Induktionskochfeld</option>
            <option value="ceran">Ceran / Elektro</option>
            <option value="gas">Gasherd</option>
            <option value="rechaud">Rechaud / Brenner pur</option>
          </select>
        </div>

        {/* Step 3: Personen */}
        <div>
          <label className="block text-xs font-extrabold uppercase text-amber-400 mb-2 flex items-center gap-1.5">
            <Users className="w-4 h-4" /> 3. Wie viele Personen?
          </label>
          <select 
            value={people} 
            onChange={(e) => setPeople(e.target.value)}
            className="w-full bg-stone-800 border border-stone-700 text-white text-sm rounded-xl p-3 focus:ring-2 focus:ring-amber-400 outline-none"
          >
            <option value="2">2 Personen (Romantisch)</option>
            <option value="4">4 - 6 Personen (Familie & Freunde)</option>
            <option value="8">8+ Personen (Große Runde)</option>
          </select>
        </div>
      </div>

      {/* Result Card */}
      <div className="bg-white text-stone-900 rounded-2xl p-6 md:p-8 shadow-2xl border border-amber-300 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-4xl shadow-inner flex-shrink-0">
            {result.image}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-red-900 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
                Perfektes Match
              </span>
              <span className="flex items-center gap-1 text-amber-600 text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> {result.rating}
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-stone-900">{result.match}</h3>
            <p className="text-xs text-stone-600 font-semibold mt-0.5">{result.material} • {result.price}</p>
            <p className="text-xs text-stone-700 mt-2 max-w-xl leading-relaxed">{result.why}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto flex-shrink-0">
          <CTAButton href={result.link} size="default" variant="primary" className="w-full text-center">
            <ShoppingCart className="w-4 h-4 mr-2" /> Preis bei Amazon prüfen *
          </CTAButton>
          <a 
            href={result.recipeLink}
            className="text-center text-xs font-bold text-red-900 hover:text-red-700 underline flex items-center justify-center gap-1 py-1"
          >
            <span>Passendes Rezept ({result.recipeTitle})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
