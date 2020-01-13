const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new webpack.ProvidePlugin({
            background: path.resolve(__dirname, './src/backgroundFacade.js'),
            nem: path.resolve(__dirname, './src/nemFacade.js'),
        }),
    ]
});
