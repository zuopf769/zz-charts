module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    env: {
      es6: true
    },
    sourceType: 'module'
  },
  globals: {
    process: 'readonly',
    require: 'readonly',
    __dirname: 'readonly',
    module: 'readonly',
    exports: 'readonly'
  },
  plugins: ['prettier', 'vue'],
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended', // 使用prettier中的样式规范
    'eslint:recommended'
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'array-bracket-spacing': 2,
    // prettier方法名后面会自动去掉空格，为了避免冲突只能
    'space-before-function-paren': 0,
    'no-var': 2,
    'no-eval': 0,
    'comma-dangle': 0,
    'arrow-spacing': 2,
    'block-spacing': 2,
    'key-spacing': 2,
    'brace-style': 2,
    'object-curly-spacing': [2, 'always'],
    'no-useless-escape': 0,
    'prefer-spread': 0,
    'vue/camelcase': 2,
    'vue/require-component-is': 0,
    'vue/require-default-prop': 0,
    'vue/eqeqeq': [2, 'always', { null: 'ignore' }],
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-closing-bracket-newline': [
      2,
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/max-attributes-per-line': 0,
    'vue/html-self-closing': [
      2,
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/no-v-html': 0
  }
}
