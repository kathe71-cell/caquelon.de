import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, ArrowRight, Utensils, Flame, Sparkles, BookOpen } from 'lucide-react';

const CAQUELON_SEARCH_INDEX = [
  // Hubs & Hauptkategorien
  { id: 'hub-kaese', title: 'Käsefondue Rezepte & Sorten', subtitle: 'Moitié-Moitié, Appenzeller, Gruyère & alkoholfreie Varianten', url: '/fondue-kaese', type: 'kaese', badge: 'Themen-Hub' },
  { id: 'hub-fleisch', title: 'Fleisch- & Chinoise-Fondue', subtitle: 'Fondue Chinoise, Bourguignonne & Bacchus mit Dips & Beilagen', url: '/fondue-chinoise', type: 'fleisch', badge: 'Themen-Hub' },
  { id: 'hub-schoko', title: 'Schokoladenfondue & Süsse Rezepte', subtitle: 'Toblerone-, Nutella-, Karamell- & Weisse Schokoladenfondues', url: '/schokoladen-fondue', type: 'schoko', badge: 'Themen-Hub' },
  { id: 'hub-vegan', title: 'Veganes Fondue & Pflanzliche Alternativen', subtitle: 'Käsefreie Mischungen auf Cashew- & Hefeflockenbasis', url: '/veganes-fondue', type: 'vegan', badge: 'Themen-Hub' },
  
  // Kaufberater & Materialien
  { id: 'mat-kaufen', title: 'Caquelon Kaufen & Eignungsmatrix', subtitle: 'Gusseisen, Keramik & Edelstahl im Eignungsvergleich für Induktion & Rechaud', url: '/caquelon-kaufen', type: 'material', badge: 'Materialvergleich' },
  { id: 'mat-zubehoer', title: 'Fondue-Zubehör & Brennpaste', subtitle: 'Rechauds, Sicherheitsbrennpaste & Spezialgabeln', url: '/fondue-zubehoer', type: 'material', badge: 'Zubehör' },
  { id: 'mat-abend', title: 'Fondue-Abend richtig planen', subtitle: 'Mengenrechner, Vorbereitung & Gastgeber-Tipps', url: '/fondue-abend-planen', type: 'ratgeber', badge: 'Ratgeber' },

  // Einzelrezepte
  { id: 'rec-moitie', title: 'Moitié-Moitié (Der Schweizer Klassiker)', subtitle: '50% Gruyère AOP & 50% Vacherin Fribourgeois AOP mit Knoblauch & Weißwein', url: '/moitie-moitie', type: 'kaese', badge: 'Käsefondue' },
  { id: 'rec-schweizer', title: 'Schweizer Käsefondue Original', subtitle: 'Traditionelle Zubereitung mit Kirschwasser & Muskat', url: '/schweizer-kaese-fondue', type: 'kaese', badge: 'Käsefondue' },
  { id: 'rec-bier', title: 'Bierkäsefondue (Würzig & Dunkelbier)', subtitle: 'Kräftiges Fondue mit würzigem Bergkäse & Malzbier', url: '/bierkaese-fondue', type: 'kaese', badge: 'Käsefondue' },
  { id: 'rec-chinoise', title: 'Fondue Chinoise (Brühenfondue)', subtitle: 'Zartes Rinder- & Putenfleisch in aromatischer Rinderbrühe', url: '/fondue-chinoise', type: 'fleisch', badge: 'Fleischfondue' },
  { id: 'rec-bourguignonne', title: 'Fondue Bourguignonne (Ölfondue)', subtitle: 'Klassisches Fettfondue mit Rinderfilet in pflanzlichem Frittieröl', url: '/fondue-bourguignonne', type: 'fleisch', badge: 'Fleischfondue' },
  { id: 'rec-toblerone', title: 'Toblerone-Schokoladenfondue', subtitle: 'Cremiger Dessert-Traum mit Honig-Mandel-Nougat', url: '/toblerone-fondue', type: 'schoko', badge: 'Schokofondue' },
  { id: 'rec-nutella', title: 'Nutella-Fondue (Schnelles Dessert)', subtitle: 'Kinderleichte Zubereitung mit Sahne & frischen Früchten', url: '/nutella-fondue', type: 'schoko', badge: 'Schokofondue' },
  { id: 'rec-karamell', title: 'Karamell-Fondue mit Meersalz', subtitle: 'Fleur de Sel Karamellschmelze für Erdbeeren & Bananen', url: '/karamell-fondue', type: 'schoko', badge: 'Schokofondue' },
  { id: 'rec-raclette', title: 'Raclette-Ratgeber & Pfännchen-Ideen', subtitle: 'Käsesorten, Garzeiten & Zutaten-Mengen pro Person', url: '/raclette', type: 'ratgeber', badge: 'Raclette' }
];

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else window.dispatchEvent(new CustomEvent('toggle-caquelon-search'));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();
  const results = q === ''
    ? CAQUELON_SEARCH_INDEX.slice(0, 6)
    : CAQUELON_SEARCH_INDEX.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q)
      );

  return (
    <div 
      className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 pt-12 sm:pt-20"
      onClick={onClose}
    >
      <div 
        className="bg-white border border-stone-200 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 border-b border-stone-200 flex items-center gap-3 bg-stone-50">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Rezept oder Material suchen... (z. B. Gruyère, Gusseisen, Chinoise, Toblerone, Induktion)"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-transparent text-stone-900 placeholder-stone-400 text-sm sm:text-base font-medium focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-stone-400 hover:text-stone-600 p-1">
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="text-xs font-bold text-stone-500 hover:text-stone-900 px-2 py-1 bg-stone-200/60 hover:bg-stone-200 rounded-lg"
          >
            ESC
          </button>
        </div>

        <div className="overflow-y-auto p-3 space-y-1 divide-y divide-stone-100">
          {q === '' && (
            <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-stone-400">
              Beliebte Rezepte &amp; Themen
            </div>
          )}

          {results.length > 0 ? (
            results.map((res) => (
              <Link
                key={res.id}
                to={res.url}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-amber-50/70 transition-colors group"
              >
                <div className="space-y-0.5 max-w-[85%]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-stone-900 text-sm group-hover:text-red-900 transition-colors">
                      {res.title}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-600 group-hover:bg-red-100 group-hover:text-red-900">
                      {res.badge}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 line-clamp-1">
                    {res.subtitle}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-red-900 transition-colors shrink-0" />
              </Link>
            ))
          ) : (
            <div className="p-8 text-center text-stone-500 space-y-2">
              <Search className="w-8 h-8 text-stone-300 mx-auto" />
              <p className="text-sm font-medium">Keine Rezepte oder Materialien für „{query}“ gefunden.</p>
              <p className="text-xs text-stone-400">Versuchen Sie es mit Gruyère, Fondue Chinoise, Gusseisen, Induktion oder Toblerone.</p>
            </div>
          )}
        </div>

        <div className="p-3 bg-stone-50 border-t border-stone-200 text-[11px] text-stone-500 flex items-center justify-between font-mono">
          <span>Tipp: <kbd className="bg-white border border-stone-300 px-1 rounded text-[10px]">Strg</kbd> + <kbd className="bg-white border border-stone-300 px-1 rounded text-[10px]">K</kbd></span>
          <span>caquelon.de Fondue-Portal</span>
        </div>
      </div>
    </div>
  );
}
