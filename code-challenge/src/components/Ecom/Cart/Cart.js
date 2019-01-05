import React, { Component } from "react";
class Cart extends Component {
  state = {};
  render() {
    let content = null;
    if (this.props.cartopen) {
      content = (
        <div className="card">
          <table>
            <caption>YOUR SHOPPING CART</caption>
            <thead>
              <tr>
                <td>#</td>
                <td>Order Number</td>
                <td>Name</td>
                <td>Description</td>
                <td>Unit Price($)</td>
                <td>Order Quantity</td>
                <td>Amount</td>
                <td>Remove</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>12344</td>
                <td>Item Name T-Shirt for Men</td>
                <td>Men's T-Shirt, Size X</td>
                <td>$ 12.40</td>
                <td>4</td>
                <td>$ 240</td>
                <td>Remove</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>TOTAL = </td>
                <td>$ 240</td>
              </tr>
            </tfoot>
          </table>
        </div>
      );
    }
    return <div className="cart">{content}</div>;
  }
}

export default Cart;
