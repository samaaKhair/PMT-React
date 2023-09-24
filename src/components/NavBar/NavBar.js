import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./PMTLogoTransparent.svg";
import "./NavBar.css";

const NavBar = (props) => {
  const navigate = useNavigate();

  // Navigation items array
  let items = ["Home", "About", "Logout"];

  //detecting clicks on menu button
  const [isActive, setIsActive] = useState(false);
  // always negating isActive
  const toggleDropdown = () => {
    setIsActive(!isActive);
  };
  const logout = () => {
    props.setIsAuth(false);
    localStorage.clear();
    // localStorage.setItem("isAuth",false);
  };

  return (
    <div className="NavBar">
      {/* Logo Image */}
      <img src={logo} alt="Logo" className="logo" />
      {/* Navigation Items - Large Screens */}
      <ul className="menuItems">
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
      </ul>
      {/* Menu Button - Small Screes*/}
      <div className="menuButton" onClick={toggleDropdown}>
        <div className={isActive ? "toggledBar1" : "bar1"}></div>
        <div className={isActive ? "toggledBar2" : "bar2"}></div>
        <div className={isActive ? "toggledBar3" : "bar3"}></div>
      </div>
      {/* Dropdown Menu */}
      <div className={isActive ? "toggledDropdown" : "dropdown-content"}>
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
      </div>
    </div>
  );
};

export default NavBar;
