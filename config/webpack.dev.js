const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { root } = require('./helpers');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
};
