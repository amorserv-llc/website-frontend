/** @format */

const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const path = require('path');
const baseUrl = 'https://amorservconsulting.com';
const outputFolder = path.join(__dirname, "public");

const pages = [
  { url: "/", changefreq: "weekly", priority: 0.9 },
  { url: "/terms-condition", changefreq: "monthly", priority: 0.6 },
  { url: "/search-engine-optimization", changefreq: "weekly", priority: 0.7 },
  { url: "/social-media-marketing", changefreq: "weekly", priority: 0.7 },
  { url: "/email-marketing", changefreq: "weekly", priority: 0.7 },
  { url: "/search-engine-marketing", changefreq: "weekly", priority: 0.7 },
  { url: "/about-us", changefreq: "weekly", priority: 0.8 },
  { url: "/portfolio-page", changefreq: "weekly", priority: 0.7 },
  { url: "/blog", changefreq: "weekly", priority: 0.9 }, 
  { url: "/contact-us", changefreq: "weekly", priority: 0.7 },
  { url: "/thank-you", changefreq: "weekly", priority: 0.7 },
  { url: "/branding", changefreq: "weekly", priority: 0.7 },

];
const sitemapStream = new SitemapStream({ hostname: baseUrl });
(async () => {
  pages.forEach((page) => sitemapStream.write(page));
  sitemapStream.end();
  const sitemapXml = await streamToPromise(sitemapStream).then((data) =>
    data.toString()
  );
  fs.writeFileSync(path.join(outputFolder, "sitemap.xml"), sitemapXml);
  console.log(`Sitemap generated and saved to ${outputFolder}/sitemap.xml`);
})();
