import React from "react";
import classnames from "classnames/bind";
import style from "./index.module.css";
import { Person } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { callPcloud } from "api";

const cx = classnames.bind(style);

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={cx("top")}>
        <div className={cx("top-nologin")}>
          <button
            onClick={async () => {
              navigate("/login");
              // const token = await getToken();
              // console.log("token", token);
            }}
          >
            <Person />
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
