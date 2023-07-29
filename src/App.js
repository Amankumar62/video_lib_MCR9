import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Playlist from "./pages/PlayList";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { BiSolidPlaylist } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import WatchLater from "./pages/WatchLater";
import Layout from "./component/Layout";
import CategoryPage from "./pages/CategoryPage";
import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <div className="App">
      <aside className="sidebar">
        <Link to="/">
          <AiOutlineHome />
          Home
        </Link>
        <Link to="/explore">
          <MdOutlineExplore />
          Explore
        </Link>
        <Link to="/playlist">
          <BiSolidPlaylist />
          Playlist
        </Link>
        <Link to="/watchlater">
          <MdOutlineWatchLater />
          Watch Later
        </Link>
      </aside>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="category/:categoryName" element={<CategoryPage />} />
          <Route path="/video/:videoId" element={<VideoPage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/watchlater" element={<WatchLater />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
