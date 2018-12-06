import React, { Component } from "react";
import InputFeild from "./InputField";

class AsyncValidation extends Component {
  state = {
    fields: {
      username: {
        value: "",
        valid: false,
        touched: false,
        rules: {
          required: true,
          minLength: 2
        }
      },
      email: {
        value: "",
        valid: false,
        touched: false,
        rules: {
          required: true,
          isEmail: true
        }
      },
      password: {
        value: "",
        valid: false,
        touched: false,
        rules: {
          required: true,
          minLength: 6
        }
      },
      confirmPassword: {
        value: "",
        valid: false,
        touched: false,
        rules: {
          required: true,
          equalTo: "password"
        }
      },
      mobileno: {
        value: "",
        valid: false,
        touched: false,
        rules: {
          required: true,
          minLength: 11,
          maxLength: 11,
          isNumeric: true
        }
      }
    },
    formIsValid: false
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    let errors = {};

    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }
    this.setState({ errors });
    return isValid;
  };

  handleChange = (e, fieldName) => {
    const updatedFields = { ...this.state.fields };
    const formElement = { ...updatedFields[fieldName] };
    formElement.value = e.target.value;
    formElement.valid = this.checkValidity(
      formElement.value,
      formElement.rules
    );
    formElement.touched = true;
    updatedFields[fieldName] = formElement;
    console.log(formElement);
    let formIsValid = true;
    for (let field in updatedFields) {
      formIsValid = updatedFields[fieldName].valid && formIsValid;
    }
    this.setState({ fields: updatedFields, formIsValid });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.fields);
  };

  render() {
    const { fields } = this.state;

    return (
      <div className="registration">
        <div className="registration-form-wrapper">
          <h1>Create an Account</h1>
          <form onSubmit={this.handleSubmit}>
            <InputFeild
              for="username"
              label="username"
              type="text"
              name="username"
              value={fields.username.value}
              onChange={e => this.handleChange(e, "username")}
              inValid={!fields.username.valid}
              touched={fields.username.touched}
            />
            <InputFeild
              for="email"
              label="E-mail"
              type="text"
              name="email"
              value={fields.email.value}
              onChange={e => this.handleChange(e, "email")}
              inValid={!fields.email.valid}
              touched={fields.email.touched}
            />
            <InputFeild
              for="mobileno"
              label="Mobile No"
              type="text"
              name="mobileno"
              value={fields.mobileno.value}
              onChange={e => this.handleChange(e, "mobileno")}
              inValid={!fields.mobileno.valid}
              touched={fields.mobileno.touched}
            />
            <InputFeild
              for="password"
              label="Password"
              type="text"
              name="password"
              value={fields.password.value}
              onChange={e => this.handleChange(e, "password")}
              inValid={!fields.password.valid}
              touched={fields.password.touched}
            />
            <InputFeild
              for="confirmPassword"
              label="confirmPassword"
              type="text"
              name="confirmPassword"
              value={fields.confirmPassword.value}
              onChange={e => this.handleChange(e, "confirmPassword")}
              inValid={!fields.confirmPassword.valid}
              touched={fields.confirmPassword.touched}
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AsyncValidation;
