import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  margin-right: 20px;

  position: absolute;
  right: 0;

  #box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12rem;
    height: 3rem;
    flex: none;
    order: 1;
    flex-grow: 0;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

function Dropdown() {
  return (
    <DropdownContainer>
      <div id="box">OOO님, 안녕하세요!</div>
      <div id="box"><Link to="/ProductList" style={{ textDecoration:"none", color: "black"}}>🎁 상품리스트 페이지</Link></div>
      <div id="box"><Link to="/Bookmark" style={{ textDecoration:"none", color: "black"}}>⭐️ 북마크 페이지</Link></div>
    </DropdownContainer>
  );
}

export default Dropdown;
