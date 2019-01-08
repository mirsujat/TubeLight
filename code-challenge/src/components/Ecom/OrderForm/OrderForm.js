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
            <p>Name: Product name</p>
            <p>Description: Product description</p>
            <p>Price: $ 23.40</p>
            <div className="form-field">
              <button type="submit">REGISTER</button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }

  return <div>{content}</div>;
};

export default OrderForm;
