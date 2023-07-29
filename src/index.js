import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { CategoryProvider } from "./context/CategoryContext";
import { VideoProvider } from "./context/VideoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <CategoryProvider>
        <VideoProvider>
          <App />
        </VideoProvider>
      </CategoryProvider>
    </Router>
  </React.StrictMode>
);
