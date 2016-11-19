// console.log("loading webpack dev configuration");

const webpack = require('webpack');

module.exports = {
  entry: [ // Multiple entries for dev and prod.
    'webpack-hot-middleware/client?reload=true', // Only used during development, this line not needed in production code.
    './src/main',
  ],
  plugins: [ // Remove these plugins for production code.
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'build.js', // Bundles the files from src directory into this single js file.
  },
  module: {
    loaders: [
      {
        test: /(\.css)$/, loaders: ['style', 'css'] // Loads css file, Requires style-loader and css-loader pkgs.
      }
    ]
  }
};
