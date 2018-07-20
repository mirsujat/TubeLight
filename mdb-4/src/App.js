import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './App.css';

import NavbarMobile from '../src/components/Navbar/Navbar_Mobile';
import NavbarDesktop from '../src/components/Navbar/Navbar_Desktop';
import SearchForm from '../src/components/SearchForm';

class App extends Component {
  render() {
    return (
      <div>
        <div className="desktop">
          <NavbarDesktop />
        </div>
        <div className="mobile">
          <NavbarMobile />
        </div>
        <div className="container">
          <div className="test">
            <h1>Welcome to MDB-4</h1>
            <SearchForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
