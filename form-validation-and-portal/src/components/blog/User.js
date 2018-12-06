import React, { Component } from "react";
import axios from "axios";

class User extends Component {
  currentId = null;
  state = {
    user: null
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    // Store prevId in state so, we can compare prop change
    // Clear out the previous-loaded data
    if (nextProps.match.params.id !== prevState.prevId) {
      return { user: null, prevId: nextProps.match.params.id };
    }
    return null;
  }
  componentDidMount() {
    this.loadAsyncData();
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.user === null) {
      this.loadAsyncData();
    }
  };
  // componentWillUnmount() {
  //   currentId = null;
  // }

  loadUser = async () => {
    const id = this.state.id;
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    this.setState({ user: data });
  };

  render() {
    const { user } = this.state;
    let post = <div>Loading...</div>;

    if (user) {
      post = (
        <ul className="fullpost">
          <li>
            <span className="label">Name:</span>
            {user.name}
          </li>
          <li>
            <span className="label">E-mail:</span>
            {user.email}
          </li>
          <li>
            <span className="label">Address:</span>
            {user.address.city}
          </li>
          <li>
            <span className="label">Company:</span>
            {user.company.name}
          </li>
          <li>
            <span className="label">Phone:</span>
            {user.phone}
          </li>
          <li>
            <span className="label">Website</span>
            {user.website}
          </li>
        </ul>
      );
    }
    return <div className="detail">{post}</div>;
  }

  loadAsyncData = async () => {
    this.currentId = this.props.match.params.id;
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${this.currentId}`
    );
    if (this.currentId === this.props.match.params.id) {
      this.setState({ user: data });
    }
  };
}

export default User;
