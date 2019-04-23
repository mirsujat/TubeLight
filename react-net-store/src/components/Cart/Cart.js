import React, { Component } from "react";
import Title from "../Title/Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";

class Cart extends Component {
  state = {};
  render() {
    return (
      <section>
        <Title name="your" title="cart" />
        <CartColumns />
        <EmptyCart />
      </section>
    );
  }
}

export default Cart;
