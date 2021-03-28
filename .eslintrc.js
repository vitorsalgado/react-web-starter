module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin', 'eslint-plugin-tsdoc', 'react'],
  extends: ['plugin:@typescript-eslint/recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    jest: true,
    browser: true
  },
  globals: {
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true
  },
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error']
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  }
}
