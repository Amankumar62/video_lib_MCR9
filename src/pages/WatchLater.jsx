import React, { useContext } from "react";
import { VideoContext } from "../context/VideoContext";
import VideoCard from "../component/VideoCard";

const WatchLater = () => {
  const { getWatchLaterVideos } = useContext(VideoContext);
  const videos = getWatchLaterVideos();
  return (
    <div>
      <h1>Watch Later</h1>
      <div className="listing">
        {videos.map((video) => (
          <VideoCard key={video._id} {...video} />
        ))}
      </div>
    </div>
  );
};

export default WatchLater;
