import React, { Component } from "react";
import Modal from "../Modal/Modal";

class Registration extends Component {
  state = {};
  render() {
    return (
      <Modal open={this.props.open} closed={this.props.closed}>
        <div className="card">
          <h1 className="card-header">REGISTER NOW</h1>
          <div className="card-body">
            <form>
              <div className="form-field">
                <label htmlFor="username">Username</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="e-mail">E-mail</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="password">Password</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    );
  }
}

export default Registration;
