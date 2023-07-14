import React from "react";
import { ItemInfo } from "./RenderItem";


function RenderBookmarks({ bookmarks, prdoducts, setSelectedProductId, selectedProductId }) {

  const openModal = (productId) => {
    setSelectedProductId(productId);
    };

  return(
    <>
    {bookmarks.map((product, index) => {
      if (product.type === "Brand") {
        return (
          <ItemInfo key={product.id}>
            <img src={product.brand_image_url} onClick={() => openModal(product.id)}/>
              <h3>{product.brand_name}</h3>
              <p>관심고객수</p>
              <p>{product.follower}</p>
          </ItemInfo>
        )}

      else if (product.type === "Exhibition") {
        return (
          <ItemInfo key={product.id}>
            <img src={product.image_url} onClick={() => openModal(product.id)}/>
              <h3>{product.title}</h3>
              <p>{product.sub_title}</p>
          </ItemInfo>
        )}
      
        else if (product.type === "Product") {
          return (
            <ItemInfo key={product.id}>
              <img src={product.image_url} onClick={() => openModal(product.id)}/>
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
              <img src={product.image_url} onClick={() => openModal(product.id)}/>
              <h3>#{product.title}</h3>
            </ItemInfo>
          )}
        return null;
        })}
    </>
  )
}

export default RenderBookmarks;
