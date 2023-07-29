import { createContext, useReducer, useEffect, useState } from "react";
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
    case "SET_DATA":
      return payload;
    case "CREATE_PLAYLIST":
      return { ...prevState, playlists: [...prevState.playlists, payload] };
    case "REMOVE_PLAYLIST":
      return {
        ...prevState,
        playlists: prevState.playlists.filter(({ _id }) => _id !== payload),
      };
    case "ADD_NOTE":
      return { ...prevState, notes: [...prevState.notes, payload] };
    case "DELETE_NOTE":
      return {
        ...prevState,
        notes: prevState.notes.filter(({ _id }) => _id !== payload),
      };
    case "EDIT_NOTE":
      return {
        ...prevState,
        notes: prevState.notes.map((item) =>
          item._id === payload.id ? { ...item, note: payload.note } : item
        ),
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
    notes: [],
  });
  const [shouldGet, setshouldGet] = useState(true);
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

  const addNote = (id, note) => {
    const noteObj = {
      _id: Math.round(Math.random() * 1000),
      videoId: id,
      note: note,
    };
    dispatch({ type: "ADD_NOTE", payload: noteObj });
  };

  const getVideoNotes = (id) => {
    return videoData.notes.filter(({ videoId }) => videoId === Number(id));
  };
  const deleteNote = (id) => {
    dispatch({ type: "DELETE_NOTE", payload: id });
  };
  const editNote = (id, note) => {
    dispatch({ type: "EDIT_NOTE", payload: { id: id, note: note } });
  };

  useEffect(() => {
    const data = localStorage.getItem("videoData");
    if (shouldGet) {
      if (data !== undefined) {
        dispatch({ type: "SET_DATA", payload: JSON.parse(data) });
        setshouldGet(false);
      }
    }
  }, [shouldGet]);

  useEffect(() => {
    localStorage.setItem("videoData", JSON.stringify(videoData));
  }, [videoData]);

  return (
    <VideoContext.Provider
      value={{
        videos: videoData.videos,
        watchlater: videoData.watchlater,
        playlists: videoData.playlists,
        notes: videoData.notes,
        getCategoryVideos,
        getVideoDetail,
        toggleWatchLater,
        isWatchLater,
        getWatchLaterVideos,
        createPlaylist,
        removePlaylist,
        addNote,
        getVideoNotes,
        deleteNote,
        editNote,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
