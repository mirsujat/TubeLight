import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './App.css';

import NavbarFeatures from '../src/components/Navbar/Navbar';
import SearchForm from '../src/components/SearchForm';

class App extends Component {
  render() {
    return (
      <div>
        <NavbarFeatures />

          <div className="test">
            <h1>Welcome to MDB-4</h1>
            <SearchForm />
          </div>
 
      </div>
    );
  }
}

export default App;
