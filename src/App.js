import React from 'react';
import Question from './components/Question';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Question
            content="Are you currently experiencing a life- or limb-threatening emergency?"
            answer1="Yes"
            answer1_type="primary"
            answer2="No"
            answer1_type="secondary"
            />
      </header>
    </div>
  );
}

export default App;
