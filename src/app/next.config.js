require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');
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
      const newConfig = config;

      newConfig.plugins = config.plugins || [];

      newConfig.plugins = [
        ...newConfig.plugins,

        // Read the .env file
        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true,
        }),
      ];

      return newConfig;
    },
  },
]);
