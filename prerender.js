import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist-ssr/entry-server.js');

const sitemapContent = fs.readFileSync(toAbsolute('public/sitemap.xml'), 'utf-8');
const locMatches = [...sitemapContent.matchAll(/<loc>https:\/\/www\.caquelon\.de(.*?)<\/loc>/g)];
const sitemapRoutes = locMatches.map(m => m[1] || '/');

const routes = Array.from(new Set([
  '/',
  ...sitemapRoutes,
  '/rechnerembed'
]));

console.log(`Starting prerendering of ${routes.length} routes for caquelon.de...`);

for (const url of routes) {
  try {
    const { html: appHtml } = render(url);
    let html = template.replace(/<div id="root"[^>]*><\/div>/, `<div id="root">${appHtml}</div>`);

    const titleMatch = appHtml.match(/data-ssr-title="(.*?)"/);
    const descMatch = appHtml.match(/data-ssr-desc="(.*?)"/);
    const canMatch = appHtml.match(/data-ssr-canonical="(.*?)"/);

    if (titleMatch && titleMatch[1]) {
      const pageTitle = titleMatch[1];
      html = html.replace(/<title>.*?<\/title>/, `<title>${pageTitle}</title>`);
      html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${pageTitle}" />`);
      html = html.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${pageTitle}" />`);
    }

    if (descMatch && descMatch[1]) {
      const pageDesc = descMatch[1];
      html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${pageDesc}" />`);
      html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${pageDesc}" />`);
      html = html.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${pageDesc}" />`);
    }

    const canonicalUrl = (canMatch && canMatch[1]) || `https://www.caquelon.de${url === '/' ? '/' : url}`;
    html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`);
    html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`);

    const filePath = url === '/' ? 'dist/index.html' : `dist${url}/index.html`;
    const fullPath = toAbsolute(filePath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, html);
    console.log(`  ✓ ${url} -> ${filePath} (${(html.length / 1024).toFixed(1)} kB)`);
  } catch (err) {
    console.error(`  ✗ Error prerendering ${url}:`, err);
    process.exit(1);
  }
}

console.log('Prerendering complete!');
