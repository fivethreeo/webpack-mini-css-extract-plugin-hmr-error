process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
global.watch = true;

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const express = require('express');
const app = express();

webpackConfig.entry.app.push('webpack-hot-middleware/client')

const compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));
