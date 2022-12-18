import React from "react";
import classnames from "classnames/bind";
import topBanner from "assets/top_banner.jpg";
import { PlayCircleFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  showMusicPlayer,
  selectMusic,
} from "redux/musicPlayer/musicPlayerSlice";
import SignIn from "components/SignIn";
import { topSingers, songs } from "mock/data";
import { selectArtist } from "redux/composer/composerSlice";
import { callPcloud } from "api";
import style from "./index.module.css";

const cx = classnames.bind(style);
const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      {/* -- Right Main Area start -- */}
      {/* -- Top Area -- */}
      <SignIn />
      <div className={cx("content")}>
        {/* -- Main Content Area start -- */}
        {/* -- AD -- */}
        <div className={cx("top-ad")}>
          <div className={cx("ad-text")}>
            <h2>Wavv Blurb</h2>
            <p>
              {
                "Welcome to Wavv, a music streaming platform created for creators and consumers without middlemen."
              }
            </p>
          </div>
          <img src={topBanner} alt="" />
        </div>
        {/* -- Top Singers -- */}
        <h3 className={cx("list-title")}>Top Singers</h3>
        <ul className={cx("list")}>
          {topSingers.map((singer) => {
            const { composerName, composerPic } = singer;
            return (
              <li key={singer.composerName}>
                <div
                  className={cx("composer-item")}
                  onClick={() => {
                    navigate("/composer");
                    dispatch(
                      selectArtist({
                        composerName,
                        composerPic,
                      })
                    );
                  }}
                >
                  <img src={singer.composerPic} alt="" />
                  <h2>{singer.composerName}</h2>
                </div>
              </li>
            );
          })}
        </ul>

        {/* -- Hot Songs -- */}
        <h3 className={cx("list-title")}>Hot Songs</h3>
        <ul className={cx("list", "list-square")}>
          {songs
            .filter((song) => song.hot)
            .map((song) => {
              const { songTitle, composerName, songPic, composerPic } = song;
              return (
                <li key={songTitle}>
                  <div
                    onClick={() => {
                      dispatch(showMusicPlayer());
                      dispatch(
                        selectMusic({
                          songTitle,
                          composerName,
                          songPic,
                          composerPic,
                        })
                      );
                    }}
                  >
                    <PlayCircleFill />
                    <img src={songPic} alt="" />
                    <h2>{songTitle}</h2>
                    <span>{composerName}</span>
                  </div>
                </li>
              );
            })}
        </ul>

        {/* -- Recommend -- */}
        <h3 className={cx("list-title")}>Recommend</h3>
        <ul className={cx("list", "list-square")}>
          {songs
            .filter((song) => song.recommend)
            .map((song) => {
              const { songTitle, composerName, songPic, composerPic } = song;
              return (
                <li key={songTitle}>
                  <div
                    onClick={() => {
                      dispatch(showMusicPlayer());
                      dispatch(
                        selectMusic({
                          songTitle,
                          composerName,
                          songPic,
                          composerPic,
                        })
                      );
                    }}
                  >
                    <PlayCircleFill />
                    <img src={songPic} alt="" />
                    <h2>{songTitle}</h2>
                    <span>{composerName}</span>
                  </div>
                </li>
              );
            })}
        </ul>

        {/* -- You May Also Like -- */}
        <h3 className={cx("list-title")}>You May Also Like</h3>
        <ul className={cx("list", "list-square")}>
          {songs
            .filter((song) => song.mayLike)
            .map((song) => {
              const { songTitle, composerName, songPic, composerPic } = song;
              return (
                <li key={songTitle}>
                  <div
                    onClick={() => {
                      dispatch(showMusicPlayer());
                      dispatch(
                        selectMusic({
                          songTitle,
                          composerName,
                          songPic,
                          composerPic,
                        })
                      );
                    }}
                  >
                    <PlayCircleFill />
                    <img src={songPic} alt="" />
                    <h2>{songTitle}</h2>
                    <span>{composerName}</span>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
      {/* -- Main Content Area end -- */}
      {/* -- Right Main Area end --); */}
    </>
  );
};

export default LandingPage;
