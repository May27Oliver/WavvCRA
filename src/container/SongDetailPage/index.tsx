import React from "react";
import Upload from "components/Upload";
import style from "./index.module.css";
import {
  ClockFill,
  PlayCircleFill,
  HeartFill,
  PlayCircle,
  Share,
  Heart,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  showMusicPlayer,
  selectMusic,
} from "redux/musicPlayer/musicPlayerSlice";
import { RootState } from "redux/store";
import { songs } from "mock/data";
import Wavv from "assets/wavv_team.jpg";
import Head1 from "assets/head1.jpg";
import Head2 from "assets/head2.jpg";
import Head3 from "assets/head3.jpg";
import Head6 from "assets/head6.jpg";
import Top7 from "assets/top7.jpg";

import classnames from "classnames/bind";

const cx = classnames.bind(style);

const UploadPage: React.FC = () => {
  const dispatch = useDispatch();
  let { songTitle, songPic, composerName, composerPic } = useSelector(
    (state: RootState) => state.songDetail
  );
  composerName = composerName.replace("@", "");
  return (
    <>
      <Upload />
      <div className={cx("content")}>
        <div className={cx("song-detail_out")}>
          <div className={cx("song-detail_head")}>
            <img src={songPic ? songPic : Top7} alt="" />
            <div className={cx("song-detail_singer")}>
              <h1>{songTitle ? songTitle : "Teenage Dream"}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                commodi placeat autem numquam nam quisquam itaque optio
                reprehenderit natus perspiciatis.
              </p>
              <ul className={cx("song-detail_info")}>
                <li>
                  <div className={cx("song-composer-info")}>
                    <img src={Wavv} alt="" />
                    Wavv Musician
                  </div>
                </li>
                <li>
                  <ClockFill />
                  2022/08/12
                </li>
                <li>
                  <PlayCircleFill />
                  4566 Plays
                </li>
                <li>
                  <HeartFill />
                  328 Favorites
                </li>
              </ul>
              <ul className={cx("song-detail_btns")}>
                <li>
                  <button className={cx("song-detail_play")}>
                    <PlayCircle />
                    Play
                  </button>
                </li>
                <li>
                  <button>
                    <Share />
                    Share
                  </button>
                </li>
                <li>
                  <button>
                    <Heart />
                    Favorite
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- More --> */}
          <div className={cx("song-detail_more")}>
            <h3>More of {composerName ? composerName : "Nada Reyes"}</h3>
            <ul>
              {songs
                .filter((song) => song.more)
                .map((song) => {
                  const { songPic, songTitle, composerName, composerPic } =
                    song;
                  return (
                    <li>
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
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>

          {/* <!-- Comments --> */}
          <div className={cx("song-detail_comments")}>
            <h3>Comments</h3>
            <div className={cx("comments-text")}>
              <img src={Head6} alt="" />
              <h4>Shaan Merrill</h4>
              <form action="">
                <div contentEditable={true} data-text="Your Comment..."></div>
                <button>Send</button>
              </form>
            </div>
            <ul>
              <li>
                <img src={Head1} alt="" />
                <h4>Margot Correa</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat pariatur laborum hic nam magnam natus quod, et nostrum
                  similique ex reprehenderit, quaerat facilis at quis
                  voluptatibus itaque iste eos fuga!
                </p>
                <span>3 hours ago</span>
              </li>
              <li>
                <img src={Head2} alt="" />
                <h4>Fahima Bateman</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  veritatis!
                </p>
                <span>3 hours ago</span>
              </li>
              <li>
                <img src={Head3} alt="" />
                <h4>Abu Rosa</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                  ducimus non obcaecati veritatis.
                </p>
                <span>3 hours ago</span>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Song Detail Out end --> */}
      </div>
    </>
  );
};

export default UploadPage;
