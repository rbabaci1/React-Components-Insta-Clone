import React from "react";
import "./Comment.css";

const Comment = ({ comment }) => {
  return (
    <div className="comment-text">
      <span className="user">{comment.username}</span>{" "}
      <span className="comment">{comment.text}</span>
    </div>
  );
};

export default Comment;
