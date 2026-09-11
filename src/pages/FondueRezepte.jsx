import React, { useState } from 'react';
import { createPageUrl } from '@/utils';
import RecipeCard from '../components/RecipeCard';
import CTAButton from '../components/CTAButton';
import SEOHead from '../components/SEOHead';
import SocialShare from '../components/SocialShare';
import FloatingCTABar from '../components/FloatingCTABar';
import { ChefHat, Search, SlidersHorizontal, Flame, Award } from 'lucide-react';

const recipes = [
  // Käsefondues
  { title: "Original Schweizer Käsefondue (Moitié-Moitié)", description: "Das authentische Schweizer Rezept mit 50% Gruyère AOP und 50% Vacherin Fribourgeois AOP.", category: "Käsefondue", cookTime: "25 Min", servings: "4-6", difficulty: "Einfach", linkTo: createPageUrl("SchweizerKaeseFondue") },
  { title: "Fondue Moitié-Moitié", description: "Der Urvater aller Schweizer Käsefondues, besonders cremige Konsistenz und würziger Geschmack.", category: "Käsefondue", cookTime: "20 Min", servings: "4", difficulty: "Einfach", linkTo: createPageUrl("MoitieMoitie") },
  { title: "Käsefondue ohne Alkohol", description: "Familienfreundliches Rezept mit Apfelsaft, Gemüsebrühe und sanftem Käse für Groß und Klein.", category: "Käsefondue", cookTime: "15 Min", servings: "4-6", difficulty: "Einfach", linkTo: createPageUrl("KaeseFondueOhneAlkohol") },
  { title: "Bierkäse-Fondue mit Brezn", description: "Ein deftiges bayerisches Käsefondue mit kräftigem Weißbier und frischen Laugenbrezel-Würfeln.", category: "Käsefondue", cookTime: "25 Min", servings: "4", difficulty: "Einfach", linkTo: createPageUrl("BierkaeseFondue") },
  { title: "Tomaten-Käsefondue 'Italian Style'", description: "Fruchtig-mediterranes Käsefondue mit stückigen Tomaten, Basilikum und Knoblauch.", category: "Käsefondue", cookTime: "20 Min", servings: "4", difficulty: "Einfach", linkTo: createPageUrl("TomatenFondue") },
  { title: "Chili-Cheese-Fondue", description: "Feuriges Käsefondue mit Jalapeños und scharfem Cheddar für alle, die es würzig mögen.", category: "Käsefondue", cookTime: "20 Min", servings: "4", difficulty: "Mittel", linkTo: createPageUrl("ChiliCheeseFondue") },
  { title: "Champagner-Trüffel-Fondue", description: "Luxuriöses Festtagsfondue verfeinert mit edlem Champagner und schwarzem Trüffelöl.", category: "Käsefondue", cookTime: "25 Min", servings: "2-4", difficulty: "Mittel", linkTo: createPageUrl("ChampagnerFondue") },
  { title: "Gorgonzola-Walnuss-Fondue", description: "Cremiges Fondue mit würzigem italienischem Gorgonzola und gerösteten Walnüssen.", category: "Käsefondue", cookTime: "15 Min", servings: "4", difficulty: "Einfach", linkTo: createPageUrl("GorgonzolaFondue") },

  // Fleisch & Brühe
  { title: "Fondue Bourguignonne (Fleischfondue in Öl)", description: "Der Klassiker mit zartem Rinderfilet, Schwein und Pute in heißem Pflanzenöl gegart.", category: "Fleischfondue", cookTime: "30 Min", servings: "4-6", difficulty: "Mittel", linkTo: createPageUrl("FondueBourguignonne") },
  { title: "Fondue Chinoise (Brühe-Fondue)", description: "Leichtes und kalorienarmes Fleischfondue in würziger Rinder- oder Gemüsebrühe.", category: "Fleischfondue", cookTime: "25 Min", servings: "4-6", difficulty: "Mittel", linkTo: createPageUrl("FondueChinoise") },
  { title: "Rotwein-Brühe-Fondue 'Winzer Art'", description: "Ein aromatisches Fondue, bei dem das Fleisch in sacht siedendem Rotweinsud gegart wird.", category: "Fleischfondue", cookTime: "30 Min", servings: "4", difficulty: "Mittel", linkTo: createPageUrl("RotweinFondue") },
  { title: "Asiatisches Kokos-Curry-Fondue", description: "Exotisches Brühefondue mit Kokosmilch, roter Currypaste und Zitronengras.", category: "Fleischfondue", cookTime: "25 Min", servings: "4", difficulty: "Mittel", linkTo: createPageUrl("AsiaFondue") },
  { title: "Fondue Bacchus (Weißwein-Fondue)", description: "Fleisch und Gemüse werden in einem würzigen Kräuter-Weißweinsud sanft gegart.", category: "Fleischfondue", cookTime: "25 Min", servings: "4", difficulty: "Mittel", linkTo: createPageUrl("FondueBacchus") },
  { title: "Japanisches Shabu-Shabu", description: "Hauchdünne Rinderstreifen und Shiitake-Pilze kurz im aromatischen Dashi-Sud geschwenkt.", category: "Fleischfondue", cookTime: "30 Min", servings: "4-6", difficulty: "Mittel", linkTo: createPageUrl("ShabuShabu") },

  // Vegan
  { title: "Veganes Käsefondue auf Cashew-Basis", description: "Verblüffend cremige und würzige vegane Alternative aus eingeweichten Cashewkernen und Hefeflocken.", category: "Veganes Fondue", cookTime: "20 Min", servings: "4", difficulty: "Mittel", linkTo: createPageUrl("VeganesKaeseFondue") },
  { title: "Herzhaftes Veganes Gemüsefondue", description: "Buntes Gemüse und Tofuwürfel gegart in einer feinen Kräuter-Brühe.", category: "Veganes Fondue", cookTime: "20 Min", servings: "4-6", difficulty: "Einfach", linkTo: createPageUrl("VeganesFondue") },

  // Dessert
  { title: "Klassisches Schokoladenfondue", description: "Dunkle Zartbitterschokolade mit Sahne für ein unvergessliches Obstdessert.", category: "Dessert", cookTime: "10 Min", servings: "4-6", difficulty: "Einfach", linkTo: createPageUrl("SchokoladenFondue") },
  { title: "Pistazien-Schokoladenfondue", description: "Samtige weiße Schokolade mit 100% feinstem Pistazienmus und gehackten Pistazien.", category: "Dessert", cookTime: "15 Min", servings: "4-6", difficulty: "Einfach", linkTo: createPageUrl("PistazienFondue") },
  { title: "Weißes Schokoladenfondue", description: "Elegantes weißes Schokofondue mit Vanille, ideal für frische Beeren.", category: "Dessert", cookTime: "12 Min", servings: "4-6", difficulty: "Einfach", linkTo: createPageUrl("WeisseSchokoladenFondue") },
  { title: "Nutella-Fondue", description: "Das schnellste Dessert-Fondue für Kids und Nutella-Fans in unter 5 Minuten.", category: "Dessert", cookTime: "5 Min", servings: "4-6", difficulty: "Sehr Einfach", linkTo: createPageUrl("NutellaFondue") },
  { title: "Toblerone-Schokoladenfondue", description: "Cremiges Schokofondue aus echter Schweizer Toblerone mit Honig-Mandel-Stückchen.", category: "Dessert", cookTime: "10 Min", servings: "4-6", difficulty: "Sehr Einfach", linkTo: createPageUrl("TobleroneFondue") },
  { title: "Gesalzenes Karamell-Fondue", description: "Unwiderstehliches Salted Caramel Fondue zum Dippen von Apfelspalten und Keksen.", category: "Dessert", cookTime: "15 Min", servings: "4-6", difficulty: "Mittel", linkTo: createPageUrl("KaramellFondue") },
  { title: "Chili-Schoko-Fondue", description: "Dunkle Schokolade verfeinert mit einer Prise Cayenne-Pfeffer für erwachsene Genießer.", category: "Dessert", cookTime: "12 Min", servings: "4-6", difficulty: "Einfach", linkTo: createPageUrl("ChiliSchokoFondue") },
  { title: "Baileys-Schoko-Fondue", description: "Cremiges Dessert-Fondue mit irischem Baileys-Likör und feiner Milchschokolade.", category: "Dessert", cookTime: "10 Min", servings: "4", difficulty: "Einfach", linkTo: createPageUrl("BaileysFondue") },
  { title: "Exotisches Kokos-Limetten-Fondue", description: "Frische weiße Schokolade mit Kokosmilch und spritzigem Limettensaft.", category: "Dessert", cookTime: "12 Min", servings: "4", difficulty: "Einfach", linkTo: createPageUrl("KokosLimettenFondue") }
];

const categories = ["Alle", "Käsefondue", "Fleischfondue", "Veganes Fondue", "Dessert"];

export default function FondueRezepte() {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = activeCategory === "Alle" || recipe.category === activeCategory;
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Über 25 Fondue Rezepte: Käse, Fleisch & Schokolade",
    "description": "Erprobte Fondue-Rezepte vom Schweizer Käsefondue über Fleischfondue bis hin zu Schokoladen-Desserts.",
    "url": "https://caquelon.de/FondueRezepte"
  };

  return (
    <>
      <SEOHead 
        title="26 Fondue Rezepte: Käse, Fleisch & Schokolade | caquelon.de"
        description="Die besten Fondue-Rezepte im Überblick! Vom Schweizer Käsefondue (Moitié-Moitié) über Fleischfondue bis hin zu cremigem Schokofondue."
        keywords="Fondue Rezepte, Käsefondue Rezept, Schokoladenfondue Rezept, Fleischfondue, Caquelon Rezepte, Fondue Ideen"
        canonical="https://caquelon.de/FondueRezepte"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-[#faf8f5] text-stone-900">
        {/* Editorial Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-stone-900 via-stone-900 to-red-950 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 rounded-full text-amber-300 text-xs font-bold uppercase mb-6">
              <ChefHat className="w-4 h-4" />
              <span>Geprüfte Rezept-Sammlung ({recipes.length} Variationen)</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Die besten <span className="text-amber-400">Fondue-Rezepte</span> für jeden Anlass
            </h1>

            <p className="text-lg md:text-xl text-stone-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
              Egal ob klassisches Schweizer Käsefondue im Keramik-Caquelon, zartes Fleischfondue in Brühe oder schmelzende Schokolade – entdecke gelingsichere Rezepte mit Mengenrechner.
            </p>

            {/* Search Input & Category Filter */}
            <div className="max-w-xl mx-auto space-y-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                <input 
                  type="text"
                  placeholder="Rezept oder Zutaten suchen (z.B. Gruyère, Pistazie, Trüffel)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Category Filter Chips */}
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                      activeCategory === cat 
                        ? 'bg-amber-400 text-stone-900 shadow' 
                        : 'bg-white/10 text-stone-300 hover:bg-white/20 border border-white/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Share */}
            <div className="flex justify-center mt-8">
              <SocialShare 
                title="Über 25 köstliche Fondue-Rezepte für jeden Geschmack"
                description="Entdecke gelingsichere Fondue-Rezepte mit Mengenumrechner auf Caquelon.de!"
              />
            </div>
          </div>
        </section>

        {/* Recipe Grid Section */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-extrabold text-stone-900">
              {activeCategory} <span className="text-stone-400 font-normal">({filteredRecipes.length} Rezepte)</span>
            </h2>
          </div>

          {filteredRecipes.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-200">
              <p className="text-stone-500">Kein Rezept für "{searchQuery}" gefunden.</p>
              <button onClick={() => { setSearchQuery(""); setActiveCategory("Alle"); }} className="mt-4 text-red-900 underline font-bold text-sm">
                Filter zurücksetzen
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecipes.map((recipe, index) => (
                <RecipeCard key={index} {...recipe} />
              ))}
            </div>
          )}
        </section>

        {/* Floating CTA */}
        <FloatingCTABar 
          title="Noch keinen Fonduetopf für dein Rezept?"
          subtitle="Die Top 3 Caquelons aus Keramik & Gusseisen im Test"
          link={createPageUrl('CaquelonKaufen')}
        />
      </div>
    </>
  );
}
