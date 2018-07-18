const Webpack = require('webpack')
const Merge = require('webpack-merge')
const Common = require('./webpack.commom')

module.exports = Merge(
  Common,
  {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      hot: true
    },
    plugins: [
      new Webpack.HotModuleReplacementPlugin()
    ]
  })
