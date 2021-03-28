'use strict'

const Path = require('path')
const WebPack = require('webpack')
const Merge = require('webpack-merge')
const Common = require('./base')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Config = require('./config')
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
  templateParameters: Common.templateParameters
}

module.exports = Merge(Common.Opts, {
  mode: 'production',
  bail: true,
  devtool: 'nosources-source-map',
  context: paths.sources,
  entry: {
    app: paths.indexJS
  },
  output: {
    path: paths.build,
    filename: 'static/js/[name].[chunkhash:8].js',
    publicPath: Config.publicPath,
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    devtoolModuleFilenameTemplate: info => Path.relative('./src', info.absoluteResourcePath).replace(/\\/g, '/')
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
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
        parallel: true,
        cache: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  module: {
    strictExportPresence: true,
    rules: [
      { parser: { requireEnsure: false } },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: { limit: 10000, name: 'static/media/[name].[contenthash:8].[ext]' }
      }
    ]
  },
  plugins: Plugins([
    new HtmlPlugin(HTMLOptions),
    new WebPack.DefinePlugin(Config.envsAsString),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css'
    })
  ]),
  performance: {
    hints: 'warning'
  }
})
