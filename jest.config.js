const aliases = require('./aliases.js').default;

// Jest wants a different format than webpack
Object.keys(aliases).forEach((key) => {
  // we escape the @ in the aliases key
  aliases[`^\\${key}/(.*)`] = `${aliases[key]}/$1`;
  delete aliases[key];
});

module.exports = {
  coverageDirectory: '<rootDir>/local/coverage',
  setupFilesAfterEnv: ['<rootDir>/src/tests/unit/vueSetup.js'],
  preset: '@vue/cli-plugin-unit-jest',
  snapshotSerializers: ['jest-serializer-vue'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.{js,vue}',
    '!**/node_modules/**',
    'src/js/**/*.{js}',
  ],
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: {
    ...aliases,
  },
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    'vee-validate/dist/rules': 'babel-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!vee-validate/dist/rules)',
  ],
};
