import * as React from 'react';
import './Card.css';
import { hot } from 'react-hot-loader';
import User from './User';

function Card(props: { user: User }) {
  return (
    <div className="Card">
      <img src={props.user.img} />
      <span>{props.user.name}</span>
    </div>
  );
}

export default hot(module)(Card);
