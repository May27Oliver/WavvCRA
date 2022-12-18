import React from "react";
import classnames from "classnames/bind";
import style from "./index.module.css";
import wallet2 from "assets/wallet2.png";
import SignIn from "components/SignIn";

const cx = classnames.bind(style);

const LoginPage: React.FC = () => {
  return (
    <>
      <SignIn />
      <div className={cx("content", "signin-wrapper")}>
        {/* <!-- Main Content Area start --> */}
        <div className={cx("signin-out")}>
          <div className={cx("signin-email")}>
            <h2>Sign In With Email</h2>
            <p>User Name</p>
            <input type="text" placeholder="up to 25 characters" />
            <p>Email Address</p>
            <input type="email" placeholder="example@gmail.com" />
            <p>Password</p>
            <input type="password" />
            <input type="submit" value="Sign In" />
            <ul>
              <li>
                <a href="#">Forget Password</a>
              </li>
              <li>
                <a href="#">Already a member?</a>
              </li>
            </ul>
          </div>
          <p className={cx("signin-or")}>or</p>
          <div className={cx("signin-wallet")}>
            <h2>Sign In With Wallet</h2>
            <img src={wallet2} alt="" />
            <p>Comming Soon!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
