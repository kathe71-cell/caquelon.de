import React, { useEffect } from 'react';

export default function SEOHead({ 
  title = "Caquelon.de - Dein Fondue-Guide für gesellige Abende",
  description = "Authentische Fondue-Rezepte und Caquelon-Kaufberatung. Von Schweizer Käsefondue bis Schokoladenfondue - alles für gesellige Abende.",
  keywords = "Caquelon, Fondue, Käsefondue, Fleischfondue, Schokoladenfondue, Schweizer, Rezepte, Fonduetopf",
  canonical = "https://www.caquelon.de",
  ogType = "website",
  ogImage = "https://www.caquelon.de/og-image.svg",
  structuredData = null,
  gaMeasurementId = null
}) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper function to set or create meta tags
    const setMetaTag = (attrName, attrValue, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper function to set or create link tags
    const setLinkTag = (rel, href, extraAttrs = {}) => {
      if (!href) return;
      let selector = `link[rel="${rel}"]`;
      if (extraAttrs.hreflang) {
        selector += `[hreflang="${extraAttrs.hreflang}"]`;
      }
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        Object.entries(extraAttrs).forEach(([k, v]) => element.setAttribute(k, v));
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Standard Meta
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMetaTag('name', 'googlebot', 'index, follow');
    setMetaTag('name', 'language', 'de');
    setMetaTag('name', 'author', 'Caquelon.de');
    setMetaTag('name', 'geo.region', 'DE');
    setMetaTag('name', 'geo.country', 'de');
    setMetaTag('name', 'theme-color', '#8B2E2E');

    // 3. Canonical & Language Links
    setLinkTag('canonical', canonical);
    setLinkTag('alternate', canonical, { hreflang: 'de' });
    setLinkTag('alternate', canonical, { hreflang: 'x-default' });

    // 4. Open Graph Meta Tags
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonical);
    setMetaTag('property', 'og:site_name', 'Caquelon.de');
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:locale', 'de_DE');

    // 5. Twitter Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 6. JSON-LD Structured Data
    const scriptId = 'seo-structured-data';
    let scriptElement = document.getElementById(scriptId);
    if (structuredData) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(structuredData);
    } else if (scriptElement) {
      scriptElement.remove();
    }

    // 7. Optional Google Analytics (GA4) Auto-Injector
    if (gaMeasurementId) {
      const gaScriptId = 'ga4-script';
      if (!document.getElementById(gaScriptId)) {
        const gaScript = document.createElement('script');
        gaScript.id = gaScriptId;
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
        document.head.appendChild(gaScript);

        const gaInitScript = document.createElement('script');
        gaInitScript.textContent = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaMeasurementId}');
        `;
        document.head.appendChild(gaInitScript);
      }
    }
  }, [title, description, keywords, canonical, ogType, ogImage, structuredData, gaMeasurementId]);

  return (
    <>
      <div
        className="hidden"
        style={{ display: 'none' }}
        data-ssr-title={title}
        data-ssr-desc={description}
        data-ssr-canonical={canonical}
      />
      {structuredData && (
        <script
          id="seo-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </>
  );
}