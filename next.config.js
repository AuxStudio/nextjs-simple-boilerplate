const withImages = require('next-images');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');

const fontsConfig = {};
const imagesConfig = {};

module.exports = withPlugins([
  [withFonts, fontsConfig],
  [withImages, imagesConfig],
  {
    webpack: (config) => {
      return config;
    },
  },
]);
