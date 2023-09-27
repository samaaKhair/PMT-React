import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, setUsername } from "../../redux/actions";
import Alert from "../../components/Alert/Alert";
import "./Login.css";
import axios from "axios";

const Login = (props) => {
  //Initializers
  const isAuth = useSelector((state) => state.isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //to ensure trap in home page on refresh, once isAuth is changed
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  const URL = "http://amanimagdi.pythonanywhere.com/api/token/";
  const [user, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const [passwordType, setPasswordType] = useState("password"); //passsword state to check hidden on visible on toggle

  // State to track input validity
  const [alertMessage, setAlertMessage] = useState("");
  const [isAlertOpen, setIsAlertOpen] = useState(false);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    login();
  };

  const login = () => {
    axios
      .post(`${URL}`, user)
      .then(() => {
        dispatch(setAuth(true));
        dispatch(setUsername(user.username));
      })
      .catch((error) => {
        console.error(error);
        setIsAlertOpen(true);
        setAlertMessage(error.response.data.detail);
      });
  };

  return (
    <div className="loginMain">
      <form onSubmit={handleSubmit} className="loginContent">
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
        <Alert isOpen={isAlertOpen} message={alertMessage} />
        <div className="buttons">
          <button
            className="SignUpBtn"
            type="button"
            onClick={() => navigate("/Signup")}
          >
            Sign Up
          </button>
          {/* redirects to home page */}
          <button
            type="submit"
            className="loginBtn"
            disabled={isButtonDisabled()}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
