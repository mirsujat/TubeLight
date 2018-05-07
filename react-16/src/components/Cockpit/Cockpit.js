import React from 'react';
import Style from './Cockpit.css';

const cockpit = props => {
  const Styles = [];
  let btnStyle = '';

  if (props.showPersons) {
    btnStyle = Style.Red;
  }

  if (props.persons.length <= 2) {
    Styles.push(Style.red); //classes = ['red']
  }
  if (props.persons.length <= 1) {
    Styles.push(Style.bold); //classes = ['red', 'bold']
  }

  return (
    <div className={Style.Cockpit}>
      <h1>Hi! i am a React App</h1>
      <p className={Styles.join(' ')}>This is really Working!!</p>
      <button className={btnStyle} onClick={props.clicked}>
        Togggle Persons
      </button>
    </div>
  );
};

export default cockpit;
