'use strict';

const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const dataObj = require('./data/data.json');

module.exports = {
  mode: 'development', // Set the mode to 'development' or 'production'
  entry: ['./src/app.js'],
  watch: true,
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    alias: {
      fonts: path.resolve(__dirname, 'src/assets/fonts'),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 9000,
    // Set up custom middleware before webpack-dev-middleware
    onBeforeSetupMiddleware: function (devServer) {
      devServer.app.get('/api/categories', function (req, res) {
        res.json(dataObj.categories);
      });
      devServer.app.get('/api/articles', function (req, res) {
        res.json(dataObj.articles); // Assuming articles data is available in data.json
      });

      // ... other custom middleware
    },
    // Set up custom middleware after webpack-dev-middleware
    onAfterSetupMiddleware: function (devServer) {
      devServer.app.get('/api/after', function (req, res) {
        res.send('Custom middleware after webpack-dev-middleware');
      });
    },
  },
};
