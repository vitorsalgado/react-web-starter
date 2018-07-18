const Path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const HTMLPlugin = HtmlWebPackPlugin({ template: './wwwroot/index.html' })

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: Path.resolve(__dirname, 'dist')
  },
  resolve: { extensions: ['', '.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.js$(x)/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      }
    ]
  },
  plugins: [HTMLPlugin]
}
