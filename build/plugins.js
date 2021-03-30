'use strict'

const WebPack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const WorkboxPlugin = require('workbox-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Config = require('../configs')
const resolvePath = require('../configs/utils').resolvePath

const additionalPlugins = []

module.exports = plugins =>
  [
    new CleanPlugin(),
    new WebPack.DefinePlugin(Config.envsAsString),
    ...plugins,
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
    new WorkboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true
    })
  ].filter(plugin => plugin)
