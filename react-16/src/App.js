import React, { Component } from 'react';
import Style from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    // Alternative Approach
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnStyle = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  changed={event => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
      btnStyle = Style.Red;
    }

    const Styles = [];
    if (this.state.persons.length <= 2) {
      Styles.push(Style.red); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      Styles.push(Style.bold); //classes = ['red', 'bold']
    }

    return (
      <div className={Style.App}>
        <h1>Hi! i am a React App</h1>
        <p className={Styles.join(' ')}>This is really Working!!</p>
        <button className={btnStyle} onClick={this.togglePersonHandler}>
          Togggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
