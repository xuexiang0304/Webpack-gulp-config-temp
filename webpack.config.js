var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './app/main.js'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query:
      {
        presets:['react']
      }
    }, {
      test: /\.css$/,
      loader: 'style!css'
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
  }
};