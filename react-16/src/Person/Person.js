import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = props => {
  const style = {
    '@media(min-width: 500)': {
      width: '450px'
    }
  };

  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm a {props.name} and I am {props.age} Years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
