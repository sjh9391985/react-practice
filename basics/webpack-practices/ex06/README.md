## Webpack-practices: ex06
1. project 생성
``` bash
    $ mkdir ex06
    $ cd ex06
    $ npm init -y
    $ npm i -D webpack webpack-cli webpack-dev-server
    $ npm i -D webpack css-loader style-loader sass-loader node-sass image-loader
```

2. 프로젝트 구조
/webpack-pratices/ex06
    |--- package.json
    |--- package-lock.json
    |--- node-modules
    |--- public
    |       |--- index.html
    |       |--- assets
    |       |       |--- images
    |       |             |--- logo.svg [build 결과]
    |       |--- bundle.js
    |--- src
    |       |--- index.css
    |       |--- App.scss
    |       |--- logo.svg
    |       |--- index.js
    |       |--- App.js
    |--- webpack.config.js [webpack 설정 파일]

3. webpack.config.js
```
const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /.css$/i,
            use: ['style-loader', 'css-loader']
        },{        //정규표현식 [ac] -> sass 일수도 scss 일수도 있다.
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },{
            test: /\.svg$/i,
            loader: 'file-loader',
            options: {
                outputPath: '/assets/images',
                name: '[name].[ext]'
            }
        }]
    },

    devServer: {
        contentBase: path.resolve('public'),
        host: "0.0.0.0",
        port: 9999,
        inline: true,
        liveReload:true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }
}
```

4. 빌드하기 [image 복사를 위해서 먼저 빌드해야한다.]
``` bash
    $ npx webpack
```

5. test server 실행
``` bash
    $ npx webpack serve --progress
```