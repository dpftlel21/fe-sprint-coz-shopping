import React from "react";
import RenderItem from "./RenderItem";
import { ItemInfo } from "./styles/RenderItemStyle";

function Filtering({buttonType, products, setSelectedProductId}) {

    const openModal = (productId) => {
        setSelectedProductId(productId);
    };

    const filteredProducts = products.filter((product) => product.type === buttonType);

    // 버튼 타입이 all 이면 모든 상품 렌더링
    if(buttonType === "All") {
        return (
            <RenderItem products={products} setSelectedProductId={setSelectedProductId}/>
        )
    }
    
    const renderedProducts = filteredProducts.map((product) => {
        
        // 상품 타입 Brand일 때
        if(product.type === "Brand") {
            return (
            <ItemInfo key={product.id}>
            <img src={product.brand_image_url} onClick={() => openModal(product.id)} alt="브랜드 이미지"/>
              <div className="follower">
              <h3>{product.brand_name}</h3>
              <p>관심고객수</p>
              </div>
              <p className="follower_font">{product.follower}</p>
          </ItemInfo>
            )}

        // 상품 타입 Exhibition일 때
        else if(product.type === "Exhibition") {
            return (
                <ItemInfo key={product.id}>
                    <img src={product.image_url} onClick={() => openModal(product.id)} alt="전시회 이미지"/>
                    <h3>{product.title}</h3>
                    <p>{product.sub_title}</p>
                </ItemInfo>
            )}
        
        // 상품 타입 Product일 때
        else if(product.type === "Product") {
            return (
                <ItemInfo key={product.id}>
                    <img src={product.image_url} onClick={() => openModal(product.id)} alt="상품 이미지"/>
                    <div className="title_discount">
                        <h3>{product.title}</h3>    
                        <p>{product.discountPercentage}%</p>
                    </div>
                    <p className="price">{product.price}원</p>
                </ItemInfo>
            )}

        // 상품 타입 Category일 때
        else if(product.type === "Category") {
            return (
                <ItemInfo key={product.id}>
                    <img src={product.image_url} onClick={() => openModal(product.id)} alt="카테고리 이미지"/>
                    <h3>#{product.title}</h3>
                </ItemInfo>
            )}
        return null;
    })

    return renderedProducts
}


export default Filtering;