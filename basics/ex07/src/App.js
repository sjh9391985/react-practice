import logo from './logo.svg';
import styles from './App.css';
import React from 'react';

const App = function() {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          React 1 Week 과제입니다.
        </p>
        <h1>Hello React!</h1>
      </header>
    </div>
  );
}

export default App;
