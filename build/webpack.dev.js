'use strict'

require('dotenv').config()

const Path = require('path')
const Common = require('./base')
const Merge = require('webpack-merge').merge
const HtmlWebPackPlugin = require('html-webpack-plugin')
const Config = require('../configs')
const Plugins = require('./plugins')

const { paths } = Config

module.exports = Merge(Common.Opts, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: paths.build,
    hot: true,
    inline: true,
    clientLogLevel: 'none',
    host: '0.0.0.0',
    port: Config.devServer.port,
    historyApiFallback: true
  },
  output: {
    path: Path.join(process.cwd(), 'dist'),
    pathinfo: false,
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: info => Path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
  },
  plugins: Plugins([
    new HtmlWebPackPlugin({ inject: true, template: paths.indexHTML, templateParameters: Common.templateParameters })
  ]),
  performance: {
    hints: 'warning'
  }
})
