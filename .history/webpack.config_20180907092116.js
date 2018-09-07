var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/ // do not apply babel to node modules
      },
      {
        use: ['style-loader', 'css-loader'], // css-loader allows webpack to understand and read content of css files; style-loader takes css modules and sticks them in a style file in index.html
        test: /\.css$/
      }
    ]
  }
};
