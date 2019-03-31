const path = require('path')
const webpack = require('webpack')
const {
    AutoWebPlugin
} = require('web-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const autoWebPlugin = new AutoWebPlugin('templates', {
    template: './template.html',
    postEntrys: ['./css/index.css', './js/common.js']
})
module.exports = {
    entry: autoWebPlugin.entry({
    }),
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
            // use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin,
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
            publicPath: '/dist/'
        }),
        autoWebPlugin
    ],
    resolve: {
        mainFields: ['jsnext:main', 'module', 'main'],
        extensions: ['.js', '.css']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '/dist'),
        publicPath: '/dist/'
    },
    devServer: {
        hot: true,
        port: '9094'
    }
}
