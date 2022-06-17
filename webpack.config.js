const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = { // 1
    entry: './src/main.js', // 2
    output: {
        filename: 'main.bundle.js' // 3
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|mp3)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {
                test: /\\.css$/, // 1
                use: ['style-loader', 'css-loader'], // 2
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        // new BundleAnalyzerPlugin(),
    ]
};