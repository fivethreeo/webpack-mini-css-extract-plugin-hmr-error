/**
 * Assets Config file
 */
process.noDeprecation = true;
const env = process.env.NODE_ENV;
const devMode = process.env.NODE_ENV !== 'production';
const path = require('path');
const webpack = require('webpack');
const watchMode = global.watch || false;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const rootPath = process.cwd();

const webpackConfig = {
   context: rootPath,
    entry: {
        app: ['./test.js'],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './',
                        },
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    output: {
        filename: devMode ? '[name].js' : '[name].[hash].js',
        path: path.join(rootPath, 'dist'),
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[contenthash].css',
        }),
    ],
};

if (watchMode) {
   webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}
module.exports = webpackConfig;