import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 257px;
  background-color: beige;

  .list__item {
    width: 13%;
  }

  .item__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  
  .item__info > p {
    margin: 0;
  }

  h3 {
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
  }
`;

function ProductLists() {
  return (
    <>
      <ListContainer>
        <div className="list__item">
          <img src="https://via.placeholder.com/150" alt="상품이미지" />
          <div className="item__info">
            <p>상품명</p>
            <p>할인율</p>
          </div>
          <h3>가격</h3>
        </div>
      </ListContainer>
    </>
  );
}

export default ProductLists;
