import React from "react";
import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  text-align: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  border-radius: 10%;
  width: 35%;
  height: 100%;
  z-index: 10000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    width: 80%;
    height: 40%;
    border-radius: 10%;
  }
`;

function Modal({ products, selectedProductId, setSelectedProductId }) {
  const selectedProduct = products.find(
    (products) => products.id === selectedProductId
  );

  const closeModal = () => {
    setSelectedProductId(null);
  };

  return (
    <>
      <ModalContainer>
        {selectedProduct && (
          <ModalBackground onClick={closeModal}>
            <ModalContent onClick={(event) => { closeModal(); event.stopPropagation(); }}>
              <img src={selectedProduct.image_url || selectedProduct.brand_image_url}alt={`Selected Product ${selectedProduct.id}`}/>
            </ModalContent>
          </ModalBackground>
        )}
      </ModalContainer>
    </>
  );
}

export default Modal;
