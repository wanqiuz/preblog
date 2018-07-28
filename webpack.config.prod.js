const path = require('path');
const webpack = require('webpack');
// var CompressionPlugin = require('compression-webpack-plugin');
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
  devtool: 'cheap-module-source-map',
  mode: 'production',
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
    new webpack.DefinePlugin({ // <-- 减少 React 大小的关键
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),//合并块
    // new CompressionPlugin({
    //   asset: "[path].gz[query]",
    //   algorithm: "gzip",
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // }),
  ],

}
