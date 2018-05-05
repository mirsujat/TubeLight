import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Mir', age: 28 },
      { name: 'Gyle', age: 29 },
      { name: 'Martin', age: 32 }
    ],
    otherState: 'Some other value',
    showPersons: false
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 36 },
        { name: 'Gyle', age: 29 },
        { name: 'Martin', age: 24 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Mir', age: 36 },
        { name: event.target.value, age: 29 },
        { name: 'Martin', age: 26 }
      ]
    });
  };

  togglePersonHandler = () => {
   const doesShow = this.state.showPersons;
   this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi! i am a React App</h1>
        <button  style={style} onClick={this.togglePersonHandler}>
          Togggle Persons 
        </button>
        { this.state.showPersons ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Mir!')}
              changed={this.nameChangedHandler}>
              My Hobbies: Travelling
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
        </div> : null
        }
      </div>
    );
  }
}

export default App;
