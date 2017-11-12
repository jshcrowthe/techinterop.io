module.exports = {
  globDirectory: "build/es6-bundled/public/",
  globPatterns: ["**/*.{js,html,json}"],
  swDest: "build/es6-bundled/public/service-worker.js",
  globIgnores: ["../../../workbox-cli-config.js"]
};
