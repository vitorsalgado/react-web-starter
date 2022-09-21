import 'dotenv/config'

import * as WebPack from 'webpack'
import * as DevServer from 'webpack-dev-server'
import Base from './webpack-base'
import { WebpackManifestPlugin } from 'webpack-manifest-plugin'
import { merge as Merge } from 'webpack-merge'
import HtmlWebPackPlugin from 'html-webpack-plugin'
import Config from '../../config'
import Plugins from './webpack-plugins'

const { paths } = Config

export default Merge<WebPack.Configuration & DevServer.Configuration>(Base, {
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
        warnings: false,
      },
      progress: true,
    },
    open: !Config.isProduction,
  },

  watchOptions: {
    ignored: ['.github', '.yarn', 'deployments', 'dist', 'docs', 'test', 'tools', '**/node_modules'],
  },

  output: {
    path: paths.buildDestination,
    pathinfo: false,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
    clean: true,
  },

  plugins: Plugins({
    start: [
      new HtmlWebPackPlugin({
        inject: true,
        template: paths.indexHTML,
        templateParameters: () => Config.vars,
      }),
    ],
    end: [new WebpackManifestPlugin({ fileName: 'asset-manifest.json', publicPath: Config.publicPath })],
  }),
})
