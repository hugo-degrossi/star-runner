import React, { useState } from 'react';
import logo from './logo.svg';
import './static/scss/main.scss';


function App() {

  // state
  const [isJoinClicked, setIsJoinClicked] = useState<Boolean>(false)

  // handlers
  const handleJoinClick = () => {setIsJoinClicked(true)}

  return (
    <div className="App">
    
      <div className={isJoinClicked ? "launcher" + ' ' + 'launcher-top' : 'launcher'}>
        <svg viewBox="0 0 600 100">
          <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="50%" dy=".35em">STAR RUNNER</text>
          </symbol>
          <use className="title-text" xlinkHref="#s-text"></use>
          <use className="title-text" xlinkHref="#s-text"></use>
        </svg>


        


      </div>
      {isJoinClicked
          ? null
          : <div className='btn' onClick={handleJoinClick}>
          JOIN THE ADVENTURE
        </div>
        }

    </div>
  );
}

export default App;
