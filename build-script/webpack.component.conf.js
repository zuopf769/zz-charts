'use strict'
const { merge } = require('webpack-merge')
const utils = require('./utils')
const config = require('./config')
const baseWebpackConfig = require('./webpack.base.conf')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')
const Components = require('../components')

const { fullName, cssSourceMap, extract } = config

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const externals = [
  {
    vue: 'vue',
    '@/utils': `${fullName}/lib/utils.js`,
    '@/core': `${fullName}/lib/core.js`,
    '@/constants': `${fullName}/lib/constants.js`
  },
  function (context, request, callback) {
    if (/^echarts|^zrender/.test(request)) {
      return callback(null, request)
    }
    callback()
  }
]

// webpack config
module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  entry: Components,
  output: {
    path: resolve('lib'),
    filename: '[name].common.js',
    publicPath: '/',
    globalObject: 'this',
    library: 'uix-charts',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      ...utils.styleLoaders({
        sourceMap: cssSourceMap,
        usePostCSS: true,
        extract: extract
      })
    ]
  },
  externals: externals,
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
})
