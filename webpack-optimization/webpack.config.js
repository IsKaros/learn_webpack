/*
 * @Author: your name
 * @Date: 2020-01-02 22:43:02
 * @LastEditTime : 2020-01-02 23:13:54
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn_webpack\webpack-optimization\webpack.config.js
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/index.js'),
  devServer: {
    port: 3000,
    open: true,
    contentBase: './dist'
  },
  output: {
    filename: 'index.js'
  },
  module: {
    noParse: /jquery/,
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      }]
    }]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, 'dist', 'manifest.json')
    }),
    new webpack.IgnorePlugin(/\.\/locale/, /moment/),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),

  ]
}