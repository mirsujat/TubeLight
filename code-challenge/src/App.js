import React, { Component } from "react";
import Axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    searchTerm: "me",
    user: "",
    error: "",
    loading: false,
    formError: {
      searchTermError: ""
    }
  };

  componentDidMount() {
    if (!this.state.user) {
      this.searchIP();
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { searchTerm } = this.state;
    const ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (
      prevState.searchTerm !== "me" &&
      prevState.searchTerm !== searchTerm &&
      searchTerm.match(ipformat) &&
      searchTerm.length === 14
    ) {
      this.searchIP();
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.searchIP();
    }
  };
  searchIP = async () => {
    const { searchTerm } = this.state;
    try {
      this.setState({
        error: "",
        loading: true
      });
      const { data } = await Axios.get(`https://ip.nf/${searchTerm}.json`);
      this.setState({
        searchTerm: data.ip.ip,
        user: data,
        error: "",
        loading: false,
        formError: ""
      });
    } catch (error) {
      this.setState({
        user: "",
        error: "Somethink went wrong!!!. IP information not found.",
        loading: false,
        formError: ""
      });
    }
  };
  validate = () => {
    const { searchTerm } = this.state;
    let formError = {};
    let valid = true;
    const ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (!searchTerm.match(ipformat)) {
      valid = false;
      formError.searchTermError =
        "Invalid IP Address. Learn more about valid IP Address.";
    }
    this.setState({ formError: formError });
    return valid;
  };
  render() {
    const { user, error, loading } = this.state;
    let content = <div>There is no content to show!</div>;
    if (loading) {
      content = <div>Loading...</div>;
    }
    if (!loading && user) {
      content = (
        <div className="content">
          <ul>
            <li>
              <span>IP Address:</span>
              {user.ip.ip}
            </li>
            <li>
              <span>Hostname:</span>
              {user.ip.hostname}
            </li>
            <li>
              <span>City:</span>
              {user.ip.city}
            </li>
            <li>
              <span>Country:</span>
              {user.ip.country}
            </li>
          </ul>
        </div>
      );
    }
    if (error) {
      content = <div style={{ color: "red" }}>{error}</div>;
    }
    if (this.state.formError.searchTermError) {
      content = (
        <div style={{ color: "red" }}>
          {this.state.formError.searchTermError}
        </div>
      );
    }
    return (
      <div className="app">
        <div className="header">
          <div />
          <form onSubmit={this.handleSubmit} className="search-nav">
            <input
              type="text"
              name="searchTerm"
              value={this.state.searchTerm}
              onChange={e => this.setState({ searchTerm: e.target.value })}
            />
            <button type="submit">Submit</button>
          </form>
          <button className="reg-btn">Register</button>
        </div>
        {content}
      </div>
    );
  }
}

export default App;
