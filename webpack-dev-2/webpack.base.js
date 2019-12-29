const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  mode:'production',
  entry:{
    index:'./src/index.js',
  },
  devServer:{
    open:true,
    before:function name(app) {
      app.get('/webpack',function (req,res) {
        res.json({todo:'learning-webpack-before'})
      })
    },
    // port:4400,
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        pathRewrite:{
          '/api':''
        }
      }
    }
  },
  resolve:{
    modules: ['node_modules'],
    // mainFields:['style','main'],
    // mainFiles:[],
    extensions:['.js','.css','.vue','.json'],
    alias:{
      bootstrap:'bootstrap/dist/css/bootstrap.css'
    }
  },
  devtool:'cheap-module-source-map',
  output:{
    filename:'[name].js',
    path: path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[{
          loader:'style-loader'
        },{
          loader:'css-loader'
        }]
      },
      {
        test:/\.js(x)$/,
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
    }),
    new webpack.DefinePlugin({
      'DEV':JSON.stringify(true)
    })
  ]
}