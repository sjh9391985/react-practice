import logo from './assets/images/logo.svg';
import styles from './assets/css/App.css';
import React from 'react';

const App = function () {
  return (
    <div className={'App'}>
      <header className={'App-header'}>
        <img src={logo} className={'App-logo'} alt="logo" />
        <p>
          React 1 Week 과제입니다.
        </p>
        <h1>Hello React!</h1>
      </header>
    </div>
  );
}

export default App;
