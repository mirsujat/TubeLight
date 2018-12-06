import React, { Component } from "react";

class ValidationOnSubmit extends Component {
  state = {
    fields: {
      username: "",
      email: "",
      mobileno: "",
      password: "",
      confirmPassword: "",
      address: "",
      zip: "",
      ipAddress: "",
      creditCard: ""
    },
    errors: {
      username: "",
      email: "",
      mobileno: "",
      password: "",
      confirmPassword: "",
      address: "",
      zip: "",
      ipAddress: "",
      creditCard: ""
    }
  };

  handleChange = e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.validateForm()) {
      console.log(this.state.fields);
    }
  };

  validateForm = () => {
    let fields = this.state.fields;
    let errors = {};
    let isValid = true;

    // User Name
    if (!fields.username) {
      isValid = false;
      errors.username = "*Please enter your username.";
    }
    if (typeof fields.username !== "undefined") {
      if (!fields.username.match(/^[a-zA-Z]*$/)) {
        isValid = false;
        errors.username = "*Please Type Alphabet Characters Only.";
      }
    }

    // E-mail
    if (!fields.email) {
      isValid = false;
      errors.email = "*Please enter a valid e-mail address.";
    }
    if (typeof fields.email !== "undefined") {
      //regular expression for email validation
      let emailPattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!emailPattern.test(fields.email)) {
        isValid = false;
        errors.email = "*Please enter a valid e-mail address.";
      }
    }

    // Mobile No
    if (typeof fields.mobileno !== "undefined") {
      if (!fields.mobileno.match(/^[0-9]{11}$/)) {
        isValid = false;
        errors.mobileno = "*Please enter a valid mobile no.";
      }
    }
    if (!fields.mobileno) {
      isValid = false;
      errors.mobileno = "*Please enter your mobile no.";
    }
    // Password

    if (typeof fields.password !== "undefined") {
      if (
        !fields.password.match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        isValid = false;
        errors.password =
          "Your password needs to be between 8 and 30 characters long, and contain one uppercase letter, one symbol, and a number";
      }
    }

    if (fields.password.length < 8 || fields.password.length > 16) {
      isValid = false;
      errors.password = "*Password Must be between 8 and 16 characers long.";
    }
    if (!fields.password) {
      isValid = false;
      errors.password = "*Please enter your password.";
    }

    // Confirmation Password
    if (fields.password !== fields.confirmPassword) {
      isValid = false;
      errors.confirmPassword = "*Password not matched.";
    }

    // Address
    if (fields.address.length > 0) {
      if (!fields.address.match(/^[0-9a-zA-Z]+$/)) {
        isValid = false;
        errors.address =
          "User address must have alphanumeric characters only. i.e; (0-9, a-zA-Z)";
      }
    }

    // ZIP Code
    if (fields.zip.length > 0) {
      if (!fields.zip.match(/^[0-9]+$/)) {
        isValid = false;
        errors.zip = "ZIP code must have numeric characters only.";
      }
    }

    // IP Address
    if (fields.ipAddress.length > 0) {
      if (
        !fields.ipAddress.match(
          /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
        )
      ) {
        isValid = false;
        errors.ipAddress = "You have entered an invalid IP address!";
      }
    }

    // Credit Card
    // validate a Visa card starting with 4, length 13 or 16 digits.
    if (fields.creditCard > 0) {
      if (!fields.creditCard.match(/^(?:3[47][0-9]{13})$/)) {
        isValid = false;
        errors.creditCard = "Not a valid Amercican Express credit card number!";
      }
    }

    this.setState({ errors });
    return isValid;
  };

  render() {
    const { fields, errors } = this.state;

    return (
      <div className="registration">
        <div className="registration-form-wrapper">
          <h1>Validation on Submit</h1>
          <form onSubmit={this.handleSubmit}>
            <p>
              <label htmlFor="username">*Username:</label>
              <input
                type="text"
                name="username"
                value={fields.username}
                onChange={this.handleChange}
              />
              <span className="errorMsg">{errors.username}</span>
            </p>
            <p>
              <label htmlFor="email">*E-mail:</label>
              <input
                type="text"
                name="email"
                value={fields.email}
                onChange={this.handleChange}
              />
              <span className="errorMsg">{errors.email}</span>
            </p>
            <p>
              <label htmlFor="mobileno">*Mobile No:</label>
              <input
                type="text"
                name="mobileno"
                value={fields.mobileno}
                onChange={this.handleChange}
              />
              <span className="errorMsg">{errors.mobileno}</span>
            </p>
            <p>
              <label htmlFor="password">*Password:</label>
              <input
                type="text"
                name="password"
                value={fields.password}
                onChange={this.handleChange}
              />
              <span className="errorMsg">{errors.password}</span>
            </p>
            <p>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="text"
                name="confirmPassword"
                value={fields.confirmPassword}
                onChange={this.handleChange}
              />
              <span className="errorMsg">{errors.confirmPassword}</span>
            </p>
            <p>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                name="address"
                value={fields.address}
                onChange={this.handleChange}
              />
              <span className="errorMsg">{errors.address}</span>
            </p>
            <p>
              <label htmlFor="zip">ZIP Code:</label>
              <input
                type="text"
                name="zip"
                value={fields.zip}
                onChange={this.handleChange}
              />
              <span className="errorMsg">{errors.zip}</span>
            </p>
            <p>
              <label htmlFor="ip">IP Address:</label>
              <input
                type="text"
                name="ipAddress"
                value={fields.ipAddress}
                onChange={this.handleChange}
              />
              <span className="errorMsg">{errors.ipAddress}</span>
            </p>
            <p>
              <label htmlFor="cardno">Credit Card:</label>
              <input
                type="text"
                name="creditCard"
                value={fields.creditCard}
                onChange={this.handleChange}
              />
              <span className="errorMsg">{errors.creditCard}</span>
            </p>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ValidationOnSubmit;
