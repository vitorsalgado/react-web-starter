'use strict'

const Pkg = require('./package.json')
const Configs = require('./configs')

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/transform-runtime',
    ['babel-plugin-styled-components', { displayName: !Configs.isProduction, namespace: Pkg.name }]
  ]
}
