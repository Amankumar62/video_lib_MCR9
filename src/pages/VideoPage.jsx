import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { VideoContext } from "../context/VideoContext";
import "./VideoPage.css";

const VideoPage = () => {
  const { videoId } = useParams();
  const { getVideoDetail, videos } = useContext(VideoContext);
  const video = getVideoDetail(videoId);
  const navigate = useNavigate();
  return (
    <div className="video-page-container">
      <div className="video-page-first-section">
        <embed
          type="video/webm"
          src={video?.src}
          width="700"
          height="400"
        ></embed>
        <div>
          <img src="https://picsum.photos/40/40" alt={video?.creator} />
          <h4>{video?.title}</h4>
          <div>{/* <h2></h2> */}</div>
        </div>
        <div>
          <h2>My Notes</h2>
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
