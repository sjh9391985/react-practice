## React Pracractices - Integration(개발 환경 통합)

## Configuration
1. Application Structure

    <pre>   
    /app
      |--- /backend
      |         |--- /logging
      |         |       |--- index.js 
      |         |--- /routes
      |         |       |--- [index.js]
      |         |       |--- authorized.js
      |         |       |--- error.js
      |         |--- /controllers
      |         |--- /models                
      |         |--- /views
      |         |       |--- /error
      |         |       |       |--- [404.ejs]
      |         |       |       |--- [500.ejs]
      |         |--- /public
      |         |--- [index.js] 
      |         |--- [app.config.env]                
      |--- /Frontend
      |         |--- /config
      |         |       |--- babel.config.json
      |         |       |--- [webpack.config.json]
      |         |--- /public
      |         |       |--- favicon.ico
      |         |       |--- index.html
      |         |--- /src
      |         |--- /assets
      |--- /node_modules
      |--- package.json
      |--- package-lock.json
    </pre>

2. nodemon
3. webpack dev server
4. package.json
5. concurrently
6. node application

## Application
1. app01.emaillist
    - 개발 통합 설정 (with Node Backend)
    - Backend: 전체 API(Node Express 기반의 API server)
    - Frontend: React(SPA) - root부터 전부 React
    - AJAX: fetch 기반

2. app02.kanban
    - 개발 통합 설정 (with Node Backend)
    - Backend: 전체 API(Node Express)
    - Frontend: React(SPA) 
    - AJAX: fetch 기반

3. app03.guestbook
4. app04.gallery
5. app05.mysite
---  