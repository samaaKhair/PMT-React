import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  // initiating user state
  const [user, setUserInfo] = useState({
    username: "",
    password: "",
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
  const HomePageRedirect = () => {
    console.log(`username: ${user.username}\npassword: ${user.password}`);
    navigate("/");
  };
  //redirects user to signup page
  const signUpRedirect = () => {
    navigate("/Signup");
  };
  //on show/hide button click checks type of password to change it
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div className="loginMain">
      <h1 id="header">Welcome Back!</h1>
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
        {/* checks if show/hide button is clicked */}
        <i className="material-icons" onClick={togglePassword}>
          {passwordType === "password" ? "visibility" : "visibility_off"}
        </i>
      </div>
      {/* redirects to home page */}
      <button className="loginBtn" onClick={HomePageRedirect}>
        Login
      </button>
      <button className="SignUpBtn" onClick={signUpRedirect}>
        Sign Up
      </button>
    </div>
  );
};

export default Login;
