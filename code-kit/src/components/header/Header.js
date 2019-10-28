import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";
import Card from "../card/Card";
import RegistrationPage from "../../pages/Registration/RegistrationPage";

class Header extends Component {
  state = { open: false };

  toggleModalOpen = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };

  render() {
    return (
      <div className="header">
        <ul className="nav">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="nav-link" onClick={this.toggleModalOpen}>
            Register
          </li>
        </ul>
        <Modal open={this.state.open} closed={this.toggleModalOpen}>
          <Card>
            <RegistrationPage></RegistrationPage>
          </Card>
        </Modal>
      </div>
    );
  }
}

export default Header;
