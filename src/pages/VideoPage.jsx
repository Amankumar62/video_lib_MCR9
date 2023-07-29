import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsPencil } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import {
  MdWatchLater,
  MdPlaylistAdd,
  MdOutlinePlaylistAddCheck,
} from "react-icons/md";
import { VideoContext } from "../context/VideoContext";
import "./VideoPage.css";
import Modal from "../component/Modal";
import CreateNote from "../component/CreateNote";

const VideoPage = () => {
  const { videoId } = useParams();
  const {
    getVideoDetail,
    videos,
    toggleWatchLater,
    isWatchLater,
    getVideoNotes,
    deleteNote,
  } = useContext(VideoContext);
  const video = getVideoDetail(videoId);
  const notes = getVideoNotes(videoId);
  const navigate = useNavigate();
  const [openNote, setOpenNote] = useState(false);
  const [editNote, setEditNote] = useState(false);
  return (
    <div className="video-page-container">
      <Modal open={openNote} close={() => setOpenNote(false)}>
        <CreateNote
          close={() => setOpenNote(false)}
          id={videoId}
          preText={""}
          edit={false}
        />
      </Modal>

      <div className="video-page-first-section">
        <embed
          type="video/webm"
          src={video?.src}
          width="700"
          height="400"
        ></embed>
        <div className="video-title">
          <div>
            <img src="https://picsum.photos/40/40" alt={video?.creator} />
            <h4>{video?.title}</h4>
          </div>
          <div>
            <span
              style={{ color: isWatchLater(video?._id) ? "#72bcd4" : "" }}
              className="icon"
              onClick={() => toggleWatchLater(video?._id)}
            >
              <MdWatchLater />
            </span>
            <span className="icon">
              <MdPlaylistAdd />
            </span>
            <span className="icon" onClick={() => setOpenNote(true)}>
              <MdOutlinePlaylistAddCheck />
            </span>
          </div>
        </div>
        <div className="notes-listing">
          <h2>My Notes</h2>
          <div className="notes-listing">
            {notes.length === 0 ? (
              <p className="font-inc">No Notes added</p>
            ) : (
              notes.map((note) => (
                <div key={note?._id} className="note">
                  <p>{note?.note}</p>
                  <div>
                    <Modal open={editNote} close={() => setEditNote(false)}>
                      <CreateNote
                        close={() => setEditNote(false)}
                        preText={note}
                        id={videoId}
                        edit={true}
                      />
                    </Modal>
                    <span onClick={() => setEditNote(true)}>
                      <BsPencil className="icon" />
                    </span>
                    <span onClick={() => deleteNote(note?._id)}>
                      <AiFillDelete className="icon" />
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="video-page-second-section">
        <h2>More Videos:</h2>
        {videos
          .filter(({ _id }) => _id !== Number(videoId))
          .map((video) => (
            <div
              key={video?._id}
              className="more-videos"
              onClick={() => navigate(`/video/${video?._id}`)}
            >
              <img src={video?.thumbnail} alt={video?.title} />
              <section className="more-videos-description">
                <p>
                  <b>{video?.title}</b>
                </p>
                <p>{video?.creator}</p>
              </section>
            </div>
          ))}
      </div>
    </div>
  );
};

export default VideoPage;
