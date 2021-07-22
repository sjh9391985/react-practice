### ex05: React(API 기반) Application으로 리팩토링
1. project 생성
``` bash
    $ mkdir ex05
    $ cd ex05
    $ npm init -y
    $ npm i -D webpack webpack-cli webpack-dev-server
    $ npm i react react-doom
```

2. 프로젝트 구조
/ex05
    |--- package.json
    |--- package-lock.json
    |--- node-modules
    |--- public
    |       |--- index.html
    |       |--- bundle.js  [빌드결과물]
    |       |--- bundle.js.LICENSE.txt
    | 
    |--- src
    |       |--- index.js
    |       |--- App.js
    |--- webpack.config.js [webpack 설정 파일]
3. scripts
```
    json
    {
  "name": "ex05",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "npx webpack serve --progress",
    "build": "npx webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.45.1",
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

5. 빌드하기
``` bash
    $ npx webpack [npm run build]
```

6. test server 실행
``` bash
    $ npx webpack serve --progress [npm start]
```