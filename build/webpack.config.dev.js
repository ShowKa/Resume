'use strict'
const webpack = require('webpack')
const {
  VueLoaderPlugin
} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development',
  entry: [
    // optional if file name is index.js
    './src/index.js'
  ],
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  module: {
    rules: [
      // enforce:pre means that
      // it will run before the other loaders and apply the linting rules
      // before the babel-loader kicks in and start processing.
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      // this loader config comes after vue-loader
      // vue-loader will split out single-file components into separate modules for html
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          // extract(or bundle) css into .css file
          MiniCssExtractPlugin.loader,
          'css-loader',
          // add prefix automatically (-moz, -webkit, -ms,,,)
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    // copy-webpack-plugin + write-file-plugin -> copy built files into /dist.
    // it's not required to copy src & static into /dist during development.
    // Because we use virtual directory which webpack-dev-server works.
    new CopyWebpackPlugin([{
      from: resolve('static/img'),
      to: resolve('dist/static/img'),
      toType: 'dir'
    }]),
    new WriteFilePlugin()
  ]
}