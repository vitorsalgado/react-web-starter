'use strict'

require('dotenv').config()

const WebPack = require('webpack')
const Merge = require('webpack-merge').merge
const TerserPlugin = require('terser-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const Base = require('./base')
const Config = require('./configurations')
const Plugins = require('./plugins')

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
    path: Config.paths.build,
    filename: '[name].[chunkhash:8].js',
    publicPath: Config.publicPath,
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
          parse: {
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true
          }
        },
        parallel: true
      })
    ]
  },

  plugins: Plugins([new HtmlPlugin(HTMLOptions), new WebPack.DefinePlugin(Config.envsAsString)])
})
