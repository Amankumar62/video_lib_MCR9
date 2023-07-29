import { createContext, useReducer } from "react";
import { videos } from "../data";

export const VideoContext = createContext();

const videoReducer = (prevState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_WATCHLATER":
      return { ...prevState, watchlater: [...prevState.watchlater, payload] };
    case "REMOVE_FROM_WATCHLATER":
      return {
        ...prevState,
        watchlater: prevState.watchlater.filter((id) => id !== payload),
      };
    default:
      return prevState;
  }
};

export const VideoProvider = ({ children }) => {
  const [videoData, dispatch] = useReducer(videoReducer, {
    videos: videos,
    watchlater: [],
  });

  const getCategoryVideos = (categoryName) => {
    return videoData.videos.filter(
      ({ category }) => category.toLowerCase() === categoryName.toLowerCase()
    );
  };

  const isWatchLater = (videoId) => {
    return videoData.watchlater.find((id) => id === videoId) !== undefined
      ? true
      : false;
  };

  const toggleWatchLater = (videoId) => {
    if (!isWatchLater(videoId)) {
      console.log("enter");
      dispatch({ type: "ADD_TO_WATCHLATER", payload: videoId });
    } else {
      dispatch({ type: "REMOVE_FROM_WATCHLATER", payload: videoId });
    }
  };

  const getWatchLaterVideos = () => {
    return videoData.videos.filter(({ _id }) =>
      videoData.watchlater.find((id) => id === _id)
    );
  };

  const getVideoDetail = (id) => {
    return videoData.videos.find(({ _id }) => _id === Number(id));
  };

  return (
    <VideoContext.Provider
      value={{
        videos: videoData.videos,
        watchlater: videoData.watchlater,
        getCategoryVideos,
        getVideoDetail,
        toggleWatchLater,
        getWatchLaterVideos,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
