import React from 'react';
import logo from './logo.svg';
import './static/scss/main.scss';

function App() {
  return (
    <div className="App">
      <svg viewBox="0 0 600 300">
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="50%" dy=".35em">STAR RUNNER</text>
        </symbol>
        <use className="title-text" xlinkHref="#s-text"></use>
        <use className="title-text" xlinkHref="#s-text"></use>
      </svg>


    </div>
  );
}

export default App;
