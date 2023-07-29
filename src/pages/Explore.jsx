import React, { useContext, useReducer, useState } from "react";
import { VideoContext } from "../context/VideoContext";
import VideoCard from "../component/VideoCard";
const queryReducer = (prevState, { type, payload }) => {
  switch (type) {
    case "ADD_QUERY":
      return payload;
    case "default":
      return prevState;
  }
};
const Explore = () => {
  const { videos } = useContext(VideoContext);

  const [query, dispatch] = useReducer(queryReducer, "");

  console.log(query);
  let queryData = videos.filter(
    (video) => video.title.toLowerCase() === query.trim().toLowerCase()
  );
  console.log(queryData);

  return (
    <div>
      <h1>Explore</h1>
      <input
        type="search"
        onChange={(e) =>
          dispatch({ type: "ADD_QUERY", payload: e.target.value })
        }
      />
      <div className="listing">
        {videos.map((video) => (
          <VideoCard key={video._id} {...video} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
