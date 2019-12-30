process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
global.watch = true;

const webpack = require('webpack');
const browserSync = require('browser-sync').create();
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

browserSync.init({
    proxy: {
        target: 'testenv.local',
        middleware: [
            webpackDevMiddleware(compiler, {
                noInfo: true,
                stats: false,
                writeToDisk: filePath => {
                    return /^(?!.*(hot-update)).*/.test(filePath);
                },
            }),
            webpackHotMiddleware(compiler, {
                log: false,
                logLevel: 'none',
            }),
        ],
    },
});

compiler.hooks.done.tap('test', stats => {
    const messages = stats;
    console.log(`\n${chalk.dim("Let's build and compile the files...")}`);
    if (!messages.errors.length && !messages.warnings.length) {
        console.log();
    }

    if (messages.errors.length) {
        console.log('\n👉 ', messages.errors.join('\n\n'));
        return;
    }

    if (messages.warnings.length) {
        console.log('\n👉 ', messages.warnings.join('\n\n'));
    }
});
