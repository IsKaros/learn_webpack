const merge = require('webpack-merge')
const base = require('./webpack.base.js')

module.exports = merge.smart(base,{
  mode:'development'
})