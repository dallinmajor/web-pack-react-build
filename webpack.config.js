var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.(js)$/, 
                use: {
                    loader: 'babel-loader'
                } 
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, '/client'),
        compress: true,
        port: 5000,
        proxy: {
            '/api': 'http://localhost:4000'
        }
    }
}