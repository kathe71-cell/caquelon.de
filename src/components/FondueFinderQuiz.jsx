import React, { useState } from 'react';
import { Flame, Users, Sparkles, CheckCircle2, ArrowRight, ShieldAlert, Info, ExternalLink } from 'lucide-react';
import CTAButton from './CTAButton';
import { createPageUrl } from '@/utils';
import { getRecommendedPot } from '../data/products';

export default function FondueFinderQuiz() {
  const [fondueType, setFondueType] = useState("kaese");
  const [stovetop, setStovetop] = useState("induktion");
  const [people, setPeople] = useState("4");

  const recommendation = getRecommendedPot({ fondueType, stovetop, people });
  const product = recommendation.product;

  const getRecipeDetails = () => {
    if (fondueType === "schoko") {
      return {
        url: createPageUrl("SchokoladenFondue"),
        title: "Klassisches Schokoladenfondue Rezept"
      };
    }
    if (fondueType === "oel") {
      return {
        url: createPageUrl("FondueBourguignonne"),
        title: "Fondue Bourguignonne (Öl-Fondue) Rezept"
      };
    }
    if (fondueType === "bruehe") {
      return {
        url: createPageUrl("FondueChinoise"),
        title: "Fondue Chinoise (Brühe-Fondue) Rezept"
      };
    }
    return {
      url: createPageUrl("SchweizerKaeseFondue"),
      title: "Original Schweizer Käsefondue (Moitié-Moitié)"
    };
  };

  const recipe = getRecipeDetails();

  return (
    <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-red-950 text-white rounded-3xl p-6 md:p-10 shadow-2xl border border-stone-800 my-10">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 rounded-full text-amber-300 text-xs font-bold uppercase mb-4">
          <Sparkles className="w-4 h-4" />
          <span>Interaktiver Topf- &amp; Materialberater</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
          Welcher <span className="text-amber-400">Fonduetopf</span> passt zu deinen Plänen?
        </h2>
        <p className="text-stone-300 text-sm md:text-base mt-2">
          Wähle Fondue-Art, Herd und Gästezahl für eine fundierte Empfehlung nach Materialphysik und Sicherheit.
        </p>
      </div>

      {/* 3-Faktor Quiz Controls */}
      <div className="grid md:grid-cols-3 gap-6 mb-8 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
        {/* Faktor 1: Fondue-Art */}
        <div>
          <label className="block text-xs font-extrabold uppercase text-amber-400 mb-2 flex items-center gap-1.5">
            <Flame className="w-4 h-4" /> 1. Fondue-Art
          </label>
          <select 
            value={fondueType} 
            onChange={(e) => setFondueType(e.target.value)}
            className="w-full bg-stone-800 border border-stone-700 text-white text-sm rounded-xl p-3 focus:ring-2 focus:ring-amber-400 outline-none cursor-pointer"
          >
            <option value="kaese">🧀 Schweizer Käsefondue</option>
            <option value="oel">🥩 Fleischfondue in Öl (Bourguignonne)</option>
            <option value="bruehe">🥦 Brühe-Fondue (Chinoise / Asia)</option>
            <option value="schoko">🍫 Schokoladenfondue</option>
          </select>
        </div>

        {/* Faktor 2: Herdart */}
        <div>
          <label className="block text-xs font-extrabold uppercase text-amber-400 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> 2. Herd-Art in der Küche
          </label>
          <select 
            value={stovetop} 
            onChange={(e) => setStovetop(e.target.value)}
            disabled={fondueType === "schoko"}
            className="w-full bg-stone-800 border border-stone-700 text-white text-sm rounded-xl p-3 focus:ring-2 focus:ring-amber-400 outline-none disabled:opacity-50 cursor-pointer"
          >
            <option value="induktion">Induktionskochfeld</option>
            <option value="ceran">Ceran / Glaskeramik / Elektro</option>
            <option value="gas">Gasherd</option>
            <option value="rechaud">Rechaud am Tisch / Ofen</option>
          </select>
        </div>

        {/* Faktor 3: Personenzahl */}
        <div>
          <label className="block text-xs font-extrabold uppercase text-amber-400 mb-2 flex items-center gap-1.5">
            <Users className="w-4 h-4" /> 3. Geplante Personenzahl
          </label>
          <select 
            value={people} 
            onChange={(e) => setPeople(e.target.value)}
            className="w-full bg-stone-800 border border-stone-700 text-white text-sm rounded-xl p-3 focus:ring-2 focus:ring-amber-400 outline-none cursor-pointer"
          >
            <option value="2">2 Personen (Gemütlich zu zweit)</option>
            <option value="4">4 Personen (Klassische Runde)</option>
            <option value="6">5 - 6 Personen (Große Runde)</option>
            <option value="8">7 - 8 Personen (Große Runde / Festtag)</option>
            <option value="12">9 - 12 Personen (Große Party)</option>
          </select>
        </div>
      </div>

      {/* Dynamisches Ergebnis-Panel */}
      <div className="bg-stone-800/90 border border-stone-700 rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-stone-700">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-xs font-extrabold px-3 py-1 rounded-full uppercase mb-2">
              Passende Empfehlung
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              Material: <strong className="text-amber-300">{product.material}</strong> • Fassungsvermögen: <strong>{product.capacityLiters} Liter</strong>
            </p>
          </div>

          <div className="text-left lg:text-right shrink-0">
            <span className="text-xs text-stone-400 block font-medium">Richtpreis im Handel:</span>
            <span className="text-lg sm:text-xl font-mono font-bold text-amber-400">{product.priceRange}</span>
          </div>
        </div>

        {/* Rationale & Safety Warnings */}
        <div className="py-5 space-y-3.5 text-xs sm:text-sm text-stone-300 leading-relaxed">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <p>{recommendation.rationale}</p>
          </div>

          {recommendation.safetyAdvice && (
            <div className="flex items-start gap-2.5 bg-amber-500/10 border border-amber-500/30 p-3.5 rounded-xl text-amber-200 text-xs">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p>{recommendation.safetyAdvice}</p>
            </div>
          )}

          {/* Mehr-Topf-Hinweis für Gruppen ab 7 Personen */}
          {parseInt(people, 10) >= 7 && (
            <div className="flex items-start gap-2.5 bg-red-950/70 border border-red-800/80 p-3.5 rounded-xl text-red-200 text-xs font-medium">
              <Info className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div>
                <strong>Kapazitätsempfehlung für {people} Personen:</strong>
                <p className="mt-0.5">{recommendation.groupRecommendation.note}</p>
              </div>
            </div>
          )}
        </div>

        {/* Action CTAs */}
        <div className="pt-4 border-t border-stone-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href={recipe.url}
            className="text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 underline flex items-center gap-1.5 order-2 sm:order-1"
          >
            <span>Passendes Rezept ansehen: {recipe.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <div className="w-full sm:w-auto order-1 sm:order-2">
            <CTAButton
              href={product.affiliateLink}
              variant="secondary"
              size="medium"
              className="w-full sm:w-auto flex items-center justify-center gap-1.5"
            >
              <span>Verfügbarkeit bei Amazon prüfen *</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </CTAButton>
            <p className="text-[10px] text-stone-400 text-center sm:text-right mt-1">
              * Werbelink / Partnerlink
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
