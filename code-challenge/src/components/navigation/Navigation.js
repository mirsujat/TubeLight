import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = props => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/posts/:id">Post Detail</NavLink>
        </li>
        <li>
          <NavLink to="/registration">Registration</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
