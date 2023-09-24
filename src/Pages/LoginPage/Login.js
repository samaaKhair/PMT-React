import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/Alert/Alert";
import "./Login.css";
import axios from "axios";

const Login = (props) => {
  // an object to be used in navigation
  const navigate = useNavigate();
  useEffect(() => {
    if (props.isAuth) {
      localStorage.setItem("isAuth", props.isAuth.toString());
      navigate("/");
    }
  }, [props.isAuth]);
  const URL = "http://amanimagdi.pythonanywhere.com/api/token/";
  const [user, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const [passwordType, setPasswordType] = useState("password"); //passsword state to check hidden on visible on toggle

  // State to track input validity
  const [alertMessage, setAlertMessage] = useState("");

  // changes user data dynamically by detecting required info from targeted element
  const onUserInfoChange = (e) => {
    const { id, value } = e.target;
    setUserInfo({ ...user, [id]: value });
  };

  //on show/hide button click checks type of password to change it
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  // Function to determine button disable state
  const isButtonDisabled = () => {
    const isUsernameValid = user.username.trim() !== "";
    const isPasswordValid = user.password.trim() !== "";

    return !(isUsernameValid && isPasswordValid);
  };
  const login = () => {
    axios
      .post(`${URL}`, user)
      .then(() => {
        // localStorage.setItem("isAuth", true);
        props.setIsAuth(true);
        // navigate("/");
      })
      .catch((error) => {
        setAlertMessage(error.response.data.detail);
      });

    console.log(localStorage.getItem("isAuth"));
  };

  return (
    <div className="loginMain">
      <div className="loginContent">
        <h1 id="header">Welcome Back!</h1>
        <label htmlFor="username">
          Username<span className="required">*</span>
        </label>
        <input
          type="text"
          id="username"
          value={user.username}
          onChange={onUserInfoChange}
          autoComplete="off"
          required
        />
        <label htmlFor="password">
          Password<span className="required">*</span>
        </label>
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
        <Alert message={alertMessage} />
        <div className="buttons">
          <button className="SignUpBtn" onClick={() => navigate("/Signup")}>
            Sign Up
          </button>
          {/* redirects to home page */}
          <button
            className="loginBtn"
            onClick={login}
            disabled={isButtonDisabled()}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
