import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import earth from './earth-round-02.png';
import space from './space_background.jpg';

function App() {
  return (
    <div className="App" style={{ backgroundImage:`url(${space})` }}>
      <header className="App-header">
        <img src={earth} className="App-logo" alt="logo" />
        <p>
          Site Front Simple [preprod]
        </p>
        <br/>
        <a
          className="App-link"
          href="https://github.com/IIM-Creative-Technology/devops-Ar4m"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/IIM-Creative-Technology/devops-Ar4m
        </a>
      </header>
    </div>
  );
}

export default App;
