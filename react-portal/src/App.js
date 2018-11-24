import _ from "lodash";
import React, { Component } from "react";
import axios from "axios";
import Search from "./components/Search";
import Content from "./components/Content";
import Modal from "./components/portal/Portal";
import Detail from "./components/Detail";

class App extends Component {
  state = {
    user: null,
    searchTerm: "me",
    error: false,
    errorMsg: "",
    open: false
  };
  componentDidMount() {
    if (this.state.user === null) {
      this.ipSearch();
    }
  }
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
      }
    }
  };
  handleChange = e => {
    this.setState({ term: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.term.length <= 0) {
      alert("You can not submit Empty form. Please type Vaid IP Address");
    } else {
      this.ipSearch();
    }
  };
  ipSearch = async () => {
    const searchTerm = this.state.searchTerm;
    try {
      const { data } = await axios.get(`https://ip.nf/${searchTerm}.json`);
      this.setState({ user: data, error: false, errorMsg: "" });
    } catch (error) {
      if (!this.state.error) {
        this.setState({
          user: null,
          error: true,
          errMsg: "Something Went Wrong!"
        });
      }
    }
  };

  ipSearchonChange = _.debounce(term => {
    this.ipSearch(term);
  }, 300);

  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClickClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { user } = this.state;
    console.log("user: ", user);

    let content = null;
    let detail = null;
    if (this.state.error && this.state.errorMsg) {
      content = <div style={{ color: "red" }}>{this.state.errorMsg}</div>;
    }
    if (user) {
      content = (
        <div>
          <Content
            ip={user.ip.ip}
            hostname={user.ip.hostname}
            city={user.ip.city}
            country={user.ip.country}
            click={this.handleClickOpen}
          />
        </div>
      );
    }
    if (user && this.state.open) {
      detail = (
        <div>
          <Detail
            ip={user.ip.ip}
            asn={user.ip.asn}
            hostname={user.ip.hostname}
            city={user.ip.city}
            postCode={user.ip.post_code}
            country={user.ip.country}
            countryCode={user.ip.country_code}
            latitude={user.ip.latitude}
            longitude={user.ip.longitude}
          />
        </div>
      );
    }
    return (
      <div className="app">
        <section className="header">
          <div>
            IP Finder{" "}
            <span onClick={this.handleClickOpen} className="login-text">
              Login
            </span>{" "}
          </div>
          <Search
            type="text"
            name="term"
            value={this.state.term}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </section>
        <section>{content}</section>
        <Modal open={this.state.open} onClose={this.handleClickClose}>
          {detail}
          <button onClick={this.handleClickClose} className="close-btn">
            Close
          </button>
        </Modal>
        {/* <Modal open={this.state.open} onClose={this.handleClickClose}>
          <button onClick={this.handleClickClose} className="close-btn">
            Close
          </button>
          <Login />
        </Modal> */}
      </div>
    );
  }
}

export default App;
