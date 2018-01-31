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
                    presets: ['env', 'react']
                }
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader']
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: 'css-loader',
                //     // use: [
                //     //     {
                //     //         loader: 'css-loader',
                //     //         options: {
                //     //             url: false,
                //     //             minimize: true,
                //     //             sourceMap: true
                //     //         }
                //     //     }
                //     // ]
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
