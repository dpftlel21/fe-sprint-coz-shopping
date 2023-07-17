import RenderItem from "../components/RenderItem";
import RenderBookmarks from "../components/RenderBookmarks";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../components/Modal";
import { MainContainer } from "../components/styles/MainsStyle";



function Main() {
  const [products, setProducts] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setBookmarks(res.data);
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
            <RenderItem products={products} setSelectedProductId={setSelectedProductId} selectedProductId={selectedProductId}/>
            <Modal products={products} setSelectedProductId={setSelectedProductId} selectedProductId={selectedProductId}/>
            </div>
        </div>
        <div className="list_box">
          <h1>북마크 리스트</h1>
          <div className="render_item">
          <RenderBookmarks bookmarks={bookmarks} setBookmarks={setBookmarks} setSelectedProductId={setSelectedProductId} selectedProductId={selectedProductId}/>
          <Modal products={products} setSelectedProductId={setSelectedProductId} selectedProductId={selectedProductId}/>
          </div>
        </div>
      </MainContainer>
    </>
  );
}

export default Main;
