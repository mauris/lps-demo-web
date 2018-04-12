require('dotenv').config({ silent: true });

const ngtools = require('@ngtools/webpack');
const webpackMerge = require('webpack-merge');
const commonPartial = require('./config/webpack.common');
const clientPartial = require('./config/webpack.client');
const serverPartial = require('./config/webpack.server');
const devPartial = require('./config/webpack.dev');
const prodPartial = require('./config/webpack.prod');
const { getAotPlugin } = require('./config/webpack.aot');

/**
 * Look in ./config folder for webpack.(...).js
 */
module.exports = (options, webpackOptions) => {
  options = options || {};

  if (options.aot) {
    console.log(`Running build for ${options.client ? 'client' : 'server'} with AoT Compilation`)
  }

  let serverConfig = webpackMerge({}, commonPartial, serverPartial, {
    plugins: [
      getAotPlugin('server', !!options.aot)
    ]
  });

  let clientConfig = webpackMerge({}, commonPartial, clientPartial, {
    plugins: [
      getAotPlugin('client', !!options.aot)
    ]
  });

  if (webpackOptions.p || process.env.NODE_ENV === 'production') {
    console.log('Performing production build...');
    clientConfig = webpackMerge({}, clientConfig, prodPartial);
  } else {
    clientConfig = webpackMerge({}, clientConfig, devPartial);
  }

  const configs = [];
  if (!options.aot) {
    configs.push(clientConfig, serverConfig);

  } else if (options.client) {
    configs.push(clientConfig);

  } else if (options.server) {
    configs.push(serverConfig);
  }

  return configs;
}
