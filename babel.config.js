module.exports = {
  presets: [
    [
      'airbnb',
      {
        targets: {
          node: '6.10',
        },
        useBuiltIns: 'usage',
        corejs: '3.6.4',
      },
    ],
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
};
