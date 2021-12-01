'use strict'

require('dotenv').config()

const Base = require('./webpack-base')
const WebpackManifestPlugin = require('webpack-manifest-plugin').WebpackManifestPlugin
const Merge = require('webpack-merge').merge
const HtmlWebPackPlugin = require('html-webpack-plugin')
const Config = require('../../configs')
const Plugins = require('./webpack-plugins')

const { paths } = Config

module.exports = Merge(Base, {
  mode: 'development',
  devtool: 'source-map',
  bail: false,

  devServer: {
    hot: true,
    host: Config.devServer.host,
    port: Config.devServer.port,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false
      },
      progress: true
    },
    open: !Config.isProduction
  },

  watchOptions: {
    ignored: ['.github', '.yarn', 'deployments', 'dist', 'docs', 'test', 'tools', '**/node_modules']
  },

  output: {
    path: paths.buildDestination,
    pathinfo: false,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
    clean: true
  },

  plugins: Plugins({
    start: [
      new HtmlWebPackPlugin({
        inject: true,
        template: paths.indexHTML,
        templateParameters: () => Config.vars
      })
    ],
    end: [new WebpackManifestPlugin({ fileName: 'asset-manifest.json', publicPath: Config.publicPath })]
  })
})
