import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = ({ commentsData }) => {
  // Add state for the comments
  const [comments, setComments] = useState(commentsData);

  return (
    <div>
      {comments.map((comment, index) => (
        <Comment comment={comment} key={index} />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
