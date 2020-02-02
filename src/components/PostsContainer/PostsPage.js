import React from "react";
import Post from "./Post";
import "./Posts.css";

const PostsPage = ({ dummyData }) => {
  return (
    <div className="posts-container-wrapper">
      {dummyData.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
};

export default PostsPage;
