import React, { Component } from "react";
import axios from "axios";
import Form from "./components/test2/Form";
import Content from "./components/test2/Content";

/* const formValid = formErrors => {
  let valid = true;
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  return valid;
}; */

class App extends Component {
  state = {
    ip: "me",
    asn: null,
    netmask: null,
    hostname: null,
    city: null,
    country: null,
    error: false,
    errorMsg: "",
    formErrors: ""
  };
  componentDidMount() {
    console.log("Hello!");
    this.getIp();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.ip !== prevState.ip) {
      console.log("World");
      return { ...this.state };
    }
    return;
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.ip.length < 2) {
      alert("Value should be 'me' or Valid IP Address.");
    } else {
      this.getIp();
    }
  };
  // HTTP request with fetch
  // getIp = async () => {
  //   const IP = this.state.ip;
  //   try {
  //     const response = await fetch(`https://ip.nf/${IP}.json`, {
  //       method: "GET"
  //     });
  //     const data = await response.json();
  //     this.setState({
  //       ip: data.ip.ip,
  //       asn: data.ip.asn,
  //       netmask: data.ip.netmask,
  //       hostname: data.ip.hostname,
  //       city: data.ip.city,
  //       country: data.ip.country,
  //       error: false,
  //       errorMsg: ""
  //     });
  //   } catch (error) {
  //     this.setState({
  //       ip: "",
  //       asn: null,
  //       netmask: null,
  //       hostname: null,
  //       city: null,
  //       country: null,
  //       error: true,
  //       errorMsg:
  //         "BAD REQUEST: Invalid IP Address! or Check Your Internet Connection"
  //     });
  //   }
  // };

  // HTTP Request with axios
  getIp = async () => {
    const IP = this.state.ip;
    try {
      const { data } = await axios.get(`https://ip.nf/${IP}.json`);
      this.setState({
        ip: data.ip.ip,
        asn: data.ip.asn,
        netmask: data.ip.netmask,
        hostname: data.ip.hostname,
        city: data.ip.city,
        country: data.ip.country,
        error: false,
        errorMsg: ""
      });
    } catch (error) {
      this.setState({
        ip: "",
        asn: null,
        netmask: null,
        hostname: null,
        city: null,
        country: null,
        error: true,
        errorMsg:
          "BAD REQUEST: Invalid IP Address! or Check Your Internet Connection"
      });
    }
  };
  render() {
    const {
      ip,
      asn,
      netmask,
      hostname,
      city,
      country,
      error,
      errorMsg
    } = this.state;
    let content = null;
    if (error && errorMsg) {
      content = <div style={{ color: "red" }}>{errorMsg}</div>;
    } else {
      content = (
        <div>
          <Content
            ip={ip}
            asn={asn}
            netmask={netmask}
            hostname={hostname}
            city={city}
            country={country}
          />
        </div>
      );
    }

    return (
      <div className="app">
        <section className="header">
          <div>IP Finder</div>
          <Form
            type="text"
            name="ip"
            value={ip}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </section>
        <section className="content">{content}</section>
      </div>
    );
  }
}

export default App;
