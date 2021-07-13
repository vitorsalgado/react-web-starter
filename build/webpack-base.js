'use strict'

const Config = require('./config')

module.exports = {
  context: Config.paths.sources,

  entry: {
    app: Config.paths.entrypoint
  },

  stats: {
    errorDetails: true,
    children: true
  },

  performance: {
    hints: 'warning'
  },

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
        exclude: [/node_modules/, /node_modules/, /jest.config.js/],
        use: { loader: 'babel-loader', options: { cacheDirectory: true, highlightCode: true } }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]-[local]--[contenthash:base64:5]'
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
        test: /\.svg/,
        type: 'asset/inline'
      },
      {
        test: /\.ico/,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]'
        }
      },
      {
        test: /\.(jpg|png|gif)$/,
        exclude: /\.(js|jsx|mjs|ts|tsx|html|json|xml|csv|snap|(sa|sc|c)ss)$/,
        type: 'asset/resource',
        generator: {
          filename: '[hash][ext][query]'
        }
      }
    ]
  }
}
