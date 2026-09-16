/**
 * caquelon.de - Zentrale Rezeptdatenquelle
 * 
 * Enthält die 26 verifizierten Fondue-Rezepte mit einheitlichen Slugs,
 * Portionsangaben und Kategorien.
 */

export const RECIPES = [
  // --- KÄSEFONDUE (8 Rezepte) ---
  {
    id: "schweizer-kaesefondue",
    slug: "schweizerkaesefondue",
    title: "Original Schweizer Käsefondue (Moitié-Moitié)",
    description: "Das authentische Schweizer Nationalrezept mit 50% Le Gruyère AOP und 50% Vacherin Fribourgeois AOP für unvergleichliche Cremigkeit.",
    category: "Käsefondue",
    categoryKey: "kaese",
    cookTime: "25 Min",
    servings: "4-6",
    difficulty: "Einfach"
  },
  {
    id: "moitie-moitie",
    slug: "moitiemoitie",
    title: "Klassisches Fondue Moitié-Moitié",
    description: "Der Urvater der Schweizer Käsefondues mit Weißwein, Kirschwasser und frischem Knoblauch.",
    category: "Käsefondue",
    categoryKey: "kaese",
    cookTime: "20 Min",
    servings: "4",
    difficulty: "Einfach"
  },
  {
    id: "kaesefondue-ohne-alkohol",
    slug: "kaesefondueohnealkohol",
    title: "Käsefondue ohne Alkohol",
    description: "Familienfreundliche Variante mit naturtrübem Apfelsaft, Gemüsefond und milder Schweizer Käsemischung.",
    category: "Käsefondue",
    categoryKey: "kaese",
    cookTime: "15 Min",
    servings: "4-6",
    difficulty: "Einfach"
  },
  {
    id: "bierkaese-fondue",
    slug: "bierkaesefondue",
    title: "Bierkäse-Fondue mit Laugenbrezen",
    description: "Kräftig-würzige Variante mit hellem Weißbier, Bergkäse, Emmentaler und frischen Brezenwürfeln.",
    category: "Käsefondue",
    categoryKey: "kaese",
    cookTime: "25 Min",
    servings: "4",
    difficulty: "Einfach"
  },
  {
    id: "tomaten-fondue",
    slug: "tomatenfondue",
    title: "Walliser Tomaten-Käsefondue",
    description: "Fruchtig-herzhaftes Schweizer Fondue mit Tomatenpassata, Oregano, Gruyère und Emmentaler.",
    category: "Käsefondue",
    categoryKey: "kaese",
    cookTime: "20 Min",
    servings: "4",
    difficulty: "Einfach"
  },
  {
    id: "chili-cheese-fondue",
    slug: "chilicheesefondue",
    title: "Chili-Cheese-Fondue",
    description: "Würzige Fusion aus mildem Schweizer Käse, reifem Cheddar und eingelegten Jalapeños.",
    category: "Käsefondue",
    categoryKey: "kaese",
    cookTime: "20 Min",
    servings: "4",
    difficulty: "Mittel"
  },
  {
    id: "champagner-fondue",
    slug: "champagnerfondue",
    title: "Champagner-Trüffel-Fondue",
    description: "Festliches Edelfondue mit trockenem Champagner, mildem Vacherin Mont-d'Or und schwarzem Trüffel.",
    category: "Käsefondue",
    categoryKey: "kaese",
    cookTime: "25 Min",
    servings: "2-4",
    difficulty: "Mittel"
  },
  {
    id: "gorgonzola-fondue",
    slug: "gorgonzolafondue",
    title: "Gorgonzola-Walnuss-Fondue",
    description: "Cremiges Käsefondue mit italienischem Gorgonzola Dolce, Birnenspalten und gerösteten Walnüssen.",
    category: "Käsefondue",
    categoryKey: "kaese",
    cookTime: "15 Min",
    servings: "4",
    difficulty: "Einfach"
  },

  // --- FLEISCH & BRÜHE (6 Rezepte) ---
  {
    id: "fondue-bourguignonne",
    slug: "fonduebourguignonne",
    title: "Fondue Bourguignonne (Fleischfondue in Öl)",
    description: "Zartes Rinderfilet, Schwein und Pute in siedend heißem Pflanzenöl gegart. Mit wichtigen Sicherheitshinweisen.",
    category: "Fleischfondue",
    categoryKey: "fleisch-oel",
    cookTime: "30 Min",
    servings: "4-6",
    difficulty: "Mittel"
  },
  {
    id: "fondue-chinoise",
    slug: "fonduechinoise",
    title: "Fondue Chinoise (Brühe-Fondue)",
    description: "Klassisches Schweizer Festtagsfondue mit hauchdünn geschnittenem Fleisch und Gemüse in heißer Rinderbouillon.",
    category: "Fleischfondue",
    categoryKey: "bruehe",
    cookTime: "25 Min",
    servings: "4-6",
    difficulty: "Mittel"
  },
  {
    id: "rotwein-fondue",
    slug: "rotweinfondue",
    title: "Rotwein-Brühe-Fondue 'Winzer Art'",
    description: "Kräftiger Sud aus trockenem Spätburgunder, Rinderbrühe, Nelken und Rosmarin für Rindfleisch und Wild.",
    category: "Fleischfondue",
    categoryKey: "bruehe",
    cookTime: "30 Min",
    servings: "4",
    difficulty: "Mittel"
  },
  {
    id: "asia-fondue",
    slug: "asiafondue",
    title: "Asiatisches Kokos-Curry-Fondue",
    description: "Exotischer Sud aus Kokosmilch, Zitronengras, Galgant und Koriander für Hähnchen, Garnelen und Pak Choi.",
    category: "Fleischfondue",
    categoryKey: "bruehe",
    cookTime: "25 Min",
    servings: "4",
    difficulty: "Mittel"
  },
  {
    id: "fondue-bacchus",
    slug: "fonduebacchus",
    title: "Fondue Bacchus (Weißwein-Kräuterfondue)",
    description: "Aromatischer Weinsud aus trockenem Weißwein, Schalotten, Lorbeer und Thymian für Geflügel und Kalbfleisch.",
    category: "Fleischfondue",
    categoryKey: "bruehe",
    cookTime: "25 Min",
    servings: "4",
    difficulty: "Mittel"
  },
  {
    id: "shabu-shabu",
    slug: "shabushabu",
    title: "Japanisches Shabu-Shabu",
    description: "Hauchdünnes Rindfleisch und Enoki-Pilze, kurz in mildem Kombu-Dashi geschwenkt und mit Ponzu serviert.",
    category: "Fleischfondue",
    categoryKey: "bruehe",
    cookTime: "30 Min",
    servings: "4-6",
    difficulty: "Mittel"
  },

  // --- VEGAN (2 Rezepte) ---
  {
    id: "veganes-kaesefondue",
    slug: "veganeskaesefondue",
    title: "Veganes Käsefondue auf Cashew-Basis",
    description: "Cremige pflanzliche Alternative aus eingeweichten Cashewkernen, Hefeflocken, Weißwein und Knoblauch.",
    category: "Veganes Fondue",
    categoryKey: "kaese",
    cookTime: "20 Min",
    servings: "4",
    difficulty: "Mittel"
  },
  {
    id: "veganes-gemuesefondue",
    slug: "veganesfondue",
    title: "Herzhaftes Veganes Gemüsefondue",
    description: "Bunte Gemüsespieße, Räuchertofu und Shiitake in einer kräftig eingekochten Wurzelgemüsebrühe.",
    category: "Veganes Fondue",
    categoryKey: "bruehe",
    cookTime: "20 Min",
    servings: "4-6",
    difficulty: "Einfach"
  },

  // --- DESSERT & SCHOKOLADE (10 Rezepte) ---
  {
    id: "schokoladenfondue",
    slug: "schokoladenfondue",
    title: "Klassisches Schokoladenfondue",
    description: "Dunkle Kuvertüre mit Sahne sanft im Stövchen geschmolzen, serviert mit Erdbeeren und Bananen.",
    category: "Dessert",
    categoryKey: "dessert",
    cookTime: "10 Min",
    servings: "4-6",
    difficulty: "Einfach"
  },
  {
    id: "pistazien-fondue",
    slug: "pistazienfondue",
    title: "Pistazien-Schokoladenfondue",
    description: "Samtige weiße Kuvertüre mit 100% reinem sizilianischem Pistazienmus und gehackten Pistazien.",
    category: "Dessert",
    categoryKey: "dessert",
    cookTime: "15 Min",
    servings: "4-6",
    difficulty: "Einfach"
  },
  {
    id: "weisse-schokolade-fondue",
    slug: "weisseschokoladenfondue",
    title: "Weißes Schokoladenfondue mit Bourbon-Vanille",
    description: "Elegantes Dessertfondue aus Kakaobutter, Bourbon-Vanille und Sahne für frische Waldbeeren.",
    category: "Dessert",
    categoryKey: "dessert",
    cookTime: "12 Min",
    servings: "4-6",
    difficulty: "Einfach"
  },
  {
    id: "nutella-fondue",
    slug: "nutellafondue",
    title: "Nutella-Dessertfondue",
    description: "Schnelles Dessert mit Nuss-Nougat-Creme und Milch, ideal für Kindergeburtstage und Waffeln.",
    category: "Dessert",
    categoryKey: "dessert",
    cookTime: "5 Min",
    servings: "4-6",
    difficulty: "Sehr Einfach"
  },
  {
    id: "toblerone-fondue",
    slug: "tobleronefondue",
    title: "Toblerone-Schokoladenfondue",
    description: "Original Schweizer Toblerone sanft geschmolzen mit Honig-Mandel-Torrone-Stückchen.",
    category: "Dessert",
    categoryKey: "dessert",
    cookTime: "10 Min",
    servings: "4-6",
    difficulty: "Sehr Einfach"
  },
  {
    id: "karamell-fondue",
    slug: "karamellfondue",
    title: "Gesalzenes Karamell-Fondue",
    description: "Hausgemachtes Salted Caramel mit Fleur de Sel und Sahne zum Dippen von säuerlichen Apfelschnitzen.",
    category: "Dessert",
    categoryKey: "dessert",
    cookTime: "15 Min",
    servings: "4-6",
    difficulty: "Mittel"
  },
  {
    id: "chili-schoko-fondue",
    slug: "chilischokofondue",
    title: "Chili-Schokoladenfondue",
    description: "Feine Bitterschokolade (70% Kakaoanteil) mit einer dezenten Prise Chili und Meersalz.",
    category: "Dessert",
    categoryKey: "dessert",
    cookTime: "12 Min",
    servings: "4-6",
    difficulty: "Einfach"
  },
  {
    id: "baileys-fondue",
    slug: "baileysfondue",
    title: "Baileys-Schoko-Fondue",
    description: "Cremige Vollmilchschokolade verfeinert mit irischem Sahnelikör für festliche Erwachsenenrunden.",
    category: "Dessert",
    categoryKey: "dessert",
    cookTime: "10 Min",
    servings: "4",
    difficulty: "Einfach"
  },
  {
    id: "kokos-limetten-fondue",
    slug: "kokoslimettenfondue",
    title: "Exotisches Kokos-Limetten-Fondue",
    description: "Erfrischende Kombination aus weißer Schokolade, Bio-Limettenabrieb und cremiger Kokosmilch.",
    category: "Dessert",
    categoryKey: "dessert",
    cookTime: "12 Min",
    servings: "4",
    difficulty: "Einfach"
  },
  {
    id: "einhorn-fondue",
    slug: "einhornfondue",
    title: "Einhorn-Zuckerstreusel-Fondue",
    description: "Buntes Schokofondue aus weißer Schokolade mit Beerenpüree und bunten Streuseln für Partys.",
    category: "Dessert",
    categoryKey: "dessert",
    cookTime: "10 Min",
    servings: "4-6",
    difficulty: "Sehr Einfach"
  }
];

export const RECIPE_CATEGORIES = [
  "Alle",
  "Käsefondue",
  "Fleischfondue",
  "Veganes Fondue",
  "Dessert"
];
