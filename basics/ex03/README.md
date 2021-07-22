## ex03: Application 분리2 - ES6 module system
1.  project 생성
```
    bash
    $ mkdir ex03
    $ cd ex03
    $ npm init -y
    $npm i -D express
```
2. project Directory
<pre>
  /ex02
    |--- package.json
    |--- package-lock.json
    |--- node-modules
    |--- public
    |       |--- index.html
    |       |--- index.js
    |       |--- App.js
    |--- dev-server
<pre>

3. scripts
```
    json
    {
    "name": "ex03",
    "version": "1.0.0",
    "description": "1.  \r 2.",
    "type": "module",
    "main": "dev.server.js",
    "scripts": {
        "start" : "node dev-server",
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
    [index.js]
    ```
        JAVASCRIPT
        import { App } from './App.js'; 
        document.getElementById('root').appendChild(App());
    ```
    [App.js]
    ```
        JAVASCRIPT
        const App = function(){
        const app = document.createElement('h1');
        app.textContent = 'Hello World';
        return app;
        }
        export {App};
    ```

5. 테스트(테스트 서버 실행)
```
    bash
$ npm start
```

6. 결론
    - 프론트엔드 어플리케이션이 수십~수백개의 모듈로 분리된 경우, 브라우저에서 개별적으로 모듈들을 import하는 것은 상당히 비효율적이다.
    - 프론트엔드 어플리케이션은 자바스크립트 외에 다양한 assets(CSS, images, font)에 대한 로딩 동기화도 고려되어야 한다.
    