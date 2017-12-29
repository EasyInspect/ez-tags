
const webpack   = require('webpack');
const path      = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index.js",
        library:'ez-tags',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                use: "url-loader?limit=100000"
            }
        ]
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000
    }
};