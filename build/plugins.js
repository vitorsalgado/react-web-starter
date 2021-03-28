'use strict'

const WebPack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin').WebpackManifestPlugin
const CleanPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const WorkboxPlugin = require('workbox-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Config = require('./config')
const { resolvePath } = require('./config/utils')

const additionalPlugins = []

if (Config.isDebugMode) {
  additionalPlugins.push(
    new BundleAnalyzerPlugin({ analyzerPort: Config.analyser.port, reportFilename: './reports/analyser.html' })
  )
}

module.exports = plugins =>
  [
    new CleanPlugin(),
    new WebPack.DefinePlugin(Config.envsAsString),
    ...plugins,
    ...additionalPlugins,
    new ManifestPlugin({ fileName: 'asset-manifest.json', publicPath: Config.publicPath }),
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
        },
        {
          force: true,
          from: resolvePath('site/favicon.ico'),
          to: resolvePath('dist')
        },
        {
          force: true,
          from: resolvePath('site/static/images'),
          to: resolvePath('dist/static/media'),
          noErrorOnMissing: true
        }
      ]
    }),
    new WorkboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true
    })
  ].filter(plugin => plugin)
