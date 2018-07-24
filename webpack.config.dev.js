'use strict'

require('dotenv').config()

const Path = require('path')
const WebPack = require('webpack')
const Base = require('./webpack.base')
const Merge = require('webpack-merge')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const Config = require('./config')
const Plugins = require('./webpack.plugins')

const { paths } = Config

module.exports = Merge(
  Base,
  {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: paths.build,
      hot: true,
      inline: true,
      open: true,
      clientLogLevel: 'none',
      host: '0.0.0.0',
      port: Config.devServer.port,
      historyApiFallback: true
    },
    output: {
      pathinfo: true,
      filename: 'static/js/bundle.js',
      chunkFilename: 'static/js/[name].chunk.js',
      publicPath: '/',
      devtoolModuleFilenameTemplate: info => Path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
    },
    plugins: Plugins([
      new HtmlWebPackPlugin({ inject: true, template: paths.indexHTML }),
      new InterpolateHtmlPlugin(process.env),
      new CaseSensitivePathsPlugin(),
      new WebPack.HotModuleReplacementPlugin()
    ]),
    performance: {
      hints: 'warning'
    }
  })
