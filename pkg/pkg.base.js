const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Config = require('../config')
const ThreadLoader = require('thread-loader')

const paths = Config.paths

ThreadLoader.warmup({}, ['babel-loader'])

module.exports.Opts = {
  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx', `.ts`, `.tsx`]
  },
  module: {
    strictExportPresence: true,
    rules: [
      { parser: { requireEnsure: false } },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        include: paths.sources,
        exclude: [/[/\\]node_modules[/\\]/],
        use: [{ loader: 'eslint-loader' }]
      },
      {
        test: /\.(js|jsx|mjs)$/,
        include: paths.sources,
        exclude: [/node_modules/, /__snaphots__/],
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
        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.xml$/, /\.csv$/, /\.snap$/, /favicon.ico$/],
        loader: 'file-loader',
        options: { name: 'static/media/[name].[hash:8].[ext]' }
      },
      {
        include: [/favicon\.ico$/],
        loader: 'file-loader',
        options: { name: 'favicon.ico' }
      },
      {
        include: [/manifest\.json$/],
        loader: 'file-loader',
        options: { name: '[name].[ext]' },
        type: 'javascript/auto'
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
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
