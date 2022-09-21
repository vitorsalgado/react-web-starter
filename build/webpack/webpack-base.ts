import * as WebPack from 'webpack'
import Config from '../../config'

const config: WebPack.Configuration = {
  context: Config.paths.sourcesRoot,

  entry: Config.paths.applicationEntrypoint,

  stats: {
    errorDetails: true,
    children: true,
  },

  performance: {
    hints: 'warning',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['node_modules', 'src'],
  },

  ignoreWarnings: [/Failed to parse source map/],

  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: { logLevel: 'info', configFile: 'tsconfig.build.json', logInfoToStdOut: true },
          },
        ],
      },
      {
        enforce: 'pre',
        exclude: /jest.config.js/,
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(js|jsx|mjs)$/,
        include: Config.paths.sourcesRoot,
        exclude: /node_modules|__snaphots__|jest.config.js/,
        use: { loader: 'babel-loader', options: { cacheDirectory: true, highlightCode: true } },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]-[local]--[contenthash:base64:5]',
                exportLocalsConvention: 'camelCase',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              webpackImporter: false,
              sassOptions: {
                includePaths: ['node_modules'],
              },
            },
          },
        ],
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
      },
      {
        test: /\.ico/,
        type: 'asset/resource',
      },
      {
        test: /\.(jpg|png|gif|pdf|txt)$/,
        exclude: /\.(js|jsx|mjs|ts|tsx|html|json|xml|csv|snap|(sa|sc|c)ss)$/,
        type: 'asset/resource',
        generator: {
          filename: '[hash][ext][query]',
        },
      },
    ],
  },
}

export default config
