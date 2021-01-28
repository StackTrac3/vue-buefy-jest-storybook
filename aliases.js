const path = require('path');

const resolvedAliases = {};

// jest config backslashes escaping @.
// TODO fix escaping if you add other aliases

Object.entries({
  '@components': 'src/components',
  '@atoms': 'src/components/atoms',
  '@molecules': 'src/components/molecules',
  '@organisms': 'src/components/organisms',
  '@pages': 'src/components/pages',
  '@templates': 'src/components/templates',
  '@stories': 'src/stories',
  '@js': 'src/js',
  '@models': 'src/models',
}).forEach((entry) => {
  resolvedAliases[entry[0]] = path.resolve(__dirname, entry[1]);
});

exports.default = resolvedAliases;
