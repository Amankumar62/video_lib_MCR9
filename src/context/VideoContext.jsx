import { createContext, useReducer } from "react";
import { videos } from "../data";

export const VideoContext = createContext();

const videoReducer = (prevState, { type, payload }) => {};

export const VideoProvider = ({ children }) => {
  const [videoData, dispatch] = useReducer(videoReducer, {
    videos: videos,
  });

  const getCategoryVideos = (categoryName) => {
    return videoData.videos.filter(
      ({ category }) => category.toLowerCase() === categoryName.toLowerCase()
    );
  };

  return (
    <VideoContext.Provider
      value={{
        videos: videoData.videos,
        getCategoryVideos,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
