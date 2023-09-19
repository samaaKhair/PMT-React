import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";

const Signup = () => {
  // initiating user state
  const [user, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  //passsword state to check hidden on visible on toggle
  const [passwordType, setPasswordType] = useState("password");
  // an object to be used in navigation
  const navigate = useNavigate();
  // changes user data dynamically by detecting required info from targeted element
  const onUserInfoChange = (e) => {
    setUserInfo({ ...user, [e.target.id]: e.target.value });
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
    if (confirmPassword !== user.password) {
      alert("Password Mismatch :( ");
      return false;
    } else return true;
  };
  const signUp = () => {
    if (checkPassword()) {
      axios
        .post("http://amanimagdi.pythonanywhere.com/users/", user)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          alert(error.response.data.username);
        });
    }
  };
  return (
    <div className="SignupMain">
      <div className="SignupContent">
        <h1 id="header">Sign Up!</h1>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={user.username}
          onChange={onUserInfoChange}
          autoComplete="off"
        />

        <label htmlFor="password">Password</label>
        <div className="passwordCell">
          <input
            type={passwordType}
            id="password"
            value={user.password}
            onChange={onUserInfoChange}
            autoComplete="off"
          />
          {/* checks if show/hide button is clicked */}
          <i
            className={
              passwordType === "password"
                ? "visibility fa fa-eye"
                : "visibility fa fa-eye-slash"
            }
            aria-hidden="true"
            onClick={togglePassword}
          ></i>
        </div>
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input
          type={passwordType}
          id="passwordConfirm"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          autoComplete="off"
        />

        {/* confirms password, if correct redirects to home page */}
        <button className="SignupBtn" onClick={signUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
