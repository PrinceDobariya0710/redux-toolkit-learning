import React from 'react';
import './App.css';
import LearnCounterApp from './features/counter/LearnCounterApp';
import Coin from './features/coin/Coin';
import LearnCounterRedux from './features/counter/LearnCounterRedux';
import Theme from './features/theme/Theme';

function App() {
  return (
    <div className="App">
      <h1>Redux Learn</h1>
      <LearnCounterApp/>
      <Theme/>
      <LearnCounterRedux />
      <Coin/>
    </div>
  );
}

export default App;
