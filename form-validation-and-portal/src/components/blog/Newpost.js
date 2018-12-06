import React, { Component } from "react";

const initialState = {
  title: "",
  author: "",
  email: "",
  content: "",
  category: "",
  confirm: false
};

class NewPost extends Component {
  state = initialState;

  handleChange = e => {
    const isCheckbox = e.target.type === "checkbox";
    const { name, value, checked } = e.target;
    this.setState({
      [name]: isCheckbox ? checked : value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState(initialState);
  };

  render() {
    const { title, author, email, content, category, confirm } = this.state;
    return (
      <div className="newpost">
        <h1>Create New Post</h1>
        <form onSubmit={this.handleSubmit} className="form-group">
          <div className="form-field">
            <label htmlFor="label">Title: </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="label">Author: </label>
            <input
              type="text"
              name="author"
              value={author}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="label">E-mail: </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="label">Content: </label>
            <textarea
              type="text"
              name="content"
              value={content}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="label">Category: </label>
            <select
              name="category"
              value={category}
              onChange={this.handleChange}
            >
              <option>ReactJS</option>
              <option>AngularJS</option>
              <option>VueJS</option>
              <option>NodeJS</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="label">Confirm: </label>
            <input
              type="checkbox"
              name="confirm"
              checked={confirm}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-field">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;
