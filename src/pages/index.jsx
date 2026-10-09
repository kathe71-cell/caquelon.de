import Projektuebernahme from "./ProjektuebernahmePage";
import Layout from "./Layout.jsx";
import VercelAnalytics from "@/components/VercelAnalytics.jsx";

import AsiaFondue from "./AsiaFondue";
import BaileysFondue from "./BaileysFondue";
import BierkaeseFondue from "./BierkaeseFondue";
import CaquelonKaufen from "./CaquelonKaufen";
import ChampagnerFondue from "./ChampagnerFondue";
import ChiliCheeseFondue from "./ChiliCheeseFondue";
import ChiliSchokoFondue from "./ChiliSchokoFondue";
import Datenschutz from "./Datenschutz";
import EinhornFondue from "./EinhornFondue";
import FAQ from "./FAQ";
import FondueAbendPlanen from "./FondueAbendPlanen";
import FondueBacchus from "./FondueBacchus";
import FondueBourguignonne from "./FondueBourguignonne";
import FondueChinoise from "./FondueChinoise";
import FondueKaese from "./FondueKaese";
import FondueRezepte from "./FondueRezepte";
import FondueZubehoer from "./FondueZubehoer";
import GorgonzolaFondue from "./GorgonzolaFondue";
import Home from "./Home";
import Impressum from "./Impressum";
import KaeseFondueOhneAlkohol from "./KaeseFondueOhneAlkohol";
import KaramellFondue from "./KaramellFondue";
import KokosLimettenFondue from "./KokosLimettenFondue";
import MoitieMoitie from "./MoitieMoitie";
import NutellaFondue from "./NutellaFondue";
import PistazienFondue from "./PistazienFondue";
import Raclette from "./Raclette";
import RacletteKaese from "./RacletteKaese";
import RotweinFondue from "./RotweinFondue";
import SchokoladenFondue from "./SchokoladenFondue";
import SchweizerKaeseFondue from "./SchweizerKaeseFondue";
import ShabuShabu from "./ShabuShabu";
import TobleroneFondue from "./TobleroneFondue";
import TomatenFondue from "./TomatenFondue";
import VeganesFondue from "./VeganesFondue";
import VeganesKaeseFondue from "./VeganesKaeseFondue";
import WeisseSchokoladenFondue from "./WeisseSchokoladenFondue";
import Sitemap from "./Sitemap";
import Robots from "./Robots";
import RechnerEmbed from "./RechnerEmbed";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    Projektuebernahme: Projektuebernahme,
    Home: Home,
    AsiaFondue: AsiaFondue,
    BaileysFondue: BaileysFondue,
    BierkaeseFondue: BierkaeseFondue,
    CaquelonKaufen: CaquelonKaufen,
    ChampagnerFondue: ChampagnerFondue,
    ChiliCheeseFondue: ChiliCheeseFondue,
    ChiliSchokoFondue: ChiliSchokoFondue,
    Datenschutz: Datenschutz,
    EinhornFondue: EinhornFondue,
    FAQ: FAQ,
    FondueAbendPlanen: FondueAbendPlanen,
    FondueBacchus: FondueBacchus,
    FondueBourguignonne: FondueBourguignonne,
    FondueChinoise: FondueChinoise,
    FondueKaese: FondueKaese,
    FondueRezepte: FondueRezepte,
    FondueZubehoer: FondueZubehoer,
    GorgonzolaFondue: GorgonzolaFondue,
    Impressum: Impressum,
    KaeseFondueOhneAlkohol: KaeseFondueOhneAlkohol,
    KaramellFondue: KaramellFondue,
    KokosLimettenFondue: KokosLimettenFondue,
    KäseFondueOhneAlkohol: KaeseFondueOhneAlkohol,
    MoitieMoitie: MoitieMoitie,
    NutellaFondue: NutellaFondue,
    PistazienFondue: PistazienFondue,
    Raclette: Raclette,
    RacletteKaese: RacletteKaese,
    RotweinFondue: RotweinFondue,
    SchokoladenFondue: SchokoladenFondue,
    SchweizerKaeseFondue: SchweizerKaeseFondue,
    SchweizerKäseFondue: SchweizerKaeseFondue,
    SchwezerKäseFondue: SchweizerKaeseFondue,
    ShabuShabu: ShabuShabu,
    TobleroneFondue: TobleroneFondue,
    TomatenFondue: TomatenFondue,
    VeganesFondue: VeganesFondue,
    VeganesKaeseFondue: VeganesKaeseFondue,
    WeisseSchokoladenFondue: WeisseSchokoladenFondue,
    Sitemap: Sitemap,
    Robots: Robots,
    RechnerEmbed: RechnerEmbed,
}

function _getCurrentPage(url) {
    if (url.endsWith('/') && url.length > 1) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    if (!urlLastPart || urlLastPart === '') return 'Home';

    const normalizedLastPart = urlLastPart.replace(/[-_]/g, '').toLowerCase();
    const pageName = Object.keys(PAGES).find(page => {
        const normalizedPage = page.toLowerCase();
        return normalizedPage === normalizedLastPart || normalizedPage === urlLastPart.toLowerCase();
    });
    return pageName || 'Home';
}

// Create a wrapper component that uses useLocation inside the Router context
export function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    const Component = PAGES[currentPage] || Home;

    if (currentPage === 'RechnerEmbed') {
        return <Component />;
    }
    
    return (
        <Layout currentPageName={currentPage}>
            <Component />
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <VercelAnalytics />
            <PagesContent />
        </Router>
    );
}