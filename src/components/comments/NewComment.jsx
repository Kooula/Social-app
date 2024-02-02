import React from "react";
import ActionButton from "../buttons/ActionButton";

const NewComment = ({ onInputChange, formData, post, onAddComment }) => {
  return (
    <div className="add-comment">
      <input
        placeholder="Write a comment"
        className="comment-input"
        onChange={onInputChange}
        name="body"
        value={formData.body}
      ></input>
      <ActionButton
        label={"Comment"}
        style={{ backgroundColor: "#1da1f2" }}
        onClick={() => onAddComment(post.id)}
      />
    </div>
  );
};

export default NewComment;
