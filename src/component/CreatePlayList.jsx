import React, { useContext } from "react";
import "./CreatePlayList.css";
import { VideoContext } from "../context/VideoContext";
const CreatePlayList = ({ close }) => {
  const { createPlaylist } = useContext(VideoContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    createPlaylist(
      e.target.elements.name?.value,
      e.target.elements.description?.value
    );
    close();
  };
  return (
    <div className="create-playlist-container">
      <h2>Create Playlist</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>New Playlist Name:</label>
        <input id="name" type="text" placeholder="name" required />
        <label>Playlist description:</label>
        <input
          id="description"
          type="text"
          placeholder="description"
          required
        />
        <button type="submit">Create New Playlist</button>
      </form>
    </div>
  );
};

export default CreatePlayList;
