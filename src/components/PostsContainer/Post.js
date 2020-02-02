import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = ({ post }) => {
  // set up state for the likes
  const [likes, setLikes] = useState(post.likes);
  return (
    <div className="post-border">
      <PostHeader username={post.username} thumbnailUrl={post.thumbnailUrl} />
      <div className="post-image-wrapper">
        <img alt="post thumbnail" className="post-image" src={post.imageUrl} />
      </div>
      <LikeSection likes={likes} setLikes={setLikes} />
      <CommentSection postId={post.imageUrl} commentsData={post.comments} />
    </div>
  );
};

export default Post;
