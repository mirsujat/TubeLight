import React from 'react';

const person = props => {
  return (
    <div>
      <p onClick={props.click}>
        I'm a {props.name} and I am {props.age} Years old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
