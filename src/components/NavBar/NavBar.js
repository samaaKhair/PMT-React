import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./PMTLogoTransparent.svg";
import "./NavBar.css";

const NavBar = (props) => {
  const navigate = useNavigate();

  let currentUser = localStorage.getItem("Current Username");
  // Navigation items array
  let items = ["Home", "About"];

  //detecting clicks on menu button
  const [isMenuActive, setIsMenuActive] = useState(false);

  //detecting clicks on profile button
  const [isProfileDropActive, setIsProfileDropActive] = useState(false);

  // always negating isMenuActive
  const toggleDropdown = () => {
    setIsMenuActive(!isMenuActive);
  };

  const toggleDropdownlogOut = () => {
    setIsProfileDropActive(!isProfileDropActive);
  };
  const logout = () => {
    props.setIsAuth(false);
    localStorage.clear();
  };

  return (
    <div className="NavBar">
      {/* Logo Image */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Navigation Items - Small Screes*/}
      <div className="menuButton" onClick={toggleDropdown}>
        <div className={isMenuActive ? "toggledBar1" : "bar1"}></div>
        <div className={isMenuActive ? "toggledBar2" : "bar2"}></div>
        <div className={isMenuActive ? "toggledBar3" : "bar3"}></div>
      </div>
      {/* Dropdown Menu */}
      <div className={isMenuActive ? "toggledDropdown" : "dropdown-content"}>
        {items.map((item, index) => {
          if (index === 0) {
            return (
              <li key={index} onClick={() => navigate("/")}>
                {item}
              </li>
            );
          } else if (index === 1) {
            return (
              <li key={index} onClick={() => navigate("/About")}>
                {item}
              </li>
            );
          } else if (index === 2) {
            return (
              <li key={index} onClick={logout}>
                {item}
              </li>
            );
          } else {
            return null;
          }
        })}
        <div className="logoutDropdown">
          <button className="usernameBtn" onClick={toggleDropdownlogOut}>
            {currentUser}
            <i className="fa fa-angle-down fa-lg" aria-hidden="true" />
          </button>
          <li
            onClick={logout}
            className={isProfileDropActive ? "OpenedLogout" : "closedLogout"}
          >
            Logout
          </li>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
