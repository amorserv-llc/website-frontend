/** @format */

import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputFolder = path.join(__dirname, "public");
const baseUrl = "https://amorservconsulting.com";

console.log(outputFolder);
const pages = [
  { url: "/", changefreq: "weekly", priority: 0.9 },
  { url: "/about-us", changefreq: "weekly", priority: 0.8 },
  { url: "/contact-us", changefreq: "weekly", priority: 0.7 },
  { url: "/branding", changefreq: "weekly", priority: 0.7 },
  { url: "/thank-you", changefreq: "weekly", priority: 0.7 },
  { url: "/search-engine-optimization", changefreq: "weekly", priority: 0.7 },
  { url: "/social-media-marketing", changefreq: "weekly", priority: 0.7 },
  { url: "/email-marketing", changefreq: "weekly", priority: 0.7 },
  { url: "/search-engine-marketing", changefreq: "weekly", priority: 0.7 },
  { url: "/faq", changefreq: "weekly", priority: 0.7 },
  { url: "/portfolio", changefreq: "weekly", priority: 0.7 },
  { url: "/thank-you", changefreq: "monthly", priority: 0.6 },
  { url: "/terms/condition", changefreq: "monthly", priority: 0.6 },
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
