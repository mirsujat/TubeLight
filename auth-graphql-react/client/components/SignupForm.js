import React, { Component } from 'react';
import AuthForm from './AuthForm';

class SignupForm extends Component {
  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <AuthForm />
      </div>
    );
  }
}

export default SignupForm;
