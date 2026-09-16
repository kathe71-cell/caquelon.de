import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  Menu,
  X,
  Facebook,
  Twitter,
  Mail,
  MessageCircle,
  ChevronDown,
  ChefHat,
  BookOpen
} from "lucide-react";
import ScrollToTop from '../components/ScrollToTop';
import Logo from '../components/Logo';

const recipeCategories = [
  {
    title: "🧀 Käsefondues",
    items: [
      { title: "Original Schweizer", url: createPageUrl("SchweizerKaeseFondue") },
      { title: "Moitié-Moitié", url: createPageUrl("MoitieMoitie") },
      { title: "Ohne Alkohol", url: createPageUrl("KaeseFondueOhneAlkohol") },
      { title: "Bierkäse-Fondue", url: createPageUrl("BierkaeseFondue") },
      { title: "Tomaten-Käsefondue", url: createPageUrl("TomatenFondue") },
      { title: "Chili-Käsefondue", url: createPageUrl("ChiliCheeseFondue") },
      { title: "Champagner-Trüffel", url: createPageUrl("ChampagnerFondue") },
      { title: "Gorgonzola-Walnuss", url: createPageUrl("GorgonzolaFondue") },
    ]
  },
  {
    title: "🥩 Fleischfondues",
    items: [
      { title: "Fondue Bourguignonne (Öl)", url: createPageUrl("FondueBourguignonne") },
      { title: "Fondue Chinoise (Brühe)", url: createPageUrl("FondueChinoise") },
      { title: "Rotwein-Brühe-Fondue", url: createPageUrl("RotweinFondue") },
      { title: "Asia-Fondue", url: createPageUrl("AsiaFondue") },
      { title: "Fondue Bacchus (Weißwein)", url: createPageUrl("FondueBacchus") },
      { title: "Japanisches Shabu-Shabu", url: createPageUrl("ShabuShabu") },
    ]
  },
  {
    title: "🌱 Vegane Fondues",
    items: [
      { title: "Veganes Käsefondue", url: createPageUrl("VeganesKaeseFondue") },
      { title: "Veganes Gemüsefondue", url: createPageUrl("VeganesFondue") },
    ]
  },
  {
    title: "🍫 Dessert Fondues",
    items: [
      { title: "Klassisches Schoko", url: createPageUrl("SchokoladenFondue") },
      { title: "Pistazien-Schokofondue", url: createPageUrl("PistazienFondue") },
      { title: "Weißes Schokofondue", url: createPageUrl("WeisseSchokoladenFondue") },
      { title: "Nutella-Fondue", url: createPageUrl("NutellaFondue") },
      { title: "Toblerone-Fondue", url: createPageUrl("TobleroneFondue") },
      { title: "Karamell-Fondue", url: createPageUrl("KaramellFondue") },
      { title: "Chili-Schoko-Fondue", url: createPageUrl("ChiliSchokoFondue") },
      { title: "Baileys-Fondue", url: createPageUrl("BaileysFondue") },
      { title: "Kokos-Limetten", url: createPageUrl("KokosLimettenFondue") },
    ]
  }
];

const ratgeberItems = [
  { title: "Caquelon kaufen (Kaufberater)", url: createPageUrl("CaquelonKaufen"), desc: "Der beste Fonduetopf für Induktion, Keramik & Gusseisen" },
  { title: "Fondue-Abend planen", url: createPageUrl("FondueAbendPlanen"), desc: "Mengenkalkulation & Checkliste für Gastgeber" },
  { title: "Fondue Zubehör", url: createPageUrl("FondueZubehoer"), desc: "Rechauds, Brenngel, Gabeln & Fächerteller" },
  { title: "Fondue Käse Ratgeber", url: createPageUrl("FondueKaese"), desc: "Gruyère AOP, Vacherin & Schweizer Käsesorten" },
  { title: "Raclette & Grills", url: createPageUrl("Raclette"), desc: "Raclette-Grills im Vergleich & Pfännchen-Ideen" },
];

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileRecipesOpen, setMobileRecipesOpen] = useState(false);
  const [mobileRatgeberOpen, setMobileRatgeberOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [showCookieDetails, setShowCookieDetails] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });
  const location = useLocation();

  const mainUrl = `https://caquelon.de`;
  const shareTitle = `Entdecke Caquelon.de - Den ultimativen Fondue-Guide!`;
  const shareDescription = `Authentische Fondue-Rezepte, Kaufberatung für Caquelons und alles für gesellige Abende.`;

  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(mainUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(mainUrl)}&text=${encodeURIComponent(shareTitle)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + mainUrl)}`,
    email: `mailto:?subject=${encodeURIComponent("Toller Fondue-Guide: Caquelon.de")}&body=${encodeURIComponent(shareDescription + '\n\nSchau mal hier: ' + mainUrl)}`
  };

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    const settings = localStorage.getItem('cookie_settings');
    if (!consent) {
      setShowCookieBanner(true);
    } else if (settings) {
      setCookieSettings(JSON.parse(settings));
    }

    const handleOpenSettings = () => setShowCookieBanner(true);
    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  const handleCookieConsent = (type) => {
    if (type === 'all') {
      const allSettings = { necessary: true, analytics: true, marketing: true, preferences: true };
      setCookieSettings(allSettings);
      localStorage.setItem('cookie_consent', 'all');
      localStorage.setItem('cookie_settings', JSON.stringify(allSettings));
    } else if (type === 'necessary') {
      const necessarySettings = { necessary: true, analytics: false, marketing: false, preferences: false };
      setCookieSettings(necessarySettings);
      localStorage.setItem('cookie_consent', 'necessary');
      localStorage.setItem('cookie_settings', JSON.stringify(necessarySettings));
    } else if (type === 'custom') {
      localStorage.setItem('cookie_consent', 'custom');
      localStorage.setItem('cookie_settings', JSON.stringify(cookieSettings));
    }
    setShowCookieBanner(false);
    setShowCookieDetails(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setMobileMenuOpen(false);
    scrollToTop();
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
              onClick={scrollToTop}
              aria-label="Caquelon.de Startseite"
            >
              <Logo className="w-10 h-10" />
              <div>
                <div className="font-extrabold text-xl text-stone-900 tracking-tight">Caquelon.de</div>
                <div className="text-xs font-medium text-stone-500">Dein Fondue-Guide</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* Rezepte Mega-Menu */}
              <div className="relative group">
                <Link
                  to={createPageUrl("FondueRezepte")}
                  className="text-stone-800 hover:text-red-900 font-bold text-sm transition-colors flex items-center gap-1 py-6"
                  onClick={scrollToTop}
                >
                  <span>Rezepte</span>
                  <ChevronDown className="w-4 h-4 text-stone-400 group-hover:text-red-900 transition-transform group-hover:rotate-180" />
                </Link>

                {/* Centered 4-Column Mega-Menu Container */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-stone-200 border-t-4 border-t-red-900 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-6 max-h-[82vh] overflow-y-auto">
                  <div className="flex justify-between items-center pb-3 border-b border-stone-100 mb-4">
                    <span className="text-xs font-extrabold text-red-900 uppercase tracking-widest flex items-center gap-1.5">
                      <ChefHat className="w-4 h-4" /> Alle 26 Fondue-Rezepte im Überblick
                    </span>
                    <Link 
                      to={createPageUrl("FondueRezepte")} 
                      onClick={scrollToTop}
                      className="text-xs font-bold text-stone-500 hover:text-red-900 underline"
                    >
                      Alle Rezept-Karten &rarr;
                    </Link>
                  </div>

                  <div className="grid grid-cols-4 gap-6">
                    {recipeCategories.map((col, idx) => (
                      <div key={idx} className="space-y-3">
                        <div className="text-xs font-extrabold text-stone-900 uppercase border-b border-stone-100 pb-1.5">
                          {col.title}
                        </div>
                        <ul className="space-y-1.5">
                          {col.items.map((item, iIndex) => (
                            <li key={iIndex}>
                              <Link
                                to={item.url}
                                onClick={scrollToTop}
                                className="block text-xs font-medium text-stone-600 hover:text-red-900 hover:bg-stone-50 px-2 py-1.5 rounded-lg transition-colors"
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ratgeber Dropdown */}
              <div className="relative group">
                <Link
                  to={createPageUrl("CaquelonKaufen")}
                  className="text-stone-800 hover:text-red-900 font-bold text-sm transition-colors flex items-center gap-1 py-6"
                  onClick={scrollToTop}
                >
                  <span>Ratgeber</span>
                  <ChevronDown className="w-4 h-4 text-stone-400 group-hover:text-red-900 transition-transform group-hover:rotate-180" />
                </Link>

                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-stone-200 border-t-4 border-t-amber-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-4">
                  <div className="text-xs font-extrabold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" /> Kaufberater & Know-how
                  </div>
                  <div className="space-y-1">
                    {ratgeberItems.map((rItem, rIdx) => (
                      <Link
                        key={rIdx}
                        to={rItem.url}
                        onClick={scrollToTop}
                        className="block p-2.5 rounded-xl hover:bg-stone-50 transition group"
                      >
                        <div className="text-xs font-bold text-stone-900 group-hover:text-red-900 transition">{rItem.title}</div>
                        <div className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">{rItem.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link 
                to={createPageUrl("Raclette")} 
                onClick={scrollToTop} 
                className="text-stone-800 hover:text-red-900 font-bold text-sm transition-colors"
              >
                Raclette
              </Link>

              <Link 
                to={createPageUrl("FAQ")} 
                onClick={scrollToTop} 
                className="text-stone-800 hover:text-red-900 font-bold text-sm transition-colors"
              >
                FAQ
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-stone-700 hover:text-red-900 hover:bg-stone-100 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Hauptmenü öffnen"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Accordion Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto">
            {/* Mobile Rezepte Accordion */}
            <div className="border border-stone-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setMobileRecipesOpen(!mobileRecipesOpen)}
                className="w-full flex justify-between items-center p-3 font-bold text-stone-900 bg-stone-50 hover:bg-stone-100 text-left text-sm"
              >
                <span>📖 Rezepte ({recipeCategories.reduce((acc, c) => acc + c.items.length, 0)})</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileRecipesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileRecipesOpen && (
                <div className="p-3 bg-white space-y-4 text-xs">
                  {recipeCategories.map((cat, cIdx) => (
                    <div key={cIdx} className="space-y-1.5">
                      <div className="font-extrabold text-red-900 uppercase text-[11px] border-b border-stone-100 pb-1">
                        {cat.title}
                      </div>
                      <div className="grid grid-cols-2 gap-1 pl-1">
                        {cat.items.map((item, iIdx) => (
                          <Link
                            key={iIdx}
                            to={item.url}
                            className="py-1 text-stone-700 hover:text-red-900"
                            onClick={scrollToTop}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Ratgeber Accordion */}
            <div className="border border-stone-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setMobileRatgeberOpen(!mobileRatgeberOpen)}
                className="w-full flex justify-between items-center p-3 font-bold text-stone-900 bg-stone-50 hover:bg-stone-100 text-left text-sm"
              >
                <span>📘 Ratgeber & Kaufberatung</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileRatgeberOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileRatgeberOpen && (
                <div className="p-3 bg-white space-y-2 text-xs">
                  {ratgeberItems.map((rItem, rIdx) => (
                    <Link
                      key={rIdx}
                      to={rItem.url}
                      className="block p-2 rounded-lg hover:bg-stone-50 font-semibold text-stone-800"
                      onClick={scrollToTop}
                    >
                      {rItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to={createPageUrl("Raclette")}
              className="block font-bold text-stone-900 px-3 py-2 rounded-xl hover:bg-stone-50"
              onClick={scrollToTop}
            >
              Raclette
            </Link>

            <Link
              to={createPageUrl("FAQ")}
              className="block font-bold text-stone-900 px-3 py-2 rounded-xl hover:bg-stone-50"
              onClick={scrollToTop}
            >
              FAQ
            </Link>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-white border-t border-stone-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link to="/" onClick={scrollToTop} className="flex items-center gap-3">
                <Logo className="w-10 h-10" />
                <div>
                  <p className="text-xl font-extrabold text-white">Caquelon.de</p>
                  <p className="text-xs text-stone-400">Dein Fondue-Guide</p>
                </div>
              </Link>
              <p className="text-stone-400 mt-4 text-xs leading-relaxed">
                Authentische Schweizer Rezepte, unabhängige Kaufberatung für Fonduetöpfe & Mengenrechner für gesellige Abende.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold text-amber-400 tracking-wider uppercase mb-4">Rezepte nach Kategorie</h3>
              <ul className="space-y-2 text-xs text-stone-300">
                <li><Link to={createPageUrl("SchweizerKaeseFondue")} onClick={scrollToTop} className="hover:text-white">Schweizer Käsefondue (Moitié-Moitié)</Link></li>
                <li><Link to={createPageUrl("FondueBourguignonne")} onClick={scrollToTop} className="hover:text-white">Fondue Bourguignonne (Fleisch in Öl)</Link></li>
                <li><Link to={createPageUrl("FondueChinoise")} onClick={scrollToTop} className="hover:text-white">Fondue Chinoise (Brühe)</Link></li>
                <li><Link to={createPageUrl("VeganesKaeseFondue")} onClick={scrollToTop} className="hover:text-white">Veganes Käsefondue</Link></li>
                <li><Link to={createPageUrl("SchokoladenFondue")} onClick={scrollToTop} className="hover:text-white">Schokoladenfondue</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-amber-400 tracking-wider uppercase mb-4">Kaufberater & Wissen</h3>
              <ul className="space-y-2 text-xs text-stone-300">
                <li><Link to={createPageUrl("CaquelonKaufen")} onClick={scrollToTop} className="hover:text-white">Caquelon kaufen (Keramik / Gusseisen)</Link></li>
                <li><Link to={createPageUrl("FondueKaese")} onClick={scrollToTop} className="hover:text-white">Fondue Käse AOP Ratgeber</Link></li>
                <li><Link to={createPageUrl("FondueAbendPlanen")} onClick={scrollToTop} className="hover:text-white">Fondue-Abend planen & Mengen</Link></li>
                <li><Link to={createPageUrl("FondueZubehoer")} onClick={scrollToTop} className="hover:text-white">Fondue Zubehör & Rechauds</Link></li>
                <li><Link to={createPageUrl("Raclette")} onClick={scrollToTop} className="hover:text-white">Raclette & Grills</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-amber-400 tracking-wider uppercase mb-4">Rechtliches & Teilen</h3>
              <ul className="space-y-2 text-xs text-stone-300 mb-4">
                <li><Link to={createPageUrl("Impressum")} onClick={scrollToTop} className="hover:text-white">Impressum</Link></li>
                <li><Link to={createPageUrl("Datenschutz")} onClick={scrollToTop} className="hover:text-white">Datenschutz</Link></li>
                <li><button type="button" onClick={() => setShowCookieBanner(true)} className="hover:text-white text-left cursor-pointer transition-colors">Datenschutzeinstellungen</button></li>
                <li><Link to={createPageUrl("FAQ")} onClick={scrollToTop} className="hover:text-white">FAQ</Link></li>
              </ul>
              <div className="flex items-center space-x-3 text-stone-400">
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook teilen" className="hover:text-amber-400 transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter teilen" className="hover:text-amber-400 transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp teilen" className="hover:text-amber-400 transition-colors"><MessageCircle className="w-5 h-5" /></a>
                <a href={socialLinks.email} aria-label="E-Mail teilen" className="hover:text-amber-400 transition-colors"><Mail className="w-5 h-5" /></a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-stone-800 pt-8 text-center text-xs text-stone-500 space-y-2">
            <p>* Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Die mit Sternchen (*) gekennzeichneten Links sind Partnerlinks / Werbung.</p>
            <p>&copy; {new Date().getFullYear()} Caquelon.de - Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <ScrollToTop />

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-stone-900 text-white border-t border-stone-800 p-4 z-[100] shadow-2xl">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-xs text-stone-300">
              <p className="font-bold text-white mb-1">🍪 Datenschutzeinstellungen</p>
              Wir nutzen Cookies, um dir ein optimales Website-Erlebnis zu bieten.
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <button onClick={() => handleCookieConsent('necessary')} className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200">Nur Notwendige</button>
              <button onClick={() => handleCookieConsent('all')} className="px-4 py-2 rounded-xl bg-red-900 hover:bg-red-800 text-white">Alle Akzeptieren</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
