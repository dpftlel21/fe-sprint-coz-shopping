import styled from "styled-components";

export const ItemInfo = styled.div`
    width: 300px;
    margin: 0;

    img {
        width: 280px;
        height: 200px;
        border-radius: 10px;
        margin-top: 8px;
    }

    .title_discount {
        width: 280px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        }

    .title_discount h3, p {
        margin: 0;
    }

    .price {
        width: 280px;
        margin: 0;
        font-size: 1rem;
        font-weight: 600;
        color: #ff6b6b;
        display: flex;
        justify-content: flex-end;
    }

    .follower {
        width: 280px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
    }

    .follower h3, p {
        margin: 0;
    }

    .follower_font {
        width: 280px;
        margin: 0;
        font-size: 1rem;
        font-weight: 600;
        display: flex;
        justify-content: flex-end;
    }

`;