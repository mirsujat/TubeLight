import React, { Component } from 'react';
import { FormInline, Fa } from 'mdbreact';

class SearchForm extends Component{
  render() {
    return (
      <div className="container">
        
        
        <div className="input-group md-form form-sm form-1 pl-0">
          <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <span className="input-group-text grey lighten-3" id="basic-text1"><i className="fa fa-search  darken-4" aria-hidden="true"></i></span>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchForm;