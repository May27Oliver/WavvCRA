import React from "react";
import Navbar from "./container/Navbar";
import MusicPlayer from "./container/MusicPlayer";
import { Routes, Route, Navigate } from "react-router-dom";
import style from "./App.module.css";
import classnames from "classnames/bind";
import LandingPage from "./container/LandingPage";
import LoginPage from "./container/LoginPage";
import UploadMusicPage from "./container/UploadMusicPage";
import SongDetailPage from "./container/SongDetailPage";
import ComposerPage from "./container/ComposerPage";

const cx = classnames.bind(style);
// hello test
const App: React.FC = () => {
  return (
    <div className={cx("wrapper")}>
      <Navbar />
      <div className={cx("content")}>
        <main>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/uploadmusic" element={<UploadMusicPage />} />
            <Route path="/songdetail" element={<SongDetailPage />} />
            <Route path="/composer" element={<ComposerPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
      <MusicPlayer />
    </div>
  );
};

export default App;
