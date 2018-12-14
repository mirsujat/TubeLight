import React, { Component } from "react";
import ReactDOM from "react-dom";

class Portal extends Component {
  constructor(props) {
    super(props);
    this.element = document.createElement("div");
  }
  componentDidMount() {
    document.body.appendChild(this.element);
  }
  componentWillUnmount() {
    document.body.removeChild(this.element);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.element);
  }
}

const Backdrop = props => <div className="backdrop" {...props} />;

class Modal extends Component {
  render() {
    let modalRoot = "modal-root modal-close";
    let content = <noscript />;
    if (this.props.open) {
      modalRoot = "modal-root modal-open";
      content = (
        <div className="modal-wrapper" open={this.props.open}>
          <div className="modal">{this.props.children}</div>
          <Backdrop onClick={this.props.closed} />
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
