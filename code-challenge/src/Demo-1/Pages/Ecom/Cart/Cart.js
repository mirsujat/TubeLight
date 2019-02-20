import React, { Component } from "react";
class Cart extends Component {
  state = {};
  render() {
    let cart = <noscript />;
    if (this.props.open) {
      cart = (
        <div open={this.props.open} onClick={this.props.cartclicked}>
          <div className="cart">{this.props.children}</div>
        </div>
      );
    }
    return <div>{cart}</div>;
  }
}

export default Cart;
