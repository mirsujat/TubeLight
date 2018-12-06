import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const URL = `https://randomuser.me/api/?&results=12&nat=us,dk,fr,gb`;
const USER_URL = `https://jsonplaceholder.typicode.com/users`;

class Posts extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    this.getUser();
  }
  getUser = async () => {
    const { data } = await axios.get(USER_URL);
    this.setState({ users: data });
  };
  // loadUser = async () => {
  //   const response = await fetch(USER_URL);
  //   const json = await response.json();
  //   this.setState({ users: json });
  //   console.log(this.state.users);
  // };
  handleSelectedUser = id => {
    this.setState({ selectedUser: id });
  };
  render() {
    const { users } = this.state;
    let content = null;
    if (!users) {
      content = <div>Loading...</div>;
    }
    if (users) {
      content = users.map(user => {
        return (
          <Link to={`/users/${user.id}`} key={user.id}>
            <div className="post">
              <div>
                <div>
                  <span className="label">Name: </span>
                  {user.name}
                </div>
                <div>
                  <span className="label">Username: </span>
                  {user.username}
                </div>
                <div>
                  <span className="label">E-mail: </span>
                  {user.email}
                </div>
                <div>
                  <span className="label">Address: </span>
                  {user.address.street}
                </div>
              </div>
            </div>
          </Link>
        );
      });
    }
    return <div className="posts">{content}</div>;
  }
}

export default Posts;
