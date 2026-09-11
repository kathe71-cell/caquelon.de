import React, { useEffect } from 'react';

export default function Robots() {
  useEffect(() => {
    const robotsTxt = `# Robots.txt für caquelon.de
# Aktualisiert: ${new Date().toISOString().split('T')[0]}

User-agent: *
Allow: /

# Wichtige Seiten priorisieren
Allow: /Home
Allow: /CaquelonKaufen
Allow: /FondueRezepte
Allow: /FondueZubehoer
Allow: /Raclette

# Rezeptseiten
Allow: /SchweizerKaeseFondue
Allow: /SchokoladenFondue
Allow: /FondueBourguignonne

# Keine blockierten Bereiche
Disallow:

# Sitemap-Referenz
Sitemap: https://caquelon.de/sitemap.xml

# Crawl-Verzögerung (optional)
Crawl-delay: 1`;

    document.body.innerHTML = `<pre style="font-family: monospace; padding: 20px; white-space: pre-wrap;">${robotsTxt}</pre>`;
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Robots.txt wird generiert...</h1>
        <p className="text-gray-600">Diese Seite generiert eine robots.txt-Datei für Suchmaschinen.</p>
        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h2 className="font-semibold text-blue-900 mb-2">📋 Anleitung:</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
            <li>Kopiere den Text oben</li>
            <li>Erstelle eine Datei "robots.txt" im Website-Root</li>
            <li>Füge den Text ein</li>
            <li>Stelle sicher, dass die Datei unter <code className="bg-white px-2 py-1 rounded">https://caquelon.de/robots.txt</code> erreichbar ist</li>
          </ol>
        </div>
      </div>
    </div>
  );
}