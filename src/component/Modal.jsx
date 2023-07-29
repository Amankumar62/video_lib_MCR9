import React from "react";
import "./Modal.css";
const Modal = ({ children, open, close }) => {
  if (!open) {
    return null;
  }
  return (
    <>
      <div className="modal-backdrop" onClick={() => close()} />
      <div className="modal-container">{children}</div>
    </>
  );
};

export default Modal;
