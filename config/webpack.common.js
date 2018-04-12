const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { root } = require('./helpers');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: root('dist')
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'API_ENDPOINT',
      'PORT'
    ])
  ],

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          '@ngtools/webpack',
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: root('src/tsconfig.json') }
          },
          'angular-router-loader',
          'angular2-template-loader'
        ]
      },
      {
        test: /\.pug$/,
        include: root('src'),
        use: ['raw-loader', 'pug-html-loader']
      }
    ]
  }
};
