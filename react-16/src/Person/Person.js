import React from 'react';
import Style from './Person.css';

const person = props => {
  return (
    <div className={Style.Person}>
      <p onClick={props.click}>
        I'm a {props.name} and I am {props.age} Years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
