import React, { Component } from "react";
import ReactDOM from "react-dom";

class Portal extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement("div");
  }

  componentDidMount() {
    document.body.appendChild(this.container);
  }
  componentWillUnmount() {
    document.body.removeChild(this.container);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.container);
  }
}

const Backdrop = props => <div className="backdrop" {...props} />;

class Modal extends Component {
  render() {
    console.log("Props From Modal: ", this.props);
    let content = null;
    let modalRoot = "modal-root modal-close";
    if (this.props.open) {
      modalRoot = "modal-root modal-open";
    }
    if (this.props.open) {
      content = (
        <div className="modal-wrapper" open={this.props.open}>
          <div className="modal">
            <div>{this.props.children}</div>
          </div>
          <Backdrop onClick={this.props.onClose} />
        </div>
      );
    }
    return (
      <Portal>
        <div className={modalRoot}>{content}</div>
      </Portal>
    );
  }
}

export default Modal;
