import React from 'react';
import { NavButtonContainer } from './styles/NavButtonStyle';
import AllButton from "../img/AllButton.png";
import BrandButton from "../img/BrandButton.png";
import ExhibitionButton from "../img/ExhibitionButton.png";
import ProductButton from "../img/ProductButton.png";
import CategoryButton from "../img/CategoryButton.png";
import { useState } from 'react';

function NavButton({buttonType, setButtonType}) {

    const [isActive, setIsActive] = useState([true, false, false, false, false]);

    const handleButtonClick = (index, type) => {
        let newActive = [...isActive];
        newActive.fill(false);
        newActive[index] = true;
        setIsActive(newActive);
        setButtonType(type);
    }

    return (
        <>
        <NavButtonContainer>
            <div className="nav_button">
            <button onClick={() =>{handleButtonClick(0, "All")}}  ><img src = {AllButton} alt="전체 버튼"/><h3>All</h3></button>
            <button onClick={()=>{handleButtonClick(1,'Product')}}><img src = {ProductButton} alt="상품 버튼"/></button>
            <button onClick={()=>{handleButtonClick(2,'Category')}}><img src = {CategoryButton} alt="카테고리 버튼"/></button>
            <button onClick={()=>{handleButtonClick(3,'Exhibition')}}><img src = {ExhibitionButton} alt="기획전 버튼"/></button>
            <button onClick={()=>{handleButtonClick(4,'Brand')}}><img src = {BrandButton} alt="브랜드 버튼"/></button>
            </div>
        </NavButtonContainer>
        </>
    )
}

export default NavButton;

