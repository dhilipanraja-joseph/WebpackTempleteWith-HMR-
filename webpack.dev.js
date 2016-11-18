console.log("loading webpack dev configuration");

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/main'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/',
    filename: 'build.js'
  }
};
