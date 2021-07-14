'use strict'

const WebPack = require('webpack')
const DefinePlugin = WebPack.DefinePlugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Config = require('../../configs')
const resolvePath = require('../../configs/utils').resolvePath

const additionalPlugins = []

module.exports = ({ start = [], end = [] }) =>
  [
    new DefinePlugin(Config.envsAsString),
    ...start,
    ...additionalPlugins,
    new CopyWebpackPlugin({
      patterns: [
        {
          force: true,
          from: resolvePath('src/manifest.json'),
          to: resolvePath('dist'),
          transform: function (content, path) {
            return Buffer.from(
              JSON.stringify({
                ...JSON.parse(content.toString())
              })
            )
          }
        }
      ]
    }),
    ...end
  ].filter(plugin => plugin)
