const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        popup: './src/popup.js',
        inpage: './src/inpage.js',
        contentscript: './src/contentscript.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Popup',
            chunks: ['popup'],
            filename: 'popup.html',
            template: "./src/popup.html"
        }),
        new CopyPlugin([
            { from: './src/icon_19.png', to: '.' },
            { from: './src/manifest.json', to: '.' }
        ]),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
};
