const Merge = require('webpack-merge')
const Common = require('./webpack.commom')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = Merge(
    Common,
    {
        mode: 'production',
        optimization: {
            minimizer: [
                new UglifyJsPlugin()
            ]
        }
    })
