import React, { Component, Fragment } from "react";
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
  state = {};
  render() {
    let content = <noscript></noscript>;
    if (this.props.open) {
      content = (
        <div className="modal-wrapper" open={this.props.open}>
          <div className="modal">{this.props.children}</div>
          <Backdrop onClick={this.props.closed}></Backdrop>
        </div>
      );
    }
    return (
      <Portal>
        <Fragment>{content}</Fragment>
      </Portal>
    );
  }
}

export default Modal;
