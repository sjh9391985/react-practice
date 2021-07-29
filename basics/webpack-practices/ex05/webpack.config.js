const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/i,
            use:  [
                'style-loader', 'css-loader','sass-loader'//정규표현식 [ac] -> sass 일수도 scss 일수도 있다.
                ]
        }]
    },

    devtool: "eval-source-map",
    devServer: {
        contentBase: path.resolve('public'),
        watchContentBase: true,
        host: "0.0.0.0",
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }
}