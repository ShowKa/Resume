module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // pre-defined sets for a Vue application
    'plugin:vue/recommended',
    // standard linting rules
    'standard'
  ],
  plugins: [
    'vue'
  ],
  overrides: [{
    // rely on editor's formatter
    'files': ['*.vue'],
    'rules': {
      'space-before-function-paren': 'off',
      'vue/html-indent': 'off'
    }
  }],
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  globals: {
    expect: true
  }
}