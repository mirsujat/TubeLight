import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  _currentId = null;
  state = {
    user: null
  };

  // if user is null only then we will run this code
  // This ensures that we will make network request  for the first time it
  // render to the DOM
  componentDidMount() {
    if (this.state.user === null) {
      this.loadUser();
    }
  }

  componentDidUpdate = async (prevProps, prevState) => {
    const prevId = prevProps.match.params.id;
    if (this._currentId !== prevId) {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${this._currentId}`
      );
      if (this._currentId !== prevId) {
        this.setState({ user: data });
      }
    }
  };

  componentWillUnmount() {
    this.setState({ user: null });
  }
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

  _currentId = this.props.match.params.id;
  loadUser = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${this._currentId}`
    );
    this.setState({ user: data });
  };
}

export default Post;
