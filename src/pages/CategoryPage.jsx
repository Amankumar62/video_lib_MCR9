import React, { useContext } from "react";
import { VideoContext } from "../context/VideoContext";
import { useParams } from "react-router-dom";
import VideoCard from "../component/VideoCard";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { getCategoryVideos } = useContext(VideoContext);

  const videos = getCategoryVideos(categoryName);

  return (
    <div>
      <h1>{categoryName}</h1>
      <div className="listing">
        {videos?.map((video) => (
          <VideoCard key={video._id} {...video} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
