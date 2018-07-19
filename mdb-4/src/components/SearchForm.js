import React, { Component } from 'react';

class SearchForm extends Component{
  render() {
    return (
        <div className="input-group md-form form-sm form-1 pl-0">
          <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-text1"><i className="fa fa-search" aria-hidden="true"></i></span>
          </div>
        </div>
    )
  }
}

export default SearchForm;