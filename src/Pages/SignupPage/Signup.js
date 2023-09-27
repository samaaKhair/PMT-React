import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Signup.css";
import Alert from "../../components/Alert/Alert";
import axios from "axios";

const Signup = (props) => {
  // an object to be used in navigation
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.isAuth);

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  // initiating user state
  const [user, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  //passsword state to check hidden on visible on toggle
  const [passwordType, setPasswordType] = useState("password");

  // State to track input validity
  const [alertMessage, setAlertMessage] = useState("");

  //setting alert popup status
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserInfo({ ...user, [id]: value });
    setConfirmPassword(
      e.target.id === "passwordConfirm" ? e.target.value : confirmPassword
    );
  };

  //on show/hide button click checks type of password to change it
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  // Function to determine button disable state
  const isButtonDisabled = () => {
    const isUsernameValid = user.username.trim() !== "";
    const isPasswordValid = user.password.trim() !== "";
    const isConfirmPasswordValid = confirmPassword.trim() !== "";

    return !(isUsernameValid && isPasswordValid && isConfirmPasswordValid);
  };
  // confirming password
  const checkPassword = () => {
    if (confirmPassword !== user.password) {
      setIsAlertOpen(true);
      setAlertMessage("Password Mismatch!");
      return false;
    } else return true;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    signUp();
  };
  const signUp = () => {
    if (checkPassword()) {
      axios
        .post("http://amanimagdi.pythonanywhere.com/users/", user)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          setIsAlertOpen(true);
          setAlertMessage(error.response.data.username);
        });
    }
  };

  return (
    <div className="SignupMain">
      <form onSubmit={handleSubmit} className="SignupContent">
        <h1 id="header">Sign Up!</h1>

        <label htmlFor="username">
          Username<span className="required">*</span>
        </label>
        <input
          type="text"
          id="username"
          value={user.username}
          onChange={handleInputChange}
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
            onChange={handleInputChange}
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

        <label htmlFor="passwordConfirm">
          Confirm Password<span className="required">*</span>
        </label>
        <input
          type={passwordType}
          id="passwordConfirm"
          value={confirmPassword}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <Alert isOpen={isAlertOpen} message={alertMessage} />
        {/* Confirm all fields are not empty, then enable the button */}
        <button
          type="submit"
          className="SignupBtn"
          disabled={isButtonDisabled()}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
