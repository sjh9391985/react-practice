const path = require('path');

module.exports = (env) =>  {
    const entry = path.resolve(`src/index.js`);

    return {
        mode: "none",
        entry: entry,
        output: {
            path: path.resolve('public'),
            filename: 'bundle.js'
        },
        module: {
            rules:[{
                test: /\.(sa|sc|c)ss$/i,//정규표현식 [ac] -> sass 일수도 scss 일수도 있다.
                use:  [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    },
                    'sass-loader'
                    ]
            }, {
                test: /\.(png|gif|jpe?g|svg|ico|tiff|bmp)$/i,
                type: 'asset/resource'
            }, {
                test: /\.js$/i,
                exclude: /node_modules/,
                loader: 'babel-loader'
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
    };
}