import React from "react";
import Modal from "../../Portal/Portal";

const OrderForm = props => {
  let open = props.open;
  let formopen = props.formopen;
  let content = null;
  if (open && formopen) {
    content = (
      <Modal open={props.open} closed={props.closed}>
        <div className="card">
          <form onSubmit={props.handleSubmit} className="order-form">
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
              <label>Please Select Size</label>
              <select name={props.orderQuantity}>
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
            <p>Amount: {props.amount}</p>
            <div className="form-field">
              <button type="submit">ORDER NOW</button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }

  return <div>{content}</div>;
};

export default OrderForm;
