import React from "react";
import "./ToastMessage.css";

const ToastMessage = ({ message, backgroundColor, isVisible }) => {
  return (
    <div
      className={`toast-message ${isVisible ? "visible" : "hidden"}`}
      style={{ backgroundColor: backgroundColor }}
    >
      {message}
    </div>
  );
};

export default ToastMessage;
