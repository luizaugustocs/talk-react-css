const path = require('path');


module.exports = {
    entry: './index.js',

    output: {
        path: path.join(__dirname, './dist'),
        publicPath: "/dist/",
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 8080,
        hot: true,
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react', 'stage-2']
                }
            }
        ]
    }
};
