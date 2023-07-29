import React from "react";
import "./VideoCard.css";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ _id, title, views, thumbnail, category, creator }) => {
  const navigate = useNavigate();
  return (
    <div
      className="video-card-container"
      onClick={() => navigate(`/video/${_id}`)}
    >
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
