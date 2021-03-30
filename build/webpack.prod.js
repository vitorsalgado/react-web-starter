'use strict'

require('dotenv').config()

const Path = require('path')
const WebPack = require('webpack')
const Merge = require('webpack-merge').merge
const Base = require('./base')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Config = require('../configs')
const Plugins = require('./plugins')

const { paths } = Config

const HTMLOptions = {
  inject: true,
  template: paths.indexHTML,
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

  context: paths.sources,
  entry: {
    app: paths.indexJS
  },

  output: {
    path: paths.build,
    filename: '[name].[chunkhash:8].js',
    publicPath: Config.publicPath,
    chunkFilename: '[name].[chunkhash:8].chunk.js',
    devtoolModuleFilenameTemplate: info => Path.relative('./src', info.absoluteResourcePath).replace(/\\/g, '/')
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
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },

  plugins: Plugins([
    new HtmlPlugin(HTMLOptions),
    new WebPack.DefinePlugin(Config.envsAsString),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].chunk.css'
    })
  ])
})
