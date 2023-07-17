import styled from "styled-components";

export const ItemInfo = styled.div`
    width: 400px;
    height: 400px;

    img {
        width: 400px;
        height: 210px;
        border-radius: 10px;
        margin-top: 8px;
    }

    h3 {
        font-size: 1.5rem;
        margin-top: 8px;
    }

    p {
        font-size: 1.3rem;
        margin-top: 8px;
    }

    .title_discount {
        width: 400px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        }

   .title_discount p {
        font-weight: bold;
        color: #452CDD;
    }

    .price {
        width: 400px;
        font-size: 1.3rem;
        font-weight: 600;
        color: #ff6b6b;
        display: flex;
        justify-content: flex-end;
    }

    .follower {
        width: 400px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .follower_font {
        width: 400px;
        font-size: 1.3rem;
        font-weight: 600;
        display: flex;
        justify-content: flex-end;
    }

`;