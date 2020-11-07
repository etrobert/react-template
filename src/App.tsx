import React, { useRef, useState } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

const generateArray = (n: number) => Array.from(Array(n).keys());

function App() {
  const [list, setList] = useState(generateArray(50));

  // CAREFULL The map will grow indefinitly
  const refs = useRef<Map<number, HTMLDivElement | null>>(new Map());

  const deleteItem = (i: number) => {
    setList((list) => list.filter((v) => v != i));
  };

  const animateOut = (i: number) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const elem = refs.current.get(i)!;
    elem.onanimationend = () => deleteItem(i);
    elem.classList.add('exiting');
  };

  return (
    <div className="App">
      {list.map((item) => (
        <div
          className="item"
          key={item}
          ref={(el) => refs.current.set(item, el)}
          onClick={() => animateOut(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default hot(module)(App);
