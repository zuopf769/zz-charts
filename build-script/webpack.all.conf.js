'use strict'
const path = require('path')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const utils = require('./utils')
const config = require('./config')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const { cssSourceMap, extract, devtool } = config

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const externals = [
  {
    vue: 'vue'
  },
  function (context, request, callback) {
    if (/^echarts|^zrender/.test(request)) {
      return callback(null, request)
    }
    callback()
  }
]

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: resolve('lib'),
    filename: `${config.pkgName}.common.js`,
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${config.pkgName}.css`, // Extract css to a single file
      ignoreOrder: false // Enable to remove warnings about conflicting order
    }),
    new BundleAnalyzerPlugin({
      analyzerPort: 8889
    })
  ],
  externals: externals,
  optimization: {
    minimize: true,
    sideEffects: true,
    concatenateModules: true,
    minimizer: [new TerserPlugin()]
  }
})
