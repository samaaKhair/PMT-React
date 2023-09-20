import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./PMTLogoTransparent.svg";

import "./NavBar.css";

const NavBar = () => {
   const navigate = useNavigate();
  // Navigation items array
  let items = ["Home", "About", "Logout"];

  //detecting clicks on menu button
  const [isActive, setIsActive] = useState(false);
  // always negating isActive
  const toggleDropdown = () => {
    setIsActive(!isActive);
  };
  const logout=()=>{
    localStorage.setItem("isAuth",false);
    navigate("/Login");
  }

  return (
    <div className="NavBar">
      {/* Logo Image */}
      <img src={logo} alt="Logo" className="logo" />
      {/* Navigation Items - Large Screens */}
      <ul className="menuItems">
        {items.map((item, index) => (
          <li key={index} onClick={index === 2 ? logout : null}>
            {item}
          </li>
        ))}
      </ul>
      {/* Menu Button - Small Screes*/}
      <div className="menuButton" onClick={toggleDropdown}>
        <div className={isActive ? "toggledBar1" : "bar1"}></div>
        <div className={isActive ? "toggledBar2" : "bar2"}></div>
        <div className={isActive ? "toggledBar3" : "bar3"}></div>
      </div>
      {/* Dropdown Menu */}
      <div className={isActive ? "toggledDropdown" : "dropdown-content"}>
        {items.map((item, index) => (
          <li key={index} onClick={index === 2 ? logout : null}>
            {item}
          </li>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
