import * as WebPack from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import Config from '../../config'
import { resolvePath } from '../../config/utils'

const EnvironmentPlugin = WebPack.EnvironmentPlugin
const additionalPlugins: WebPack.WebpackPluginInstance[] = []

type Arg = { start: WebPack.WebpackPluginInstance[]; end: WebPack.WebpackPluginInstance[] }

export default ({ start = [], end = [] }: Arg): WebPack.WebpackPluginInstance[] =>
  [
    new EnvironmentPlugin({
      NODE_ENV: Config.env,
      PUBLIC_URL: Config.publicPath,
    }),
    ...start,
    ...additionalPlugins,
    new CopyWebpackPlugin({
      patterns: [
        {
          force: true,
          from: resolvePath('src/manifest.json'),
          to: Config.paths.buildDestination,
          transform: function (content) {
            return Buffer.from(
              JSON.stringify({
                ...JSON.parse(content.toString()),
              }),
            )
          },
        },
        {
          force: true,
          from: resolvePath('src/favicon.ico'),
          to: Config.paths.buildDestination,
        },
      ],
    }),
    ...end,
  ].filter(plugin => plugin)
