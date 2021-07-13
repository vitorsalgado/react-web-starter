'use strict'

require('dotenv').config()

const Path = require('path')
const Base = require('./webpack-base')
const Webpack = require('webpack')
const WebpackManifestPlugin = require('webpack-manifest-plugin').WebpackManifestPlugin
const Merge = require('webpack-merge').merge
const HtmlWebPackPlugin = require('html-webpack-plugin')
const Config = require('./config')
const Plugins = require('./webpack-plugins')

const { paths } = Config

module.exports = Merge(Base, {
  mode: 'development',
  devtool: 'source-map',
  bail: false,

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
    clean: true
  },

  plugins: Plugins([
    new WebpackManifestPlugin({ fileName: 'asset-manifest.json', publicPath: Config.publicPath }),
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      inject: true,
      template: paths.indexHTML,
      templateParameters: () => Config.vars
    })
  ])
})
