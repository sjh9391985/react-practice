## Webpack-practices: ex01
1. project 생성
``` bash
    $ mkdir ex02
    $ cd ex02
    $ npm init -y
    $ npm i -D webpack webpack-cli express
```

2. 프로젝트 구조
/webpack-pratices/ex02
    |--- package.json
    |--- package-lock.json
    |--- node-modules
    |--- public
    |       |--- index.html
    |       |--- bundle.js
    |--- src
    |       |--- index.js
    |       |--- App.js
    |--- dev-server.mjs
    |--- webpack.config.js [webpack 설정 파일]

3. webpack.config.js
```
const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    }
}
```

4. 빌드하기
``` bash
    $ npx webpack
```

5. test server 실행
``` bash
    $ node dev-server.mjs
    ES6 모듈로 실행(확장자를 .mjs) 로 해야함.
```