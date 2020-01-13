const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        open: true,
        openPage: 'popup.html'
    },
    watchOptions: {
        ignored: /node_modules/
    },
    plugins: [
        new webpack.ProvidePlugin({
            background: path.resolve(__dirname, './test/backgroundMock.js'),
            nem: path.resolve(__dirname, './src/nemFacade.js'),
        }),
    ]
});
