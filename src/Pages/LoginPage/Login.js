import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

const Login = (props) => {
  // an object to be used in navigation
  const navigate = useNavigate();
  useEffect(() => {
    if (props.isAuth) {
      navigate("/");
    }
  }, [props.isAuth]);
  const URL = "http://amanimagdi.pythonanywhere.com/api/token/";
  const [user, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const [passwordType, setPasswordType] = useState("password"); //passsword state to check hidden on visible on toggle

  // changes user data dynamically by detecting required info from targeted element
  const onUserInfoChange = (e) => {
    setUserInfo({ ...user, [e.target.id]: e.target.value });
  };

  //redirects user to signup page

  //on show/hide button click checks type of password to change it
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const login = () => {
    axios
      .post(`${URL}`, user)
      .then(() => {
        localStorage.setItem("isAuth", true);
        navigate("/");
      })
      .catch((error) => {
        alert(error.response.data);
      });

    console.log(localStorage.getItem("isAuth"));
  };

  return (
    <div className="loginMain">
      <div className="loginContent">
        <h1 id="header">Welcome Back!</h1>
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
        <div className="buttons">
          <button className="SignUpBtn" onClick={() => navigate("/Signup")}>
            Sign Up
          </button>
          {/* redirects to home page */}
          <button className="loginBtn" onClick={login}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
