import React from "react";
import  NavButton  from "../components/NavButton";
import { ProductsListsContainer } from "../components/styles/ProductsListsStyle";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Filtering from "../components/Filtering";

function ProductsLists() {

  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [buttonType, setButtonType] = useState('All');

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <>  
        <NavButton buttonType={buttonType} products={products} setButtonType={setButtonType} />
          <ProductsListsContainer >
            <div className="list_container">
              <Filtering buttonType={buttonType} products={products} setSelectedProductId={setSelectedProductId}/>
            </div>
            <Modal products={products} setSelectedProductId={setSelectedProductId} selectedProductId={selectedProductId}/>
          </ProductsListsContainer>
    </>
  );
}

export default ProductsLists;
