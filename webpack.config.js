var path = require('path');

const PUBLICPATH = '/assets/'

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build',
  },
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    historyApiFallback: {
        index: '/index.html',
    },
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
}
