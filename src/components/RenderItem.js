import React from "react";
import styled from "styled-components";

export const ItemInfo = styled.div`
    width: 300px;
    margin: 0;

    img {
        width: 280px;
        height: 200px;
        border-radius: 10px;
    }

    .title_discount {
        width: 280px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        }

    .title_discount h3, p {
        margin: 0;
    }

    .price {
        width: 280px;
        margin: 0;
        font-size: 1rem;
        font-weight: 600;
        color: #ff6b6b;
        display: flex;
        justify-content: flex-end;
    }
`;


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
              <h3>{product.brand_name}</h3>
              <p>관심고객수</p>
              <p>{product.follower}</p>
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
