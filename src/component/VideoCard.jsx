import React from "react";
import "./VideoCard.css";

const VideoCard = ({
  _id,
  title,
  views,
  thumbnail,
  category,
  src,
  creator,
}) => {
  return (
    <div className="video-card-container">
      <div className="video-card-image-container">
        <img
          src={thumbnail}
          alt={title}
          className="video-card-container-thumbnail"
        />
        <span className="video-card-watchlater">Lat</span>
      </div>
      <div className="video-card-description">
        <img src="https://picsum.photos/40/40" alt={creator} />

        <div>
          <h4>{title}</h4>
          <h4>{category}</h4>
          <span>
            {views} views | {creator}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
