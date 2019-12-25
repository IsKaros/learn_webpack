const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')
const OptimizeCss= require('optimize-css-assets-webpack-plugin')
const TerserJS = require('terser-webpack-plugin')
const webpack = require('webpack')
console.log(require.resolve('jquery'));
module.exports = {
  optimization:{ // 优化项
    minimizer:[
      new TerserJS({
        exclude: /\/node_modules/,
        parallel: true,
      }),
      new OptimizeCss({
        filename:'css/main.css'
      })
    ]

    
  },
  devServer:{
    contentBase:'./src',
    progress:true,
    compress:true,

  },
  mode: 'production', //模式有两种，development和production（开发模式和生产模式）
  entry:"./src/index.js", // 入口文件，
  output:{
    filename:'bundle.js', // 打包出来的文件名 空配置/不写的情况下为main.js
    path:path.resolve(__dirname,'dist'), // 打包的文件路径，必须为绝对路径
  },
  module:{
    rules:[
      // { test: require.resolve("jquery"), loader: "expose-loader?$" },
      //  {
      //   test:/\.html$/,
      //   use:[{
      //     loader:'html-withimg-loader'
      //   }]
      // },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        },{
          loader: 'expose-loader',
          options: '$'
        }]
      },
     
      {
        test:/\.(png|jpe?g|gif)$/,
        use:[{
          loader: 'file-loader',
          options:{
            outputPath:'img'
          }
          
        },{
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        }]
      },

      {
        test:/\.js$/,
        use:[{
          loader:'eslint-loader',
          options:{
          }
        }],
        exclude: /node_modules/,
      },
      {
        test:/\.js$/,
        include:path.resolve(__dirname,'src'),
        exclude:/node_modules/,
        use:[{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env'], // 允许使用最新版的JavaScript语法，不含处于草案任意阶段的语法
            plugins:[
              ["@babel/plugin-proposal-decorators", { "legacy": true }],// 允许使用未被正式写入规范的装饰器语法
              ["@babel/plugin-proposal-class-properties", { "loose" : true }],
              "@babel/plugin-transform-runtime",
            ] 
          }
          
        }]  
      },
    {
      test:/\.css$/,
      use:[{loader:MiniCssExtract.loader},{loader:'css-loader'}]
    }]
  },
  plugins:[
    new htmlWebpackPlugin({
      template: './src/index.html',
      minify:{
        collapseWhitespace:true,
        removeAttributeQuotes:true
      },
      hash:true
    }),
    // 配置和output差不多
    new MiniCssExtract({
      filename:'[name].css', 
    }),
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery'
    // })
  ]
}