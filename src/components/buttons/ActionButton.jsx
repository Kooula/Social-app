import React, { useState } from "react";

const ActionButton = ({ onClick, style, label, hoverColor, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonStyle = {
    backgroundColor: isActive
      ? hoverColor
      : isHovered
      ? hoverColor
      : (style && style.backgroundColor) || "transparent",
    color: "#fff",
    padding: "10px 15px",
    fontSize: "14px",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <button
      className="action-button"
      onClick={onClick}
      style={buttonStyle}
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
    >
      {label}
    </button>
  );
};

export default ActionButton;
