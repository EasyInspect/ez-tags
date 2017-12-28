
const path = require('path');

module.exports = {
    entry: {
        tags: "./src/mixins/tags.vue",
        selected: "./src/mixins/selected.vue",
        option: "./src/mixins/option.vue"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000
    }
};