import React, { Component } from "react";
import ReactDOM from "react-dom";

class Dialog extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement("div");
    this.destination = document.getElementById("root");
  }

  componentDidMount() {
    document.body.appendChild(this.container);
    // document.body.insertBefore(this.container, this.destination);
    // document.getElementById("root").appendChild(this.container);
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
    let modalRoot = "modal-root closed";
    let content = <noscript />;
    if (this.props.open) {
      modalRoot = "modal-root open";
      content = (
        <div className="modal-wrapper">
          <div className="modal">
            <div className="modal-content">{this.props.children}</div>
            <Backdrop onClick={this.props.closed} />
          </div>
        </div>
      );
    }
    return (
      <Dialog>
        <div className={modalRoot}>{content}</div>
      </Dialog>
    );
  }
}

export default Modal;
