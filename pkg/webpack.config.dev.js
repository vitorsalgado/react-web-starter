require('dotenv').config()

const Path = require('path')
const Common = require('./base')
const Merge = require('webpack-merge')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const Config = require('../config')
const Plugins = require('./plugins')

const { paths } = Config

module.exports = Merge(
  Common.Opts,
  {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    watch: true,
    devServer: {
      contentBase: paths.build,
      inline: true,
      clientLogLevel: 'none',
      host: '0.0.0.0',
      port: Config.devServer.port,
      historyApiFallback: true
    },
    output: {
      pathinfo: false,
      filename: 'static/js/bundle.js',
      chunkFilename: 'static/js/[name].chunk.js',
      publicPath: '/',
      devtoolModuleFilenameTemplate: info =>
        Path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
    },
    plugins: Plugins([
      new HtmlWebPackPlugin(
        { inject: true, template: paths.indexHTML, templateParameters: Common.templateParameters })
    ]),
    performance: {
      hints: 'warning'
    }
  })
