import React from "react";
import Logo from "../img/Logo.png";
import hamburger from "../img/hamburger.png";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.1);

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav__left {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5rem;
  }

  .logo {
    width: 55px;
    height: 30px;
    flex-shrink: 0;
    margin-right: 12px;
  }

  .nav__right {
    margin-right: 5rem;
  }

  button {
    border: none;
    background-color: white;
    cursor: pointer;
  }
`;

function Header() {
  const [isDropdown, setIsDropdown] = useState(false);
  const toggleDropdown = () => {
    isDropdown ? setIsDropdown(false) : setIsDropdown(true);
  };

  return (
    <>
      <HeaderContainer>
        <header>
          <div className="nav__left">
            <img className="logo" src={Logo} alt="logo" />
            <h1 className="title"><Link to = "/" style={{textDecoration:"none", color: "black"}}><span>Coz Shopping</span></Link></h1>
          </div>
          <div className="nav__right">
            <button onClick={toggleDropdown}>
              <img className="hamburger" src={hamburger} alt="hamburger" />
            </button>
          </div>
        </header>
      </HeaderContainer>
      <div className="dropdown__box">{isDropdown ? <Dropdown /> : null}</div>
    </>
  );
}

export default Header;
