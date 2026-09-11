import React, { useEffect } from 'react';
import { createPageUrl } from '@/utils';

export default function Sitemap() {
  useEffect(() => {
    // Generate XML sitemap
    const baseUrl = 'https://caquelon.de';
    const today = new Date().toISOString().split('T')[0];
    
    const pages = [
      { url: '/', priority: '1.0', changefreq: 'weekly', lastmod: today },
      { url: createPageUrl('CaquelonKaufen'), priority: '0.9', changefreq: 'weekly', lastmod: today },
      { url: createPageUrl('FondueRezepte'), priority: '0.9', changefreq: 'weekly', lastmod: today },
      { url: createPageUrl('FondueZubehoer'), priority: '0.8', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('FondueAbendPlanen'), priority: '0.8', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('FondueKaese'), priority: '0.8', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('Raclette'), priority: '0.8', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('RacletteKaese'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      
      // Käsefondue Rezepte
      { url: createPageUrl('SchweizerKaeseFondue'), priority: '0.8', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('KaeseFondueOhneAlkohol'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('BierkaeseFondue'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('TomatenFondue'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('ChiliCheeseFondue'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('ChampagnerFondue'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('GorgonzolaFondue'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('MoitieMoitie'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      
      // Fleisch & Vegan
      { url: createPageUrl('FondueBourguignonne'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('FondueChinoise'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('VeganesKaeseFondue'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('RotweinFondue'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('AsiaFondue'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('FondueBacchus'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('ShabuShabu'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      
      // Dessert Fondues
      { url: createPageUrl('SchokoladenFondue'), priority: '0.8', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('WeisseSchokoladenFondue'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('NutellaFondue'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('TobleroneFondue'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('KaramellFondue'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('ChiliSchokoFondue'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('BaileysFondue'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('EinhornFondue'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('KokosLimettenFondue'), priority: '0.7', changefreq: 'monthly', lastmod: today },
      
      // Legal
      { url: createPageUrl('FAQ'), priority: '0.6', changefreq: 'monthly', lastmod: today },
      { url: createPageUrl('Impressum'), priority: '0.3', changefreq: 'yearly', lastmod: today },
      { url: createPageUrl('Datenschutz'), priority: '0.3', changefreq: 'yearly', lastmod: today },
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    // Set content type and display XML
    document.body.innerHTML = `<pre style="font-family: monospace; padding: 20px;">${xml.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`;
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">XML Sitemap wird generiert...</h1>
        <p className="text-gray-600">
          Diese Seite generiert automatisch eine XML-Sitemap für Suchmaschinen.
        </p>
        <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-lg">
          <h2 className="font-semibold text-amber-900 mb-2">📋 Anleitung für Google Search Console:</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
            <li>Kopiere den XML-Code oben</li>
            <li>Erstelle eine Datei "sitemap.xml" in deinem Website-Root</li>
            <li>Füge den XML-Code ein</li>
            <li>Reiche die Sitemap in der Google Search Console ein: <code className="bg-white px-2 py-1 rounded">https://caquelon.de/sitemap.xml</code></li>
          </ol>
        </div>
      </div>
    </div>
  );
}