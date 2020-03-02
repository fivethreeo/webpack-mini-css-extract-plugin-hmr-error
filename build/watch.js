process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
global.watch = true;

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);
const express = require('express');
const app = express();

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
//app.use(require("webpack-hot-middleware")(compiler));
