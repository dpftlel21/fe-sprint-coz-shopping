import React from "react";
import { ItemInfo } from "./styles/RenderItemStyle";


function RenderItem({ products, setSelectedProductId, selectedProductId }) {

  const openModal = (productId) => {
    setSelectedProductId(productId);
    };

    if (!products) {
      return null;
    }
  
  return(
    <>
    {products.map((product, index) => {
      if (product.type === "Brand") {
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

      else if (product.type === "Exhibition") {
        return (
          <ItemInfo key={product.id}>
            <img src={product.image_url} onClick={() => openModal(product.id)} alt="전시회 이미지"/>
              <h3>{product.title}</h3>
              <p>{product.sub_title}</p>
          </ItemInfo>
        )}
      
        else if (product.type === "Product") {
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
        
        else if (product.type === "Category") {
          return (
            <ItemInfo key={product.id}>
              <img src={product.image_url} onClick={() => openModal(product.id)} alt="카테고리 이미지"/>
              <h3>#{product.title}</h3>
            </ItemInfo>
          )}
        return null;
        })}
    </>
  )
}

export default RenderItem;
