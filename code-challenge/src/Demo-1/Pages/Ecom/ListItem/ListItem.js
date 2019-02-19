import React from "react";
const ListItem = props => (
  <div className="card" key={props.key}>
    <h5>{props.title}</h5>
    <p>{props.description}</p>
    <p>{props.style}</p>
    <p>{props.size}</p>
    <p>
      {props.currencyFormate} {props.price}
    </p>
    <button type="submit" className="buy">
      BUY NOW
    </button>
  </div>
);

export default ListItem;
