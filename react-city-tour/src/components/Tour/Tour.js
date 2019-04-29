import React, { Component } from "react";
import "./Tour.scss";
class Tour extends Component {
  state = {};
  render() {
    return (
      <article className="tour">
        <div className="img-container">
          <img
            width="200"
            src="https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <span className="close-btn">
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>city</h3>
          <h4>Name</h4>
          <h5>
            Info{" "}
            <span>
              <i className="fas fa-caret-square-down" />
            </span>{" "}
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum animi
            neque dolores iste deleniti, rerum repudiandae aspernatur cupiditate
            maxime aperiam optio asperiores officiis culpa non deserunt minus,
            quasi blanditiis totam!
          </p>
        </div>
      </article>
    );
  }
}

export default Tour;
