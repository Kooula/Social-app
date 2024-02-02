import React from "react";
import "./Comments.css";

const Comments = ({ body, email }) => {
  return (
    <div className="comment-container">
      <div className="comment">
        <img
          className="comment-avatar"
          src="https://t3.ftcdn.net/jpg/06/03/30/74/360_F_603307418_jya3zntHWjXWn3WHn7FOpjFevXwnVP52.jpg"
          alt="User Avatar"
        />
        <div className="comment-content">
          <span className="comment-author">{email}</span>
          <p className="comment-text">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
