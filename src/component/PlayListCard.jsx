import React, { useContext } from "react";
import { ImCancelCircle } from "react-icons/im";
import "./PlayListCard.css";
import { VideoContext } from "../context/VideoContext";
const PlayListCard = ({ _id, name, description, thumbnail }) => {
  const { removePlaylist } = useContext(VideoContext);
  return (
    <div>
      <div className="playlist-image-section">
        <span onClick={() => removePlaylist(_id)}>
          <ImCancelCircle />
        </span>
        <img src={thumbnail} height={200} width={250} />
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PlayListCard;
