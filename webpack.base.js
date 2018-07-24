'use strict'

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Config = require('./config')
const ThreadLoader = require('thread-loader')

const paths = Config.paths

ThreadLoader.warmup({}, ['babel-loader'])

module.exports = {
  entry: {
    app: paths.indexJS
  },
  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx']
  },
  module: {
    strictExportPresence: true,
    rules: [
      { parser: { requireEnsure: false } },
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        include: paths.sources,
        exclude: [/[/\\\\]node_modules[/\\\\]/],
        use: [{ loader: 'eslint-loader' }]
      },
      {
        test: /\.(js|jsx|mjs)$/,
        include: paths.sources,
        exclude: /node_modules/,
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: { cacheDirectory: true, highlightCode: true }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          Config.isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
        loader: 'file-loader',
        options: { name: 'static/media/[name].[hash:8].[ext]' }
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
