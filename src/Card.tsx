import * as React from 'react';
import './Card.css';
import { hot } from 'react-hot-loader';

function Card(props: { name: string; img: string }) {
  return (
    <div className="Card">
      <img src={props.img} />
      <span>{props.name}</span>
    </div>
  );
}

export default hot(module)(Card);
