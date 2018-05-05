import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Mir', age: 28 },
      { name: 'Gyle', age: 29 },
      { name: 'Martin', age: 32 }
    ]
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Mir Sujat', age: 36 },
        { name: 'Gyle', age: 29 },
        { name: 'Martin', age: 24 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi! i am a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>
          My Hobbies: Travelling
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
