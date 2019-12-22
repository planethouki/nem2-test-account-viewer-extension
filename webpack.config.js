const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    entry: {
        popup: './src/popup.js',
        background: './src/background.js',
        polyfill: 'babel-polyfill'
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
            { from: './src/images/', to: '.' },
            { from: './src/manifest.json', to: '.' }
        ], {copyUnmodified: true}),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
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
    watchOptions: {
        ignored: /node_modules/
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
