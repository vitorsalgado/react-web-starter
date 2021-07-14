'use strict'

require('dotenv').config()

const Merge = require('webpack-merge').merge
const TerserPlugin = require('terser-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const Base = require('./webpack-base')
const Config = require('../../configs')
const Plugins = require('./webpack-plugins')

const HTMLOptions = {
  inject: true,
  template: Config.paths.indexHTML,
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: false,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true
  },
  templateParameters: () => Config.vars
}

module.exports = Merge(Base, {
  mode: 'production',
  bail: true,

  output: {
    path: Config.paths.buildDestination,
    publicPath: Config.publicPath,
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
    clean: true
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    runtimeChunk: 'single',
    nodeEnv: 'production',
    mangleWasmImports: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {},
          compress: {
            warnings: false,
            comparisons: false,
            inline: 2
          },
          output: {
            comments: false,
            ascii_only: true
          }
        },
        parallel: true
      })
    ]
  },

  plugins: Plugins({
    start: [new HtmlPlugin(HTMLOptions)],
    end: [
      new WorkboxPlugin.GenerateSW({
        swDest: 'sw.js',
        clientsClaim: true,
        skipWaiting: true
      })
    ]
  })
})
