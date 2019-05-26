// This is the webpack config used for unit tests.

// var utils = require('./utils')
var merge = require('webpack-merge')
var path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
var webpackConfig = merge({
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      }
    ]
  }
}, {})

// no need for app entry during tests
delete webpackConfig.entry

module.exports = webpackConfig
