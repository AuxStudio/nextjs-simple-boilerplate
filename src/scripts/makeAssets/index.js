const fs = require('fs');

const formatDate = require('./formatDate');

const getPathsObject = require('./getPagePaths');

const app = require('../../app/config/app');

const pathsObj = getPathsObject();

// ROBOTS.txt
const robotsTxt = `User-agent: *
Sitemap: ${app.url}/sitemap.xml
Disallow:`;

fs.writeFileSync('src/public/robots.txt', robotsTxt);

// Sitemap
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${Object.keys(pathsObj).map(
    (path) => `<url>
    <loc>${app.url}${path}</loc>
    <lastmod>${formatDate(new Date(pathsObj[path].lastModified))}</lastmod>
  </url>`,
  )}
</urlset>`;

fs.writeFileSync('src/public/sitemap.xml', sitemapXml);
