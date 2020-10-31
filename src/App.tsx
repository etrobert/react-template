import * as React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Card
        name="Georges"
        img="https://yt3.ggpht.com/a/AATXAJw8ksTFR7vKliUkbKUDiSoHeZgRwz1qL06rcQ=s900-c-k-c0xffffffff-no-rj-mo"
      />
    </div>
  );
}

export default hot(module)(App);
