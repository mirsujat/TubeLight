import React from "react";
import Modal from "../../../Modal/Modal";

const OrderForm = props => {
  let open = props.open;
  let content = null;
  if (open) {
    content = (
      <Modal open={props.open} closed={props.closed}>
        <form className="order-form">
          <p>Name: {props.title}</p>
          <p>Description: {props.description}</p>
          <p>
            Price: {props.currencyFormat} {props.price}
          </p>
          <div className="form-field">
            <label>Please Select Size</label>
            <select name={props.availableSizes}>
              <option>X</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="form-field">
            <label>Please Select Quantity</label>
            <select name="orderQuantity" onChange={props.handleChange}>
              <option>{1}</option>
              <option>{2}</option>
              <option>{3}</option>
              <option>{4}</option>
              <option>{5}</option>
              <option>{6}</option>
              <option>{7}</option>
              <option>{8}</option>
              <option>{9}</option>
              <option>{10}</option>
            </select>
          </div>
          <p onChange={props.handleChange} name="amount">
            Amount: {props.currencyFormat} {props.amount}
          </p>
          <div className="form-field">
            <button type="submt" className="order-btn">
              ORDER NOW
            </button>
          </div>
        </form>
      </Modal>
    );
  }
  return <div>{content}</div>;
};

export default OrderForm;
