const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  mode:'production',
  entry:path.resolve(__dirname,'./src/index.js'),
  devServer:{
    port:3000,
    open:true,
    contentBase:'./dist'
   },
  output:{
    filename:'index.js'
  },
  module:{
    noParse:/jquery/,
    rules:[{
      test:/\.js$/,
      use:[{
        loader:'babel-loader',
        options:{
          presets:[
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      }]
    }]
  },
  plugins:[
    new webpack.DllReference
    new webpack.IgnorePlugin(/\.\/locale/,/moment/),
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'./public/index.html')
    }),
    
  ]
}