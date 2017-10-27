const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: '#source-map',
  entry: {
    main: path.join(__dirname, 'app/index.js')
  },
  output: {
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    filename: 'bundle.js',
    historyApiFallback: true,
    proxy: {
      "**": `http://localhost:${process.env.PORT}`
    }
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory',
        include: [
          path.join(__dirname, 'app')
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'url-loader',
        options: {
            name: 'assets/[hash].[ext]',
            limit: 10000,
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader'),
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('css-loader!less-loader'),
        exclude: /node_modules/
      }
    ]
  }
};
