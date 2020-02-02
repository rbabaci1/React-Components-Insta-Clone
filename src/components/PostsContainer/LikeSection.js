import React from "react";

const LikeSection = ({ likes, setLikes }) => {
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <i className="far fa-heart" onClick={() => setLikes(likes + 1)} />
        </div>
        <div className="like-section-wrapper">
          <i className="far fa-comment" />
        </div>
      </div>
      <p className="like-number">{likes} likes</p>
    </div>
  );
};

export default LikeSection;
