import React, { useContext } from "react";
import "./VideoCard.css";
import { MdWatchLater } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { VideoContext } from "../context/VideoContext";

const VideoCard = ({ _id, title, views, thumbnail, category, creator }) => {
  const navigate = useNavigate();
  const { toggleWatchLater } = useContext(VideoContext);
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
        <span
          className="video-card-watchlater"
          onClick={(e) => {
            e.stopPropagation();
            toggleWatchLater(_id);
          }}
        >
          <MdWatchLater />
        </span>
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
