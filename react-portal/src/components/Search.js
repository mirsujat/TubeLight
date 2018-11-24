import React, { Component } from "react";

class Search extends Component {
  render() {
    const { type, name, value, handleChange, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <input type={type} name={name} value={value} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Search;
