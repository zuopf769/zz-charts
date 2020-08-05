const isProd = process.env.NODE_ENV === 'production'
const isTest = process.env.BABEL_ENV === 'test'

module.exports = {
  namespace: 'uix',
  pkgName: 'uix-charts',
  fullName: '@xgfe/uix-charts',
  port: 8088,
  isProd: isProd,
  isTest: isTest,
  publicPath: isProd ? '/uix-charts/' : '/',
}
