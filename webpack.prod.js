const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new webpack.ProvidePlugin({
            backgroundFacade: path.resolve(__dirname, './src/backgroundFacade.js')
        }),
    ]
});
