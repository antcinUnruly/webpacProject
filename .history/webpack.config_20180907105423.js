var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'react',
  'lodash',
  'redux',
  'react-redux',
  'react-dom',
  'faker',
  'react-input-range',
  'redux-form',
  'redux-thunk'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js' // [name] gets replaced with the key from the entry section
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
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor' // solves issues of double including vendor models in both bundle and vendor files
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
