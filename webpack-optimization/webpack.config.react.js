const path = require('path')
const webpack = require('webpack')
module.exports = {
  mode:'development',
  entry:{
    react:['react','react-dom']
  },
  output:{
    filename:'__dll_[name].js',
    path:path.resolve(__dirname,'dist'),
    library:'__dll_[name]',
    libraryTarget:'var'
  },
  plugins:[
    new webpack.DllPlugin({ // name === libarary
      name:'__dll_[name]',
      path:path.resolve(__dirname,'dist','manifest.json')
    })
  ]
}