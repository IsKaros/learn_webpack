var express = require('express')
const webpack = require('webpack')
const middle = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
const compiler = webpack(config);

let app = new express()
app.use(middle(compiler))

app.get('/webpack',function (req,res) {
  res.json({todo:'learning-webpack'})
})
app.listen('3000')