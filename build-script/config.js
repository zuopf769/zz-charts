const isProd = process.env.NODE_ENV === 'production'
const isTest = process.env.BABEL_ENV === 'test'

module.exports = {
  namespace: 'uix',
  pkgName: 'uix-charts',
  fullName: '@xgfe/uix-charts',
  host: '127.0.0.1',
  port: 8088,
  isProd: isProd,
  isTest: isTest,
  publicPath: isProd ? '/uix-charts/' : '/',
  devtool: isProd ? '#source-map' : 'cheap-module-eval-source-map',
  cssSourceMap: isProd ? false : true,
  extract: isProd ? true : false
}
