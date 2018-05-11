const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

let pathsToClean = [
  './build',
]

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    historyApiFallback: {
        index: '/index.html',
    },
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
              presets: ['es2015','react', "stage-1"],
              plugins:  [
                ["transform-runtime", {
                "helpers": false,
                "polyfill": false,
                "regenerator": true,
                "moduleName": "babel-runtime"
                }],
                ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
              ]
          }
        }
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.prod.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(pathsToClean),
  ],
}
