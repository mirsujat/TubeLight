import React from "react";

const Content = ({ ip, hostname, city, country, click }) => {
  let Detail = <div className="content">Loading...!</div>;

  if (ip) {
    Detail = (
      <div className="content">
        <ul>
          <li>
            <span className="label">IP Address: </span>
            {ip}
          </li>

          <li>
            <span className="label">Host Name: </span>
            {hostname}{" "}
          </li>
          <li>
            <span className="label">City: </span>
            {city}{" "}
          </li>
          <li>
            <span className="label">Country: </span>
            {country}{" "}
          </li>
          <div className="view-more" onClick={click}>
            View Detail...
          </div>
        </ul>
      </div>
    );
  }
  return (
    <div>
      <div>{Detail}</div>
    </div>
  );
};

export default Content;
