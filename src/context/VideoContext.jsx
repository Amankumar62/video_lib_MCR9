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
    case "CREATE_PLAYLIST":
      return { ...prevState, playlists: [...prevState.playlists, payload] };
    case "REMOVE_PLAYLIST":
      return {
        ...prevState,
        playlists: prevState.playlists.filter(({ _id }) => _id !== payload),
      };
    default:
      return prevState;
  }
};

export const VideoProvider = ({ children }) => {
  const [videoData, dispatch] = useReducer(videoReducer, {
    videos: videos,
    watchlater: [],
    playlists: [],
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

  const createPlaylist = (name, description) => {
    const playlist = {
      _id: Math.round(Math.random() * 1000),
      name: name,
      description: description,
      thumbnail: "https://picsum.photos/250/200",
      videos: [],
    };
    dispatch({ type: "CREATE_PLAYLIST", payload: playlist });
  };

  const removePlaylist = (id) => {
    dispatch({ type: "REMOVE_PLAYLIST", payload: id });
  };

  return (
    <VideoContext.Provider
      value={{
        videos: videoData.videos,
        watchlater: videoData.watchlater,
        playlists: videoData.playlists,
        getCategoryVideos,
        getVideoDetail,
        toggleWatchLater,
        isWatchLater,
        getWatchLaterVideos,
        createPlaylist,
        removePlaylist,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
