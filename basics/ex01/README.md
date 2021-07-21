## ex00: create-react-app(cra) 어플리케이션 만들어보기
1.  project 생성
```
    bash
    $ mkdir ex01
    $ cd ex01
    $ npm init -y
    $npm i -D express
```
2. project Directory
<pre>
  /ex01
    |--- package.json
    |--- package-lock.json
    |--- node-modules
    |--- public
    |       |--- index.html
    |       |--- index.js
    |--- dev-server
<pre>

3. scripts
```
    json
    {
  "name": "ex01",
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
    ```

5. 테스트(테스트 서버 실행)
```
    bash
$ npm start
```