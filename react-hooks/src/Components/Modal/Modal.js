import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import Portal from "./Portal";

const Modal = ({ isShowing, hide }) =>
  isShowing ? (
    <Portal hide={hide}>
      <p>Hello From React Portal, Modal and Hoooks</p>
      <p>Hello From React Portal, Modal and Hoooks</p>
      <p>Hello From React Portal, Modal and Hoooks</p>
      <p>Hello From React Portal, Modal and Hoooks</p>
    </Portal>
  ) : null;

export default Modal;
