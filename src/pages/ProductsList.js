import React from "react";
import  NavButton  from "../components/NavButton";
import { ProductsListsContainer } from "../components/styles/ProductsListsStyle";
import RenderItem from "../components/RenderItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Modal from "../components/Modal";
import Filtering from "../components/Filtering";

function ProductsLists() {

  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [buttonType, setButtonType] = useState('All');
  const { ref, inView } = useInView({
    threshold: 0
  });

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
        <ProductsListsContainer ref={ref} >
          <Filtering buttonType={buttonType} products={products} setSelectedProductId={setSelectedProductId}/>
          <Modal products={products} setSelectedProductId={setSelectedProductId} selectedProductId={selectedProductId}/>
        </ProductsListsContainer>
    </>
  );
}

export default ProductsLists;
