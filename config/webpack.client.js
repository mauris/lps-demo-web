const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { root } = require('./helpers');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const autoprefixer = require('autoprefixer');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
  entry: {
    'polyfills': root('src/polyfills.ts'),
    'vendor': root('src/vendor.ts'),
    'app': root('src/main.ts')
  },

  output: {
    filename: '[name].client.js'
  },

  target: 'web',

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),

    new CopyWebpackPlugin(
      [
        {
          from: 'src/assets',
          to: 'assets'
        }
      ]
    ),

    new HtmlWebpackPlugin({
      favicon: root('src/favicon.ico'),
      template: root('src/index.pug')
    }),

    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      root('src')
    ),

    new webpack.LoaderOptionsPlugin({
      postcss: [autoprefixer],
    }),

    new ScriptExtPlugin({
      defaultAttribute: 'defer'
    })
  ],

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/,
        use: ['file-loader?name=assets/[name].[hash].[ext]']
      },
      {
        test: /favicon\.ico$/,
        use: ['file-loader?name=[name].[ext]']
      },
      {
        test: /.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            'less-loader'
          ]
        })
      },
      {
        test: /.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  },
};
