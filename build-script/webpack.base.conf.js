'use strict'
const path = require('path')
const config = require('./config')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const { pkgName, fullName } = config

module.exports = {
  context: path.resolve(__dirname, '../'),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.common.js',
      '@': resolve('src'),
      '@examples': resolve('examples'),
      examples: resolve('examples'),
      '@test': resolve('test/unit'),
      [fullName]: resolve(''),
      [pkgName]: resolve('')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              formatter: require('eslint-friendly-formatter')
            }
          }
        ],
        enforce: 'pre',
        include: [resolve('src'), resolve('examples'), path.resolve('node_modules/resize-detector')]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          {
            loader: path.resolve(__dirname, './source-doc-loader/index.js')
          }
        ]
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: [resolve('src'), resolve('examples'), resolve('node_modules/resize-detector')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
              esModule: false,
              name: 'img/[name].[hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
              esModule: false,
              name: 'fonts/[name].[hash:7].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
}
