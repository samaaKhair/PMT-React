import React from "react";
import { useState } from "react";
import logo from "./PMTLogoTransparent.svg";

import "./NavBar.css";

const NavBar = () => {
  // Navigation items array
  let items = ["Home", "About", "Store"];

  //detecting clicks on menu button
  const [isActive, setIsActive] = useState(false);
  // always negating isActive
  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="NavBar">
      {/* Logo Image */}
      <img src={logo} width="100" height="100" alt="Logo" />
      {/* Navigation Items - Large Screens */}
      <ul>
        {items.map((item,index) => (
          <li key={index}>
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
        {items.map((item,index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
