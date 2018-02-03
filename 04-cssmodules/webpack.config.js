const path = require('path');


const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
                    presets: ['env', 'react', 'stage-0']
                }
            },
            {
                test: /.css$/,
                loaders: [
                    'style-loader?sourceMap',
                    'css-loader?modules&importLoaders=1'
                ]
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: 'css-loader?modules'
                // })

            }
        ]

    },

    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
    ]
};
