/* eslint-disable quotes */
const aliases = require('./aliases.js').default;

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import '@/sass/variables.scss'`,
      },
      scss: {
        additionalData: `@import '@/sass/variables.scss';`,
      },
    },
  },
  configureWebpack: {
    entry: '@js/main.js',
    resolve: {
      alias: aliases,
    },
  },
};
