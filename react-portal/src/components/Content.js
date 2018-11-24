import React from "react";

const Content = props => {
  return (
    <div className="content">
      <ul>
        <li>
          <span className="label">IP Address: </span>
          {props.ip}
        </li>

        <li>
          <span className="label">Host Name: </span>
          {props.hostname}{" "}
        </li>
        <li>
          <span className="label">City: </span>
          {props.city}{" "}
        </li>
        <li>
          <span className="label">Country: </span>
          {props.country}{" "}
        </li>
        <div className="view-more" onClick={props.click}>
          View Detail...
        </div>
      </ul>
    </div>
  );
};

export default Content;
