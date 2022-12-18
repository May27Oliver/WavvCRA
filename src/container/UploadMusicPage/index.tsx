import React from "react";
import style from "./index.module.css";
import Upload from "components/Upload";
import { CardImage } from "react-bootstrap-icons";
import classnames from "classnames/bind";

const cx = classnames.bind(style);

const UploadPage: React.FC = () => {
  const [copyrightVal, setCopyrightVal] = React.useState<number>(0);
  return (
    <>
      <Upload />
      <div className={cx("content")}>
        {/* <!-- Main Content Area start --> */}
        <div className={cx("composer-out")}>
          <h1>Upload Your Music</h1>

          <div className={cx("composer-main")}>
            <div className={cx("img-upload-block")}>
              <div className={cx("file-upload-block")}>
                <label htmlFor="file-upload" className={cx("file-upload-btn")}>
                  Choose File
                </label>
                <input
                  type="file"
                  id="file-upload"
                  style={{ display: "none" }}
                />
                <p>wav. wma. mpeg. aiff.</p>
              </div>
              <label htmlFor="img-upload-input" className={cx("img-upload")}>
                <CardImage />
                <p>Choose cover image</p>
                <img id="show-img" src="#" style={{ display: "none" }} />
              </label>
              <input
                type="file"
                id="img-upload-input"
                style={{ display: "none" }}
              />
            </div>

            <div className={cx("composer-data")}>
              <h3>Song Title</h3>
              <input type="text" placeholder="Your Song Title..." />
              <h3>Song Description</h3>
              <textarea name="" id="" placeholder="Description..."></textarea>
              <h3>Do you own the rights to the song?</h3>
              <div className={cx("up-copyright")}>
                <p>What percentage do you own?</p>
                <input
                  type="range"
                  value={copyrightVal}
                  min="0"
                  max="100"
                  onChange={(e) => setCopyrightVal(Number(e.target.value))}
                  style={{ filter: `hue-rotate(-${copyrightVal}deg)` }}
                />
                <h4>{copyrightVal}</h4>
              </div>
            </div>
          </div>

          <button className={cx("composer-send")}>Upload </button>
        </div>
      </div>
    </>
  );
};

export default UploadPage;
