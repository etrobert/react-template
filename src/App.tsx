import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

const generateArray = (n: number) => Array.from(Array(n).keys());

function App() {
  const [list, setList] = useState(generateArray(50));

  const deleteItem = (i: number) => {
    setList((list) => list.filter((v) => v != i));
  };

  return (
    <div className="App">
      {list.map((item) => (
        <div className="item" key={item} onClick={() => deleteItem(item)}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default hot(module)(App);
