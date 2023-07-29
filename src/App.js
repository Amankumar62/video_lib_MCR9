import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Playlist from "./pages/PlayList";
import WatchLater from "./pages/WatchLater";
import Layout from "./component/Layout";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <div className="App">
      <aside className="sidebar">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/playlist">Playlist</Link>
        <Link to="/watchlater">Watch Later</Link>
      </aside>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="category/:categoryName" element={<CategoryPage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/watchlater" element={<WatchLater />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
