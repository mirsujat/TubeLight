import React from "react";

const Square = props => {
  // an empty space before highlight is very important
  // Ohterwise it will showed squarehighlight that is wrong class
  const className = "square" + (props.highlight ? " highlight" : " ");
  return (
    <button className={className} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
