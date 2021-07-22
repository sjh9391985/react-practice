## ex04: Application 번들링: webpack
- 1. webpack은 작게 분리된 많은 모듈들의 의존성을 분석하여 하나의 js파일로 묶은 도구
- 2. 하나의 js 파일을 번들(bundle)이라 하고 묶는 작업을 번들링(bundling)이라고 한다
- 3. 번들링은 단순히 모듈을 하나의 파일로 묶는 작업만을 의미 하는 것이 아니다. => 어플리케이션 빌드 작업도 한다.
- 4. 빌드 작업: 
        - 4-1. linting(ESLint, 문법체크) 작업
        - 4-2. document (문서화 작업)
        - 4-3. testing(Mocha, Jest) 작업
        - 4-4. 난독화/압축(Uglify) 작업
        - 4-5. 번들링
- 5. 자바스크립트 뿐만 아니라 다양한 assets(CSS, image, font)들도 모듈로 취급하는 추상화한다.


1.  project 생성
```
    bash
    $ mkdir ex04
    $ cd ex04
    $ npm init -y
    $ npm i -D express
    $ npm i -D webpack webpack-cli
    $ npm ./node_modules/.bin/webpack --version
    $ npx webpack --version
```

2. project Directory
<pre>
  /ex04
    |--- package.json
    |--- package-lock.json
    |--- node-modules
    |--- public
    |       |--- index.html
    |       |--- main.js
    |--- src
    |       |--- index.js
    |       |--- App.js
    |--- dev-server.mjs
<pre>

3. scripts
```
    json
    {
    "name": "ex04",
    "version": "1.0.0",
    "description": "",
    "main": "dev-server.mjs",
    "scripts": {
        "start" : "node dev-server.mjs",
        "build": "npx webpack ./src/index.js -o ./public",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
    "express": "^4.17.1"
  }
}
```

4. application(index.js) 작성
    [public/index.html]
    ```
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>#ex04</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="bundle.js/"></script>
    </body>
    </html>
    ```

    [src/index.js]
    ```
        JAVASCRIPT
        import { App } from './App.js'; 
        document.getElementById('root').appendChild(App());
    ```
    [src/App.js]
    ```
        JAVASCRIPT
        const App = function(){
        const app = document.createElement('h1');
        app.textContent = 'Hello World';
        return app;
        }
        export {App};
    ```

5. 빌드작업(번들링)
```
    bash
    $ npx webpack ./src/index.js -o ./public/bundle.js
```

6. 테스트(테스트 서버 실행)
```
    bash
$ npm start
```
    