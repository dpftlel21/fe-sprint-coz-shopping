import styled from "styled-components";
import ProductLists from "../components/ProductLists";
import BookmarkLists from "../components/BookmarkLists";

export const MainContainer = styled.div`
  width: 100%;
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  .list_box {
    width : 90%;
    height : 300px;
    margin: 20px 20px;
    border : 1px solid black;
  }
`;

function Main() {
  return (
    <>
      <MainContainer>
        <div className="list_box">
          <h1>상품 리스트</h1>
          <ProductLists />
        </div>
        <div className="list_box">
          <h1>북마크 리스트</h1>
          <BookmarkLists />
        </div>
      </MainContainer>
    </>
  );
}

export default Main;
