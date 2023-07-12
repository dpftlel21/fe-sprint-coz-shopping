import styled from "styled-components";
import BookmarkLists from "../components/BookmarkLists";
import RenderItem from "../components/RenderItem";
import { useEffect, useState } from "react";
import axios from "axios";

export const MainContainer = styled.div`
  width: 100%;
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .list_box {
    width: 90%;
    height: 330px;
    margin: 20px 20px;
  }

  .render_item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0;
  }

  h1 {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }
`;

function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
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
      <MainContainer>
        <div className="list_box">
          <h1>상품 리스트</h1>
            <div className="render_item">
            <RenderItem products={products}/>
            </div>
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
