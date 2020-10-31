import * as React from 'react';
import { hot } from 'react-hot-loader';
import Card from './Card';
import User from './User';

function CardList(props: { users: User[] }) {
  return (
    <ul className="CardList">
      {props.users.map((user) => (
        <li key={user.id}>
          <Card user={user} />
        </li>
      ))}
    </ul>
  );
}

export default hot(module)(CardList);
