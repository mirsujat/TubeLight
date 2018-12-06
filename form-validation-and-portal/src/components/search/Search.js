import React, { Component } from "react";
import axios from "axios";
const url = `https://ip.nf/me.json`;
class Search extends Component {
  state = {
    user: null,
    searchTerm: "me",
    error: ""
  };

  componentDidMount = async () => {
    const searchTerm = this.state.searchTerm;
    if (this.state.user === null) {
      const { data } = await axios.get(`https://ip.nf/${searchTerm}.json`);
      this.setState({ user: data, searchTerm: data.ip.ip, error: "" });
    }
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const searchTerm = this.state.searchTerm;
    if (
      prevState.searchTerm !== "me" &&
      prevState.searchTerm !== searchTerm &&
      searchTerm.length === 14
    ) {
      try {
        const { data } = await axios.get(`https://ip.nf/${searchTerm}.json`);
        if (searchTerm !== prevState.searchTerm && searchTerm.length === 14) {
          this.setState({ user: data, searchTerm: data.ip.ip, error: "" });
        }
      } catch (error) {
        if (!this.state.error) {
          this.setState({ user: null, error: "Invalid IP Address!!!" });
        }
        console.log(error);
      }
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.searchIp();
  };
  searchIp = async () => {
    const searchTerm = this.state.searchTerm;
    try {
      const { data } = await axios.get(`https://ip.nf/${searchTerm}.json`);
      this.setState({ user: data, searchTerm: data.ip.ip, error: "" });
    } catch (error) {
      if (!this.state.error) {
        this.setState({ user: null, error: "Invalid IP Address!!!" });
      }
      console.log(error);
    }
  };

  render() {
    const { user, error } = this.state;
    let content = <div>Loading...</div>;
    if (error) {
      content = <div style={{ color: "red" }}>{error}</div>;
    }
    if (user) {
      content = (
        <div className="address">
          <ul className="lists">
            <li>
              <span className="label">IP Address: </span>
              {user.ip.ip}
            </li>
            <li>
              <span className="label">Host Name: </span>
              {user.ip.hostname}
            </li>
            <li>
              <span className="label">City: </span>
              {user.ip.city}
            </li>
            <li>
              <span className="label">Country: </span>
              {user.ip.country}
            </li>
          </ul>
        </div>
      );
    }
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={e => this.setState({ searchTerm: e.target.value })}
          />
          <button type="submit" style={{ padding: "4px 10px" }}>
            Submit
          </button>
        </form>
        {content}
      </div>
    );
  }
}

export default Search;
