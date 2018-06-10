const loaderMerge = require('@neutrinojs/loader-merge');

module.exports = {
  use: [
    '@neutrinojs/eslint',
    '@neutrinojs/react-components',
    'neutrino-preset-flow',
    '@neutrinojs/airbnb-base',
    [
      '@neutrinojs/library',
      {
        name: 'combo-router',
      },
    ],
    '@neutrinojs/jest',
    // Add flow support
    neutrino => {
      neutrino.config.module
        .rule('compile')
        .test(/\.js$/)
        .include.add('src')
        .add('test')
        .end()
        .use('babel')
        .loader('babel-loader')
        .options({
          presets: ['react'],
        });
    },
  ],
};
