/**
 * caquelon.de - Zentrale Produktdatenquelle
 * 
 * Alle Angaben basieren auf verifizierten Herstellerangaben (Kuhn Rikon, Le Creuset, Spring).
 * Keine ungeprüften Eigenschaften, keine fingierten Testsieger- oder Bewertungsauszeichnungen.
 */

export const PRODUCTS = [
  {
    id: "kuhn-rikon-zermatt",
    name: "Kuhn Rikon Käsefondue-Set 'Zermatt'",
    manufacturer: "Kuhn Rikon",
    modelSeries: "Zermatt (Dekor Scherenschnitt / Schweizer Kreuz)",
    articleNumber: "32174 (23 cm) / 32175 (24 cm)",
    ean: "7610154321746",
    material: "Feuerfeste Ton-Keramik (Feuerton)",
    capacityLiters: 2.2,
    diameterCm: 23,
    recommendedServings: "4 - 6 Personen",
    induction: {
      direct: false,
      withAdapter: true,
      notes: "Klassische Ton-Keramik ist nicht ferromagnetisch. Ein Betrieb auf Induktionskochfeldern ist ausschließlich mit einer planen Induktions-Adapterplatte möglich."
    },
    stovetopSuitability: {
      gas: "Ja (idealerweise mit Hitzeverteilerplatte)",
      ceranElectric: "Ja",
      induction: "Nur mit Adapterplatte",
      rechaud: "Ja (Pastenbrenner / Gel)"
    },
    allowedFondueTypes: ["kaese", "schoko"],
    disallowedFondueTypes: ["oel", "bruehe"],
    safetyNotice: "Ausschließlich für Käse- und Schokoladenfondue geeignet. Niemals für heißes Öl oder Fett verwenden (Bruch- und Brandgefahr durch Rissbildung in der Keramik!).",
    priceRange: "ca. 89 - 110 €",
    pros: [
      "Authentische Schweizer Ton-Keramik aus europäischer Fertigung",
      "Sehr langsame, gleichmäßige Wärmeabgabe (Käse brennt nicht punktuell an)",
      "Klassischer Holzstiel bleibt während der Zubereitung kühl"
    ],
    cons: [
      "Nicht direkt induktionsgeeignet (erfordert Adapterplatte)",
      "Empfindlich gegen Thermoschock (kein kaltes Wasser in den heißen Topf)"
    ],
    affiliateLink: "https://amzn.to/4oVKIMA",
    highlightTag: "Traditioneller Keramik-Klassiker"
  },
  {
    id: "le-creuset-gusseisen",
    name: "Le Creuset Fondue-Set Tradition / Gourmet",
    manufacturer: "Le Creuset",
    modelSeries: "Tradition / Gourmet Gusseisen",
    articleNumber: "21105220602460",
    ean: "0024147253501",
    material: "Emailliertes Gusseisen",
    capacityLiters: 2.0,
    diameterCm: 22,
    recommendedServings: "4 - 6 Personen (für bis zu 8 Personen bei Brühe)",
    induction: {
      direct: true,
      withAdapter: true,
      notes: "Ferromagnetischer Boden für direkte Induktion geeignet. Wichtig: Auf Induktion niemals die Booster-/Power-Stufe leer einschalten; Durchmesser der Kochzone sollte zum Topfboden passen."
    },
    stovetopSuitability: {
      gas: "Ja",
      ceranElectric: "Ja",
      induction: "Ja (direkt)",
      rechaud: "Ja (Paste oder Spiritus)"
    },
    allowedFondueTypes: ["kaese", "oel", "bruehe", "schoko"],
    disallowedFondueTypes: [],
    safetyNotice: "Universell für alle Fonduearten zugelassen. Bei Fettfondue die maximale Füllhöhe (max. 1/3 bis 1/2) beachten.",
    priceRange: "ca. 180 - 230 €",
    pros: [
      "Universell einsetzbar für Käse, Fleisch in heißem Fett und Brühe",
      "Direkt induktionsfähig auf allen ferromagnetischen Zonen",
      "Extrem langlebige Emaillierung, einfache Reinigung ohne Einbrennen"
    ],
    cons: [
      "Hohes Eigengewicht (ca. 4,5 kg inklusive Rechaud)",
      "Gusseisengriff wird am Herd heiß (Topflappen erforderlich)"
    ],
    affiliateLink: "https://amzn.to/4fSioGv",
    highlightTag: "Allrounder für alle Herdarten & Fonduearten"
  },
  {
    id: "spring-classic-edelstahl",
    name: "Spring Classic Edelstahl Fondue-Set",
    manufacturer: "Spring",
    modelSeries: "Classic Edelstahl 18/10",
    articleNumber: "0666360600",
    ean: "7611082006325",
    material: "18/10 Edelstahl mit Kapsel-Induktionsboden",
    capacityLiters: 1.8,
    diameterCm: 20,
    recommendedServings: "2 - 6 Personen",
    induction: {
      direct: true,
      withAdapter: true,
      notes: "Mehrschicht-Kapselboden ist magnetisch und induktionsgeeignet. Topferkennung abhängig von Mindestdurchmesser der Kochzone."
    },
    stovetopSuitability: {
      gas: "Ja",
      ceranElectric: "Ja",
      induction: "Ja (direkt)",
      rechaud: "Ja"
    },
    allowedFondueTypes: ["oel", "bruehe"],
    disallowedFondueTypes: ["kaese"],
    safetyNotice: "Inklusive aufsetzbarem Edelstahl-Spritzschutzring. Topfkapazität 1,8 Liter: Maximale Ölfüllung für Fondue Bourguignonne beträgt 1/3 bis 1/2 der Topfhöhe (max. 0,75–0,9 Liter Öl), da heißes Fett beim Eintauchen stark aufschäumt. Für Käsefondue nur bedingt empfohlen.",
    priceRange: "ca. 89 - 120 €",
    pros: [
      "Spezialist für heißes Öl (Bourguignonne) und Brühe (Chinoise / Bacchus)",
      "Inklusive passgenauem Spritzschutzring gegen Fettspritzer",
      "Spülmaschinenfest und absolut bruchfest"
    ],
    cons: [
      "Für reines Käsefondue weniger geeignet (geringere thermische Trägheit als Keramik)",
      "Topfwand wird außen sehr heiß"
    ],
    affiliateLink: "https://amzn.to/3JoYc39",
    highlightTag: "Spezialist für Fett- & Brühefondue"
  }
];

/**
 * Filter- und Empfehlungsfunktion für den interaktiven Berater
 * Berücksichtigt alle 3 Faktoren: Fondueart, Herdart und Personenzahl.
 */
export function getRecommendedPot({ fondueType, stovetop, people }) {
  const numPeople = parseInt(people, 10) || 4;
  
  // 1. Gruppengrößen-Kalkulation & Mehr-Topf-Hinweis
  let potCountRecommendation = {
    pots: 1,
    note: "1 Fonduetopf reicht für diese Gruppengröße optimal aus."
  };
  
  if (numPeople >= 7 && numPeople <= 8) {
    potCountRecommendation = {
      pots: 2,
      note: "Empfehlung für 7–8 Personen: 2 Töpfe aufstellen, damit sich Gabeln nicht verheddern und die Temperatur im Topf stabil bleibt."
    };
  } else if (numPeople >= 9) {
    potCountRecommendation = {
      pots: Math.ceil(numPeople / 4),
      note: `Dringende Empfehlung für ${numPeople} Personen: Mindestens 2 bis 3 Fonduetöpfe am Tisch verteilen! Ein Einzeltopf kühlt durch zu viele kalte Gabeln aus und führt zu langen Wartezeiten.`
    };
  }

  // 2. Produkt-Zuordnung
  let matchedProduct = null;
  let rationale = "";
  let safetyAdvice = "";

  if (fondueType === "oel") {
    // Fleisch in Öl: Niemals Keramik! Nur Edelstahl oder Gusseisen.
    matchedProduct = PRODUCTS.find(p => p.id === "spring-classic-edelstahl");
    rationale = "Für Fleischfondue in sprudelnd heißem Öl (Bourguignonne) ist Edelstahl mit Spritzschutzring die sicherste Wahl. Schnelle Erhitzung und maximale Stabilität.";
    safetyAdvice = "Wichtig: Fonduetopf maximal zu 1/3 bis 1/2 mit Öl füllen (Brandgefahr durch Überschäumen). Niemals Keramik für Fettfondue verwenden!";
  } else if (fondueType === "bruehe") {
    // Brühe (Chinoise / Bacchus / Shabu Shabu): Edelstahl oder Gusseisen
    matchedProduct = PRODUCTS.find(p => p.id === "spring-classic-edelstahl") || PRODUCTS[1];
    rationale = "Für Brühefondues (Chinoise, Asia, Shabu Shabu) eignet sich Edelstahl ideal, da die Brühe zügig auf Siedetemperatur bleibt und Drahtkörbchen materialschonend eingehängt werden können.";
    safetyAdvice = "Tipp: Heiße Brühe in einer separaten Kanne bereithalten, um bei Bedarf portionsweise nachzufüllen, statt den Topf zu Beginn zu überfüllen.";
  } else if (fondueType === "schoko") {
    // Schokolade
    matchedProduct = {
      id: "keramik-schoko",
      name: "Keramik Schokoladenfondue-Set mit Teelicht",
      manufacturer: "Fachhandel / Kela / Kuhn Rikon Petit",
      modelSeries: "Schoko-Fondue Petit",
      articleNumber: "Diverse (ca. 300–500 ml)",
      material: "Glasierte Keramik mit Stövchen",
      capacityLiters: 0.4,
      diameterCm: 12,
      recommendedServings: "2 - 4 Personen",
      induction: {
        direct: false,
        withAdapter: false,
        notes: "Wird sanft mit einem Teelicht betrieben oder im Wasserbad geschmolzen. Nicht für den Herd gedacht."
      },
      stovetopSuitability: {
        gas: "Nein",
        ceranElectric: "Nein",
        induction: "Nein",
        rechaud: "Teelicht-Stövchen"
      },
      allowedFondueTypes: ["schoko"],
      priceRange: "ca. 18 - 29 €",
      affiliateLink: "https://amzn.to/4c4GZLx",
      pros: ["Sanfte Teelichthitze verhindert Verbrennen der Schokolade", "Kompakt und spülmaschinengeeignet"],
      cons: ["Nicht für den Herd geeignet (vorher in Schale im Wasserbad schmelzen)"]
    };
    rationale = "Schokolade ist empfindlich und verbrennt schnell. Ein kleines Keramik-Caquelon mit Teelicht-Stövchen hält die Schokolade sanft flüssig, ohne zu klumpen.";
  } else {
    // Käsefondue
    if (stovetop === "induktion") {
      // Induktion: Gusseisen gewinnt direkt!
      matchedProduct = PRODUCTS.find(p => p.id === "le-creuset-gusseisen");
      rationale = "Emailliertes Gusseisen verfügt über einen ferromagnetischen Boden und funktioniert direkt auf Induktionsfeldern. Es speichert Hitze hervorragend für sämigen Käse.";
      safetyAdvice = "Induktions-Hinweis: Die Topferkennung variiert je nach Herdhersteller. Achte darauf, dass der Topfbodendurchmesser (ca. 22 cm) zur jeweiligen Kochzone passt. Traditionelle Keramik wie Kuhn Rikon Zermatt benötigt zwingend eine Induktions-Adapterplatte.";
    } else {
      // Ceran, Gas, Rechaud: Kuhn Rikon Zermatt
      matchedProduct = PRODUCTS.find(p => p.id === "kuhn-rikon-zermatt");
      rationale = "Für klassisches Käsefondue auf Gas, Ceran oder Rechaud ist feuerfeste Ton-Keramik der traditionelle Maßstab. Die träge Wärmeleitung verhindert punktuelles Festbrennen.";
      safetyAdvice = "Auf Gasherden stets eine Hitzeverteilerplatte unterlegen, um thermische Spannungen am Topfboden zu minimieren.";
    }
  }

  return {
    product: matchedProduct,
    groupRecommendation: potCountRecommendation,
    rationale,
    safetyAdvice
  };
}
