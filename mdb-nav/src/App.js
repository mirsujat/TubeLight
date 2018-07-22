import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./App.css";

import NavbarMobile from "./components/Navbar/Navbar_Mobile";
import NavbarDesktop from "./components/Navbar/Navbar_Desktop";
import SearchForm from "./components/SearchForm/SearchForm";
import SearchFormSm from "./components/SearchForm/SearchFormSm";

class App extends Component {
  render() {
    return (
      <div>
        <div className="mobile" />
        <div className="desktop">
          <NavbarDesktop />
        </div>

        <div className="container">
          <div className="test" />
        </div>
      </div>
    );
  }
}

export default App;
