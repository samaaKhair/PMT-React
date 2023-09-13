import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  // initiating user state
  const [user, setUserInfo] = useState({
    username: "",
    password: "",
    passwordConfirm: "", //to confirm password similarity
  });
  //passsword state to check hidden on visible on toggle
  const [passwordType, setPasswordType] = useState("password");
  // an object to be used in navigation
  const navigate = useNavigate();
  // changes user data dynamically by detecting required info from targeted element
  const onUserInfoChange = (e) => {
    setUserInfo({ ...user, [e.target.id]: e.target.value });
  };
  // TODO: to be removed
  //sanity check
  const printData = () => {
    console.log(`username: ${user.username}\npassword: ${user.password}`);
  };
  //on show/hide button click checks type of password to change it
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  // confirming password
  const checkPassword = () => {
    if (user.passwordConfirm === user.password) {
      printData();
      navigate("/");
    } else alert("Password Mismatch :( ");
  };

  return (
    <div className="SignupMain">
      <h1 id="header">Sign Up!</h1>
      {/* container for user name cell */}
      <div className="cellContainer">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={user.username}
          onChange={onUserInfoChange}
          autoComplete="off"
        />
      </div>
      {/* container for password cell */}
      <div className="cellContainer">
        <label htmlFor="password">Password</label>
        <input
          type={passwordType}
          id="password"
          value={user.password}
          onChange={onUserInfoChange}
          autoComplete="off"
        />
        <i className="material-icons" onClick={togglePassword}>
          {passwordType === "password" ? "visibility" : "visibility_off"}
        </i>
      </div>
      {/* container for confirm password cell*/}
      <div className="cellContainer">
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input
          type={passwordType}
          id="passwordConfirm"
          value={user.passwordConfirm}
          onChange={onUserInfoChange}
          autoComplete="off"
        />
      </div>
      {/* confirms password, if correct redirects to home page */}
      <button className="SignupBtn" onClick={checkPassword}>
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
