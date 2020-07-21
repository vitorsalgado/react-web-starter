const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Config = require('../config')

module.exports.Opts = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'ts-loader',
            options: { logLevel: 'info', logInfoToStdOut: true }
          }
        ]
      },
      {
        enforce: 'pre',
        exclude: /jest.config.js/,
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.(js|jsx|mjs)$/,
        include: Config.paths.sources,
        exclude: [/node_modules/, /__snaphots__/, /jest.config.js/],
        use: { loader: 'babel-loader', options: { cacheDirectory: true, highlightCode: true } }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              localsConvention: 'camelCase',
              modules: {
                localIdentName: '[name]-[local]--[hash:base64:5]'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              webpackImporter: false,
              sassOptions: {
                includePaths: ['node_modules']
              }
            }
          }
        ]
      },
      {
        exclude: /\.(js|jsx|mjs|ts|tsx|html|json|xml|csv|snap|(sa|sc|c)ss)$/,
        loader: 'file-loader',
        options: { name: 'static/media/[name].[ext]' }
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: { limit: 10000, name: 'static/media/[name].[ext]' }
      }
    ]
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}

module.exports.templateParameters =
  (compilation, assets, options) => Config.vars
