import React, { Component } from "react";
import ReactDOM from "react-dom";

class Portal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    let content = <noscript />;
    if (this.props.open) {
      content = (
        <div className="modal-wrapper" open={this.props.open}>
          <div className="modal">{this.props.children} </div>
          <Backdrop onClick={this.props.closed} />
        </div>
      );
    }
    return (
      <Portal>
        <div>{content}</div>
      </Portal>
    );
  }
}

export default Modal;
