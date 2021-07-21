## ex02: Application 분리1
1.  project 생성
```
    bash
    $ mkdir ex02
    $ cd ex02
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
    "name": "ex02",
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
    ```

5. 테스트(테스트 서버 실행)
```
    bash
$ npm start
```

6. 결론
    - 복잡한 어플리케이션은 코드를 분리하여 개발하는 것이 원칙
    - 어플리케이션 코드를 여러 js 파일로 옮기는 단순한 방식으로 분리
        + 전통적인 분리방식
        + 브라우저가 js파일 로딩 순서를 보장하지 않음(순서를 잘 지켜야한다.)
        + 복잡하고 분리 파일이 많이지면 의존성 관리 자체가 불가능