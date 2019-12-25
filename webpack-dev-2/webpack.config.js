const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
module.exports = {
  mode:'production',
  entry:{
    index:'./src/index.js',
  },
  devServer:{
    open:true
  },

  devtool:'cheap-module-source-map',
  output:{
    filename:'[name].js',
    path: path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test:/^\.js(x)$/,
        exclude:/node_modules/,
        use:[{
          loader:'babel-loader',
          options:{
            preset:['@babel/preset-env']
          }
        }]
      }
    ]
  },
  plugins:[
    new HtmlPlugin({
      template:'./index.html'
    })
  ]
}