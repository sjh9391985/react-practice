### ex07: CRA 로 만든 Application 직접 설정해서 만들어 보기
1. project 생성
``` bash
    $ mkdir ex07
    $ cd ex07
    $ npm init -y
    $ npm i -D webpack webpack-cli webpack-dev-server
    $ npm i react react-doom
    $ npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
```

2. 프로젝트 구조
/ex07
    |--- package.json
    |--- package-lock.json
    |--- node-modules
    |--- public
    |       |--- index.html
    |       |--- bundle.js  [빌드결과물]
    |       |--- bundle.js.LICENSE.txt
    | 
    |--- src
    ---- [CSS 추가] ----
    |       |--- index.js
    |       |--- App.js
    |--- babel.config.json [babel 설정 파일]
    |--- webpack.config.js [webpack 설정 파일]

3. scripts
```
    json
    {
  "name": "ex07",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "npx webpack serve --progress",
    "build": "npx webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.14.8",
    "@babel/preset-env": "^7.14.8",
    "@babel/preset-react": "^7.14.5",
    "babel-loader": "^8.2.2",
    "webpack": "^5.46.0",
    "webpack-cli": "^4.7.2",
    "webpack-dev-server": "^3.11.2"
  },
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}


```

4. webpack.config.js
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
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader'
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

5. babel.comfig.json
```
  json
  {
    "presets": [["@babel/env",{
        "targets":{
            "ie":"11",
            "edge": "80",
            "firefox": "73",
            "chrome": "82",
            "opera": "69",
            "safari": "13"
        }
    }], "@babel/react"]
  }

```

6. 빌드하기
``` bash
    $ npx webpack [npm run build]
```

7. test server 실행
``` bash
    $ npx webpack serve --progress [npm start]
```