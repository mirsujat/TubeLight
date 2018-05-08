import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

// PropTypes only used in component class; here is an example of propTypes setup
// PropTypes doesn't work in functional component

// class Person extends Component {
//   render() {
//     return (
//       <div className={Style.Person}>
//         <p onClick={this.props.click}>
//           I'm a {this.props.name} and I am {this.props.age} Years old!
//         </p>
//         <p>{this.props.children}</p>
//         <input
//           type="text"
//           onChange={this.props.changed}
//           value={this.props.name}
//         />
//       </div>
//     );
//   }
// }
//
// Person.propTypes = {
//   click: PropTypes.func,
//   name: PropTypes.string,
//   age: PropTypes.number,
//   changed: PropTypes.func
// }
//
// export default Person;
