import React from "react";
import Upload from "components/Upload";
import style from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  showMusicPlayer,
  selectMusic,
} from "redux/musicPlayer/musicPlayerSlice";
import classnames from "classnames/bind";
import { songs } from "mock/data";
import {
  PlayCircle,
  MusicNoteBeamed,
  EyeFill,
  PersonPlusFill,
  PersonPlus,
  Share,
  PlayCircleFill,
} from "react-bootstrap-icons";

import { selectArtist } from "redux/composer/composerSlice";
import { RootState } from "redux/store";
const cx = classnames.bind(style);

const ComposerPage: React.FC = () => {
  const { composerName, composerPic } = useSelector(
    (state: RootState) => state.artistDetail
  );
  const dispatch = useDispatch();
  return (
    <>
      {/* <!-- Top Area --> */}
      <Upload />
      {/* <!-- Main Content Area start --> */}
      <div className={cx("content")}>
        <div className={cx("user-out")}>
          {/* <!-- Head Block --> */}
          <div className={cx("user-head")}>
            <img src={composerPic} alt="" />
            <div className={cx("user-head_info")}>
              <h1>{composerName}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                incidunt iure eos dolorem saepe accusamus totam laborum commodi!
                Debitis est quis sed dolore, eos ab quaerat molestias? Minus,
                delectus totam!
              </p>
              <ul>
                <li>
                  <MusicNoteBeamed />
                  13 Tracks
                </li>
                <li>
                  <EyeFill />
                  32.4K View
                </li>
                <li>
                  <PersonPlusFill />
                  115 Followers
                </li>
              </ul>
              <ol>
                <li>
                  <button>
                    <PlayCircle />
                    Play
                  </button>
                </li>
                <li>
                  <button>
                    <PersonPlus />
                    Follow
                  </button>
                </li>
                <li>
                  <button>
                    <Share />
                    Share
                  </button>
                </li>
              </ol>
            </div>
          </div>

          {/* <!-- Tracks Block --> */}
          <div className={cx("user-tracks")}>
            <h3>Tracks</h3>
            <ul>
              {songs.map((song) => {
                const {
                  songTitle,
                  composerName,
                  songPic,
                  clickNum,
                  duration,
                  composerPic,
                } = song;
                return (
                  <li
                    key={songTitle}
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
                    <div className={cx("user-tracks_cover")}>
                      <PlayCircleFill />
                      <img src={songPic} alt="" />
                    </div>
                    <h2>{songTitle}</h2>
                    <p>{clickNum}</p>
                    <span>{duration}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- Main Content Area end --> */}
    </>
  );
};

export default ComposerPage;
