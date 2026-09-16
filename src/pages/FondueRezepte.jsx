import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import RecipeCard from '../components/RecipeCard';
import SEOHead from '../components/SEOHead';
import SocialShare from '../components/SocialShare';
import FloatingCTABar from '../components/FloatingCTABar';
import { ChefHat, Search, SlidersHorizontal, Flame, Sparkles } from 'lucide-react';
import { RECIPES, RECIPE_CATEGORIES } from '../data/recipes';

export default function FondueRezepte() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [searchQuery, setSearchQuery] = useState("");

  // Synchronisiere URL-Suchparameter (z.B. /fonduerezepte?q=Schweizer)
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const q = searchParams.get('q');
    if (q) {
      setSearchQuery(q);
    }
  }, [location.search]);

  const filteredRecipes = RECIPES.filter(recipe => {
    const matchesCategory = activeCategory === "Alle" || recipe.category === activeCategory;
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${RECIPES.length} Fondue Rezepte: Käse, Fleisch & Schokolade`,
    "description": "Erprobte Fondue-Rezepte vom Schweizer Käsefondue über Fleischfondue bis hin zu Schokoladen-Desserts.",
    "url": "https://caquelon.de/fonduerezepte"
  };

  return (
    <>
      <SEOHead 
        title={`${RECIPES.length} Fondue Rezepte: Käse, Fleisch & Schokolade | caquelon.de`}
        description={`Alle ${RECIPES.length} Fondue-Rezepte im Überblick! Vom Schweizer Käsefondue (Moitié-Moitié) über Fleischfondue bis hin zu cremigem Schokofondue mit Mengenumrechner.`}
        keywords="Fondue Rezepte, Käsefondue Rezept, Schokoladenfondue Rezept, Fleischfondue, Caquelon Rezepte, Fondue Ideen"
        canonical="https://caquelon.de/fonduerezepte"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-[#faf8f5] text-stone-900">
        {/* Editorial Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-stone-900 via-stone-900 to-red-950 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 rounded-full text-amber-300 text-xs font-bold uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Geprüfte Rezeptsammlung ({RECIPES.length} Rezepte)</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Die große <span className="text-amber-400">Fondue-Rezeptwelt</span>
            </h1>

            <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
              Egal ob traditionelles Schweizer Käsefondue im Keramik-Caquelon, Fleischfondue in Brühe oder schmelzende Schokolade – entdecke alle {RECIPES.length} Rezepte mit dynamischem Mengenkalkulator.
            </p>

            <div className="flex justify-center">
              <SocialShare 
                title={`${RECIPES.length} Fondue-Rezepte auf caquelon.de`}
                description="Entdecke erprobte Fondue-Rezepte mit Mengenumrechner auf caquelon.de!"
              />
            </div>
          </div>
        </section>

        {/* Search & Filter Controls */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-stone-200">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                <input
                  type="search"
                  placeholder="Rezept suchen (z. B. Moitié-Moitié, Trüffel, Brühe)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-stone-50 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-red-900 text-sm font-medium"
                />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
                {RECIPE_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      activeCategory === category
                        ? 'bg-red-900 text-white shadow-md'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recipe Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-stone-900">
              {activeCategory === "Alle" ? `Alle Rezepte (${filteredRecipes.length})` : `${activeCategory} (${filteredRecipes.length})`}
            </h2>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs font-bold text-red-900 hover:underline cursor-pointer"
              >
                Suche zurücksetzen
              </button>
            )}
          </div>

          {filteredRecipes.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
              <ChefHat className="w-12 h-12 text-stone-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-stone-800">Keine Rezepte gefunden</h3>
              <p className="text-sm text-stone-500 mt-1">
                Für „{searchQuery}“ konnten leider keine passenden Fondue-Rezepte gefunden werden.
              </p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("Alle"); }}
                className="mt-4 px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-bold cursor-pointer"
              >
                Alle Rezepte anzeigen
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  title={recipe.title}
                  description={recipe.description}
                  category={recipe.category}
                  cookTime={recipe.cookTime}
                  servings={recipe.servings}
                  difficulty={recipe.difficulty}
                  linkTo={createPageUrl(recipe.slug)}
                />
              ))}
            </div>
          )}
        </section>

        {/* Floating Bar */}
        <FloatingCTABar 
          title="Passenden Fonduetopf finden?"
          subtitle="Modell-Vergleich für Keramik, Gusseisen & Edelstahl"
          link={createPageUrl('CaquelonKaufen')}
        />
      </div>
    </>
  );
}
