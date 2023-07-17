import React from "react";
import Logo from "../img/Logo.png";
import hamburger from "../img/hamburger.png";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import {HeaderContainer} from "./styles/HeaderStyle";


function Header() {
  const [isDropdown, setIsDropdown] = useState(false);
  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  return (
    <>
      <HeaderContainer>
        <header>
          <div className="nav_left">
            <img className="logo" src={Logo} alt="logo" />
            <h1 className="title"><Link to = "/" style={{textDecoration:"none", color: "black"}}><span>Coz Shopping</span></Link></h1>
          </div>
          <div className="nav_right">
            <button onClick={toggleDropdown}>
              <img className="hamburger" src={hamburger} alt="hamburger" />
            </button>
          </div>
        </header>
      </HeaderContainer>
      <div className="dropdown_box">{isDropdown ? <Dropdown /> : null}</div>
    </>
  );
}

export default Header;
