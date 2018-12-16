import React, { Component } from "react";
import Portal from "./Portal/Portal";
import Backdrop from "./Backdrop/Backdrop";

class Modal extends Component {
  render() {
    let content = <noscript />;
    if (this.props.open) {
      content = (
        <div>
          <div className="modal-wrapper">
            <div className="modal" open={this.props.open}>
              {this.props.children}
            </div>
            <Backdrop closed={this.props.closed} />
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
