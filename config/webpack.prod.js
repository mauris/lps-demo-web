const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common');
const { root } = require('./helpers');

module.exports = {
  devtool: 'nosources-source-map',

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      beautify: false,
      comments: false,
      mangle: {
        keep_fnames: true
      },
      output: {
        comments: false
      },
      compress: {
        warnings: false,
        drop_console: true,
        screw_ie8: true
      },
      sourceMap: false
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false
      },
      cssLoader: {
        minimize: true
      }
    })
  ]
};
