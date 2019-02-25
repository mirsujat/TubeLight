import React from "react";
import Modal from "../../../Modal/Modal";

const OrderForm = props => {
  let open = props.open;
  let content = null;
  if (open) {
    content = (
      <Modal open={props.open} closed={props.closed}>
        <form className="order-form" onSubmit={props.submit}>
          <p>Name: {props.title}</p>
          <p>Description: {props.description}</p>
          <p>
            Price: {props.currencyFormat} {props.price}
          </p>
          <div className="form-field">
            <label>Please Select Size</label>
            <select name="availableSizes" onChange={props.handleChange}>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="X">XS</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div className="form-field">
            <label>Please Select Quantity</label>
            <select name="orderQuantity" onChange={props.handleChange}>
              <option value={1}>{1}</option>
              <option value={2}>{2}</option>
              <option value={3}>{3}</option>
              <option value={4}>{4}</option>
              <option value={5}>{5}</option>
              <option value={6}>{6}</option>
              <option vlaue={7}>{7}</option>
              <option value={8}>{8}</option>
              <option value={9}>{9}</option>
              <option value={10}>{10}</option>
            </select>
          </div>
          <p onChange={props.handleChange} name="amount">
            Amount: {props.currencyFormat} {props.amount}
          </p>
          <div className="form-field">
            <button type="submit" className="order-btn">
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
