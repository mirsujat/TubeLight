import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'adfasg', name: 'Mir', age: 28 },
      { id: 'xbvxcs', name: 'Gyle', age: 29 },
      { id: 'bsfsgd', name: 'Martin', age: 32 }
    ],
    otherState: 'Some other value',
    showPersons: false
  };

  // Best practice of update state
  // You should always update state in immutable fashion
  // This is a three steps process. mention bellow
  // -create a copy
  // -changed that and
  // -update the state

  deletePersonHandler = personIndex => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({ persons: persons });
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
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi! i am a React App</h1>
        <button style={style} onClick={this.togglePersonHandler}>
          Togggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
