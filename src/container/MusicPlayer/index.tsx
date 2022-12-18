import React from "react";
import classnames from "classnames/bind";
import style from "./index.module.css";
import { RootState } from "redux/store";
import {
  VolumeUpFill,
  ArrowRepeat,
  SkipStartFill,
  SkipEndFill,
  Shuffle,
  PlayCircle,
  PauseCircle,
  StopCircle,
  ArrowLeftRight,
} from "react-bootstrap-icons";
import song1 from "assets/music/DemoAudio.mp3";
import song2 from "assets/music/Climbing.mp3";
import song3 from "assets/music/DeathMatch.mp3";
import song4 from "assets/music/Pooka.mp3";
import song5 from "assets/music/RideOfTheValkyries.mp3";
import song6 from "assets/music/SurfingLlama.mp3";

import { useDispatch, useSelector } from "react-redux";
import { closeMusicPlayer } from "redux/musicPlayer/musicPlayerSlice";
import { selectedSong } from "redux/songDetail/songDetailSlice";
import { useNavigate } from "react-router-dom";

const cx = classnames.bind(style);

const MusicPlayer: React.FC = () => {
  const {
    showPlayer,
    songDetail: { songTitle, composerName, songPic, composerPic },
  } = useSelector((state: RootState) => state.musicPlayer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className={cx("player", showPlayer ? "show" : "close")}>
      <div
        className={cx("player-info")}
        onClick={() => {
          navigate("/songdetail");
          dispatch(
            selectedSong({
              songTitle,
              songPic,
              composerName,
              composerPic,
            })
          );
          dispatch(closeMusicPlayer());
        }}
      >
        <img src={songPic} alt="" />
        <h2>{songTitle}</h2>
        <span>{composerName}</span>
      </div>
      <AudioPlayer />
      <div className={cx("player-volume")}>
        <VolumeUpFill />
        <div className={cx("player-volume_bar")}>
          <p style={{ width: "75%" }}></p>
        </div>
      </div>
    </div>
  );
};

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [duration, setDuration] = React.useState<number>(0);
  const audioPlayerRef = React.useRef<HTMLAudioElement>(null);
  const songArr: string[] = [song1, song2, song3, song4, song5, song6];
  const [currentSongIndex, setCurrentSongIndex] = React.useState<number>(0);
  const [isLoop, setIsLoop] = React.useState<boolean>(false);
  const [shuffle, setShuffle] = React.useState<boolean>(false);

  //開啟或暫停音樂
  const handlePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayerRef.current?.play();
    } else {
      audioPlayerRef.current?.pause();
    }
  };

  //下一首
  const handleNextSong = () => {
    audioPlayerRef.current?.pause();
    if (currentSongIndex === songArr.length - 1) {
      if (!isLoop) {
        setIsPlaying(false);
      }
      setCurrentSongIndex(0);
      return;
    }
    setCurrentSongIndex((prevIdx) => {
      if (prevIdx === songArr.length - 1) {
        return prevIdx;
      }
      return prevIdx + 1;
    });
  };

  //上一首
  const handleLastSong = () => {
    audioPlayerRef.current?.pause();
    if (currentSongIndex === 0) {
      setIsPlaying(false);
      setCurrentSongIndex(0);
      return;
    }
    setCurrentSongIndex((prevIdx) => {
      if (prevIdx === 0) {
        return prevIdx;
      }
      return prevIdx - 1;
    });
  };

  //開啟關閉循環播放
  const triggerRepeat = () => {
    setIsLoop((prev) => !prev);
  };

  //開啟或關閉隨機播放
  const onShuffle = () => {
    setShuffle((prev) => !prev);
  };

  React.useEffect(() => {
    if (audioPlayerRef.current) {
      const seconds = Math.floor(audioPlayerRef.current?.duration);
      setDuration(seconds);
    }
  }, [
    audioPlayerRef.current?.onloadedmetadata,
    audioPlayerRef.current?.readyState,
  ]);
  React.useEffect(() => {
    if (isPlaying) {
      audioPlayerRef.current?.play();
    }
  }, [currentSongIndex]);

  return (
    <div className={cx("player-control")}>
      <audio
        ref={audioPlayerRef}
        src={songArr[currentSongIndex]}
        preload="metadata"
      />
      {/* <div className={cx("progressbar")}>
        <input type="range" defaultValue={0} />
      </div> */}
      {isLoop ? (
        <ArrowLeftRight onClick={triggerRepeat} />
      ) : (
        <ArrowRepeat onClick={triggerRepeat} />
      )}
      <SkipStartFill onClick={handleLastSong} />
      {isPlaying ? (
        <PauseCircle onClick={handlePlayPause} />
      ) : (
        <PlayCircle onClick={handlePlayPause} />
      )}
      <SkipEndFill onClick={handleNextSong} />
      {/* <StopCircle /> */}
      <Shuffle onClick={onShuffle} />
    </div>
  );
};

export default MusicPlayer;
