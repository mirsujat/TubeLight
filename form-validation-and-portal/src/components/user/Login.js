import React, { Component } from "react";
import Modal from "../dialog/Dialog";
import LoginForm from "./LoginForm";

class Login extends Component {
  state = {
    open: false
  };

  handleModalOpen = () => {
    this.setState({ open: true });
  };
  handleModalClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <section className="user-login">
        <Modal open={this.props.open} closed={this.props.closed}>
          <button onClick={this.props.closed} className="close-btn">
            Close
          </button>
          <LoginForm />
        </Modal>
      </section>
    );
  }
}

export default Login;
