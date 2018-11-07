// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'indent': 0,
    'quotes': 0,
    'generator-star-spacing': 'off',
    'no-trailing-spaces': 'off',
    'semi': 'off',
    'keyword-spacing': 'off',
    'key-spacing': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-infix-ops': 'off',
    'no-useless-escape': 'off',
    'eqeqeq': 'off',
    'no-fallthrough': 'off',
    'no-tabs': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  globals: {
    "$": true,
    "jQuery": true,
    "AmCharts": false
  }
}
