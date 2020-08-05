const { isTest } = require('./build/config')

module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
  ]

  const plugins = [
    '@babel/plugin-transform-runtime',
  ]

  if (isTest) {
    plugins.push([
      'istanbul',
      {
        include: ['src/**/*'],
      },
    ])
  }

  return {
    presets,
    plugins,
  }
}
