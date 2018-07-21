import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './App.css';

import NavbarDesktop from './components/Navbar/Navbar_Desktop';
import SearchForm from './components/SearchForm/SearchForm';
import SearchFormSm from './components/SearchForm/SearchFormSm';

class App extends Component {
  render() {
    return (
      <div>
        <div className="mobile">
        <SearchFormSm />
        </div>
        <div className="desktop">
        <NavbarDesktop />
        </div>
        <div className="container">
          <div className="test">
            <h3>MDB Nav and SideNav</h3>
            <SearchForm />
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
