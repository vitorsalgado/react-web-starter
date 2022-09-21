'use strict'

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin', 'import', 'eslint-plugin-tsdoc', 'jsx-a11y', 'react'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-console': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-dupe-class-members': ['error'],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/no-inferrable-types': ['off'],

    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
      },
    ],
    'import/no-named-as-default': ['off'],
    'import/no-duplicates': ['off'],
    'import/no-mutable-exports': ['error'],
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    'import/no-self-import': ['error'],
    'import/export': ['error'],
    'import/no-deprecated': ['error'],
    'import/extensions': [
      'error',
      'never',
      {
        json: 'always',
      },
    ],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],

  ignorePatterns: [
    'configs/',
    'dist/',
    'tools/',
    'build/',
    'docs/',
    'coverage/',
    'bin/create-react-ts-web-starter/',
    '*.config.js',
  ],
}
