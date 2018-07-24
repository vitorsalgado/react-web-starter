'use strict'

const Path = require('path')
const Merge = require('webpack-merge')
const Common = require('./webpack.base')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Config = require('./config')
const Plugins = require('./webpack.plugins')

const { paths } = Config

module.exports = Merge(
  Common,
  {
    mode: 'production',
    bail: true,
    devtool: 'source-map',
    context: Path.join(__dirname, 'src'),
    output: {
      path: paths.build,
      filename: 'static/js/[name].[chunkhash:8].js',
      chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
      devtoolModuleFilenameTemplate: info =>
        Path
          .relative('./src', info.absoluteResourcePath)
          .replace(/\\/g, '/')
    },
    optimization: {
      splitChunks: { chunks: 'all', name: 'vendors' },
      runtimeChunk: true,
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            parse: {
              ecma: 8
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false
            },
            mangle: {
              safari10: true
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
          options: { limit: 10000, name: 'static/media/[name].[hash:8].[ext]' }
        }
      ]
    },
    plugins: Plugins(
      [
        new HtmlPlugin({
          inject: true,
          template: Config.paths.indexHTML,
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
          }
        }),
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash:8].css',
          chunkFilename: 'static/css/[name].[contenthash:8].chunk.css'
        })
      ]
    ),
    performance: {
      hints: 'error'
    }
  })
