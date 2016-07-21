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
    }]
  },
  plugins: [
    new ExtractTextPlugin('../app/Style/css/style.css', {
      allChunks: true
    })
  ]
};