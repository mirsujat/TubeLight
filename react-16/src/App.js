import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi! i am a React App</h1>
        <Person name="Mir" age="30" />
        <Person name="Gyle" age="36">
          My Hobbies: Travelling
        </Person>
        <Person name="Martin" age="26" />
      </div>
    );
  }
}

export default App;
