'use strict'

const WebPack = require('webpack')
const EnvironmentPlugin = WebPack.EnvironmentPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Config = require('../../configs')
const resolvePath = require('../../configs/utils').resolvePath

const additionalPlugins = []

module.exports = ({ start = [], end = [] }) =>
  [
    new EnvironmentPlugin({
      NODE_ENV: Config.env,
      PUBLIC_URL: Config.publicPath
    }),
    ...start,
    ...additionalPlugins,
    new CopyWebpackPlugin({
      patterns: [
        {
          force: true,
          from: resolvePath('src/manifest.json'),
          to: Config.paths.buildDestination,
          transform: function (content, path) {
            return Buffer.from(
              JSON.stringify({
                ...JSON.parse(content.toString())
              })
            )
          }
        },
        {
          force: true,
          from: resolvePath('src/favicon.ico'),
          to: Config.paths.buildDestination
        }
      ]
    }),
    ...end
  ].filter(plugin => plugin)
