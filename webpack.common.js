const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        popup: './src/popup.js',
        background: './src/background.js',
        polyfill: 'babel-polyfill'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Popup',
            chunks: ['popup'],
            filename: 'popup.html',
            template: "./src/popup.html"
        }),
        new CopyPlugin([
            { from: './src/images/', to: '.' },
            { from: './src/manifest.json', to: '.' }
        ], {copyUnmodified: true}),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"]
                        }
                    }
                ]
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
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
