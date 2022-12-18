import React from "react";
import style from "./index.module.css";
import classnames from "classnames/bind";
import { useDispatch } from "react-redux";
import { closeMusicPlayer } from "redux/musicPlayer/musicPlayerSlice";
import logo from "assets/logo.svg";
import {
  GraphUpArrow,
  Search,
  Heart,
  ClockHistory,
  House,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
const cx = classnames.bind(style);

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <nav>
      <div
        className={cx("logo")}
        onClick={() => {
          navigate("/");
          dispatch(closeMusicPlayer());
        }}
      >
        <img src={logo} alt="logo" />
      </div>
      <ul className={cx("nav-main")}>
        <li onClick={() => navigate("./")}>
          <House />
          Home
        </li>
        <li onClick={() => navigate("./")}>
          <GraphUpArrow />
          Trending
        </li>
        <li onClick={() => navigate("./")}>
          <Search />
          Search
        </li>
        <li onClick={() => navigate("./")}>
          <Heart />
          Favorite
        </li>
        <li onClick={() => navigate("./")}>
          <ClockHistory />
          History
        </li>
      </ul>
      <ul className={cx("nav-sub")}>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Terms of Use</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Follow Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
