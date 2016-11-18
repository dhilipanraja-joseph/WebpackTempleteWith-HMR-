const PORT = 3000;

const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.dev');
const compiler = webpack(webpackConfig);

const app = express();

app.use(require('webpack-dev-middleware')(compiler, {
   noInfo: true, // need to set to true to avoid showing error messages
   publicPath: webpackConfig.output.publicPath
 }));

app.use(require('webpack-hot-middleware')(compiler));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Server running on PORT:${PORT}`);
});
