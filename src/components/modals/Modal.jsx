import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, closeModal, children }) => {
  const onOverlayClick = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onOverlayClick}>
          <div className="modal">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
