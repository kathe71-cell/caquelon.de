import React, { useState } from 'react';
import { Wine, Utensils, Award, CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import CTAButton from './CTAButton';

const pairingData = [
  {
    id: "classic",
    title: "Moitié-Moitié (50% Gruyère / 50% Vacherin)",
    wine: "Trockener Fendant (Chasselas) aus dem Wallis oder Aigle les Murailles",
    bread: "Knuspriges Baguette oder Sauerteigbrot mit fester Kruste (1-2 Tage alt)",
    side: "Gschwellti (kleine Pellkartoffeln), Cornichons, Silberzwiebeln & Bündnerfleisch",
    tea: "Heißer Schwarztee oder Pfefferminztee (fördert die Verdauung)",
    proTip: "Gegen Ende ein rohes Ei in die verbleibende Käsemasse schlagen und mit Brot auskratzen – die echte 'Grossmutter' (Religieuse).",
    avoid: "Eisgekühlte kohlensäurehaltige Softdrinks direkt zum Käse trinken."
  },
  {
    id: "spicy",
    title: "Appenzeller & Trüffel Spezialmischung",
    wine: "Leichter Pinot Noir aus Bündner Herrschaft oder trockener Riesling",
    bread: "Nussbrot, Walnuss-Baguette oder dunkles Landbrot",
    side: "Birnenspalten, Feigensenf, geröstete Walnüsse & luftgetrockneter Schinken",
    tea: "Warmer Kamillentee oder Kräutertee",
    proTip: "Erst ganz am Ende 1 TL edles schwarzes Trüffelöl unter den fertig geschmolzenen Käse rühren.",
    avoid: "Zu starke Hitze auf dem Rechaud – Trüffelöl verliert sonst sein Aroma."
  },
  {
    id: "bourguignonne",
    title: "Fondue Bourguignonne (Fleisch in Ölbrenner)",
    wine: "Kräftiger Syrah, Cabernet Sauvignon oder bayerisches Weißbier",
    bread: "Frisches Ciabatta, Kräuter-Knoblauch-Brot",
    side: "Homemade Sauce Tartare, Knoblauch-Dip, Cocktail-Sauce & frischer Blattsalat",
    tea: "Grüner Tee mit Zitrone",
    proTip: "Das Fleisch ca. 30 Minuten vor dem Servieren aus dem Kühlschrank nehmen und gut trocken tupfen, um Fettspritzer zu vermeiden.",
    avoid: "Nasses oder gefrorenes Fleisch direkt in das heiße Fett geben."
  }
];

export default function GourmetPairingGuide() {
  const [selectedPairing, setSelectedPairing] = useState(pairingData[0]);

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-stone-200 my-12">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
          <Award className="w-4 h-4 text-amber-700" />
          <span>Gourmet-Harmonie & Sommelier-Tipps</span>
        </div>
        <h3 className="text-2xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
          Der Experten-Guide für <span className="text-red-900">Wein, Brot & Beilagen</span>
        </h3>
        <p className="text-stone-600 text-sm md:text-base mt-2">
          Wähle dein Fondue für die perfekte Sommelier-Empfehlung und Profi-Tricks für den Abend.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {pairingData.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedPairing(item)}
            className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition flex items-center gap-2 ${
              selectedPairing.id === item.id 
                ? 'bg-red-900 text-white shadow-md' 
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
            aria-label={`Wähle Empfehlung für ${item.title}`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{item.title.split('(')[0]}</span>
          </button>
        ))}
      </div>

      {/* Details Grid */}
      <div className="grid md:grid-cols-2 gap-6 bg-stone-50 p-6 md:p-8 rounded-2xl border border-stone-200">
        <div className="space-y-4">
          <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
            <Wine className="w-5 h-5 text-red-900 flex-shrink-0 mt-1" />
            <div>
              <strong className="block text-xs uppercase font-bold text-stone-400">Wein-Empfehlung:</strong>
              <p className="text-sm font-semibold text-stone-900 mt-0.5">{selectedPairing.wine}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
            <Utensils className="w-5 h-5 text-amber-700 flex-shrink-0 mt-1" />
            <div>
              <strong className="block text-xs uppercase font-bold text-stone-400">Das ideale Brot:</strong>
              <p className="text-sm font-semibold text-stone-900 mt-0.5">{selectedPairing.bread}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
            <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <strong className="block text-xs uppercase font-bold text-stone-400">Beilagen & Garnitur:</strong>
              <p className="text-sm text-stone-700 mt-0.5">{selectedPairing.side}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Pro Tip Box */}
          <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-xl text-xs space-y-1">
            <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Profi-Geheimtipp der Schweizer Gastgeber:</span>
            </div>
            <p className="text-emerald-950 font-medium leading-relaxed pt-1">{selectedPairing.proTip}</p>
          </div>

          {/* Avoid Box */}
          <div className="bg-red-50 border border-red-200 p-5 rounded-xl text-xs space-y-1">
            <div className="flex items-center gap-2 font-bold text-red-900 text-sm">
              <XCircle className="w-4 h-4 text-red-700" />
              <span>Häufiger Fehler (Vermeiden!):</span>
            </div>
            <p className="text-red-950 font-medium leading-relaxed pt-1">{selectedPairing.avoid}</p>
          </div>

          <div className="pt-2 text-center">
            <CTAButton href="https://amzn.to/4oVKIMA" size="small" variant="primary" className="w-full text-xs">
              Fondueset & Zubehör vergleichen *
            </CTAButton>
            <span className="text-[10px] text-stone-400 block mt-1.5">* Partnerlink / Unabhängige Empfehlungen</span>
          </div>
        </div>
      </div>
    </div>
  );
}
