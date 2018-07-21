import React, {Component} from 'react';

class SearchForm extends Component{
  render() {
    return (
      <div className="input-group md-form form-sm form-2 pl-0 mt-1 mb-1">
        <input className="form-control my-0  red-border" type="text" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <span className="input-group-text transparent text-grey" id="basic-text1"><i className="text-grey" aria-hidden="true">Search</i></span>
        </div>
      </div>
    )
  }
}

export default SearchForm;