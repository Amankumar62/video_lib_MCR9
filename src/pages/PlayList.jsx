import React, { useContext, useState } from "react";
import { VideoContext } from "../context/VideoContext";
import { AiOutlinePlusCircle } from "react-icons/ai";
import PlayListCard from "../component/PlayListCard";
import Modal from "../component/Modal";
import "./PlayList.css";
import CreatePlayList from "../component/CreatePlayList";

const PlayList = () => {
  const { playlists } = useContext(VideoContext);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1>Playlists</h1>
      <Modal open={open} close={() => setOpen(false)}>
        <CreatePlayList close={() => setOpen(false)} />
      </Modal>
      <div className="listing">
        {playlists.length === 0 ? (
          <h4>No Playlist Created.</h4>
        ) : (
          playlists?.map((playlist) => <PlayListCard {...playlist} />)
        )}
        <span className="add-playlist-icon">
          <AiOutlinePlusCircle onClick={() => setOpen(true)} />
        </span>
      </div>
    </div>
  );
};

export default PlayList;
