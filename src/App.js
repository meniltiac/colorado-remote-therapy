import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Are you currently experiencing a life- or limb-threatening emergency?
        <div class="button-wrapper">
            <a class="button">
                Yes
            </a>
            <a class="button button-secondary">
                No
            </a>
        </div>
      </header>
    </div>
  );
}

export default App;
