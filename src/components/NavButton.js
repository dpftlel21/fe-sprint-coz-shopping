import React from 'react';
import { NavButtonContainer } from './styles/NavButtonStyle';
import AllButton from "../img/AllButton.png";
import BrandButton from "../img/BrandButton.png";
import ExhibitionButton from "../img/ExhibitionButton.png";
import ProductButton from "../img/ProductButton.png";
import CategoryButton from "../img/CategoryButton.png";

function NavButton() {
    return (
        <>
        <NavButtonContainer>
            <div className="nav_button">
            <button><img src = {AllButton} alt="전체 버튼"/><h3>All</h3></button>
            <button><img src = {ProductButton} alt="상품 버튼"/></button>
            <button><img src = {CategoryButton} alt="카테고리 버튼"/></button>
            <button><img src = {ExhibitionButton} alt="기획전 버튼"/></button>
            <button><img src = {BrandButton} alt="브랜드 버튼"/></button>
            </div>
        </NavButtonContainer>
        </>
    )
}

export default NavButton;

