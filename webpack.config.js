var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  devtool: "source-map",
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query:
      {
        presets:['es2015', 'react']
      }
    },{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query:
      {
        presets:['es2015', 'react']
      }
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!sass')
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    },{ 
      test: /\.(png|jpg)$/, 
      loader: 'url?limit=25000' 
    },{
      test:/\.html$/,
      exclude:/node_modules/,
      loader:'html!'
    },{
       test: /bootstrap\/dist\/js\/umd\//,
       loader: 'imports?jQuery=jquery!./file.js'
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/octet-stream"
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=image/svg+xml"
    }]
  },
  plugins: [
    new ExtractTextPlugin('../app/Style/css/style.css', {
      allChunks: true
    })
  ]
};