import { ListContainer } from "./ProductLists";


function BookmarkLists() {
    return (
        <>
        <ListContainer>
        <div className="list__item">
          <img src="https://via.placeholder.com/150" alt="상품이미지" />
          <div className="item__info">
            <p>상품명</p>
            <p>관심고객수</p>
          </div>
          <h3>~~~명</h3>
        </div>
      </ListContainer>
        </>
    )
}

export default BookmarkLists;