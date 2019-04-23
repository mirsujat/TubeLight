import React, { Component } from "react";
import Title from "../Title/Title";
import CartColumns from "./CartColumns";

class Cart extends Component {
  state = {};
  render() {
    return (
      <section>
        <Title name="your" title="cart" />
        <CartColumns />
      </section>
    );
  }
}

export default Cart;
