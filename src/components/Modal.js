import React from "react";
import { ModalContainer, ModalBackground, ModalContent } from "./styles/ModalStyle";

function Modal({ products, selectedProductId, setSelectedProductId }) {
  const selectedProduct = products.find(
    (products) => products.id === selectedProductId
  );

  // 모달 바깥 눌러도 닫히게 하기
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
