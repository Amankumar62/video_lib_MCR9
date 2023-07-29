import React, { useContext } from "react";
import { VideoContext } from "../context/VideoContext";
import VideoCard from "../component/VideoCard";

const Explore = () => {
  const { videos } = useContext(VideoContext);
  return (
    <div>
      <h1>Explore</h1>
      <input type="search" />
      <div className="listing">
        {videos.map((video) => (
          <VideoCard key={video._id} {...video} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
