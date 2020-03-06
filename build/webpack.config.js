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
const rootPath = process.cwd();

const webpackConfig = {
    mode: env,
    context: rootPath,
    devServer: {
      hot: true,
    },
    entry: {
        app: ['./test.js' ],
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
        filename: '[name].js',
        path: path.join(rootPath, 'dist'),
    },
    plugins: [
        // disabling webpack.HotModuleReplacementPlugin() fixes the issue.
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),

    ],
};

module.exports = webpackConfig;
