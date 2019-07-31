import React from "react";
import ReactDOM from "react-dom";

const Portal = ({ children, hide }) => {
  return ReactDOM.createPortal(
    <React.Fragment>
      <div className="modal-overlay" onClick={hide} />
      <div className="modal-root">
        <div
          className="modal-wrapper"
          aria-modal
          aria-hidden
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal">
            <div className="modal-header">
              <button
                type="button"
                className="modal-close-button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={hide}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      </div>
    </React.Fragment>,
    document.body
  );
};

export default Portal;
