/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://pearlmandesigns.com",
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/about": 0.8,
      "/portfolio": 0.9,
      "/contact": 0.8,
      "/partners": 0.6,
    };

    return {
      loc: path,
      changefreq: path === "/" ? "weekly" : "monthly",
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
