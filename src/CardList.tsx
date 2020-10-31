import * as React from 'react';
import { hot } from 'react-hot-loader';
import Card from './Card';
import User from './User';

function CardList(props: { users: User[]; onDelete(id: number): void }) {
  return (
    <ul className="CardList">
      {props.users.map((user) => (
        <li key={user.id}>
          <Card user={user} onDelete={() => props.onDelete(user.id)} />
        </li>
      ))}
    </ul>
  );
}

export default hot(module)(CardList);
