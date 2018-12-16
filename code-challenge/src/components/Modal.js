import React, { Component } from "react";
import ReactDOM from "react-dom";
class Portal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.contaier = document.createElement("div");
  }
  componentDidMount() {
    document.body.appendChild(this.contaier);
  }
  componentWillUnmount() {
    document.body.removeChild(this.contaier);
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.contaier);
  }
}

const Backdrop = props => <div className="backdrop" {...props} />;

class Modal extends Component {
  state = {};
  render() {
    let content = <noscript />;
    if (this.props.open) {
      content = (
        <div>
          <div className="modal-wrapper">
            <div className="modal" open={this.props.open}>
              {this.props.children}
            </div>
            <Backdrop onClick={this.props.closed} />
          </div>
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
