const path = require('path');
const webpack = require('webpack');

module.exports = {
    bail: true,
    cache: true,
    devtool: false,
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve('./dist/webpack'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /\/(?:node_modules)\//
            }
        ]
    },
    plugins: []
};