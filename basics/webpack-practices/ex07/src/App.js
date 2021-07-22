import content from './hello.txt';

const App = function(){
    const app = document.createElement('h1');
    app.textContent = content.text;
    return app;
}
// const o = { App: App };
// export {o};
export {App};