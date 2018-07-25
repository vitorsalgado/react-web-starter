'use strict'

const WebPack = require('webpack')
const SWPreCachePlugin = require('sw-precache-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const Config = require('./config')

const { envsAsString } = Config
const additionalPlugins = []

if (Config.isDebugMode) {
  additionalPlugins.push(new BundleAnalyzerPlugin({
    analyzerPort: Config.analyser.port,
    reportFilename: './reports/analyser.html'
  }))
}

module.exports = plugins =>
  [
    ...plugins,
    ...additionalPlugins,
    new SWPreCachePlugin(SWPreCacheOptions),
    new ManifestPlugin({ fileName: 'asset-manifest.json', publicPath: Config.publicURL }),
    new WebPack.DefinePlugin(envsAsString),
    new CleanPlugin(['dist'])
  ]
    .filter(plugin => plugin)

const SWPreCacheOptions = {
  minify: true,
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  filename: 'service-worker.js',
  logger (message) {
    if (message.indexOf('Total precache size is') === 0) {
      return
    }

    if (message.indexOf('Skipping static resource') === 0) {
      return
    }

    // eslint-disable-next-line
    console.log(message)
  },
  staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
}
