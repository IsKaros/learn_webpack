/*
 * @Author: your name
 * @Date: 2020-01-02 22:43:02
 * @LastEditTime : 2020-01-02 23:16:49
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn_webpack\webpack-optimization\webpack.config.react.js
 */
const path = require('path')
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  entry: {
    react: ['react', 'react-dom']
  },
  output: {
    filename: '_dll_[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: '_dll_[name]',
    libraryTarget: 'var'
  },
  plugins: [
    new webpack.DllPlugin({ // name === libarary
      name: '_dll_[name]', // 用于找到DLL的对应路径
      path: path.resolve(__dirname, 'dist', 'manifest.json')
    })
  ]
}