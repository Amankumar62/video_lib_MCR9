import React, { useContext, useReducer } from "react";
import { VideoContext } from "../context/VideoContext";
import VideoCard from "../component/VideoCard";
const queryReducer = (prevState, { type, payload }) => {
  switch (type) {
    case "ADD_QUERY":
      return { query: payload };
    case "default":
      return prevState;
  }
};
const Explore = () => {
  const { videos } = useContext(VideoContext);

  const [queryD, dispatch] = useReducer(queryReducer, {
    query: "",
  });

  console.log(queryD.query);
  let queryData = videos.filter(({ title }) =>
    title.toLowerCase().includes(queryD.query.trim().toLowerCase())
  );

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
        {queryData.map((video) => (
          <VideoCard key={video._id} {...video} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
