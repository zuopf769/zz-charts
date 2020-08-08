module.exports = {
  eslintIntegration: true,
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'avoid',
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: ['*.json', '*.config.js'],
      options: {
        printWidth: 50,
      },
    },
  ],
}
