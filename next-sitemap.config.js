/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://andrewhu.dev",
  generateRobotsTxt: true, // (optional)
  // ...other options
};
