import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import LearnCounterApp from './components/LearnCounterApp';

function App() {
  return (
    <div className="App">
      <h1>Redux Learn</h1>
      <LearnCounterApp/>
    </div>
  );
}

export default App;
