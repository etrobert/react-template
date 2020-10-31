import * as React from 'react';
const useState = React.useState;
import { hot } from 'react-hot-loader';
import './App.css';
import CardList from './CardList';

function App() {
  const [users, setUsers] = useState([
    {
      id: 0,
      name: 'Mister Jones',
      img:
        'https://yt3.ggpht.com/a/AATXAJw8ksTFR7vKliUkbKUDiSoHeZgRwz1qL06rcQ=s900-c-k-c0xffffffff-no-rj-mo',
    },
  ]);

  const [nextId, setNextId] = useState(1);

  const newUser = () => {
    setNextId(nextId + 1);
    return {
      id: nextId,
      name: 'Copycat ' + nextId,
      img:
        'https://yt3.ggpht.com/a/AATXAJw8ksTFR7vKliUkbKUDiSoHeZgRwz1qL06rcQ=s900-c-k-c0xffffffff-no-rj-mo',
    };
  };

  return (
    <div className="App">
      <CardList users={users} />
      <button onClick={() => setUsers([...users, newUser()])}>Add</button>
    </div>
  );
}

export default hot(module)(App);
