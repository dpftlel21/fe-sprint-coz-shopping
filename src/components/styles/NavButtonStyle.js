import styled from 'styled-components';

export const NavButtonContainer = styled.div`
    width: 100%;
    height: 185px;
    display: flex;
    justify-content: center;
    align-items: center;

    .nav_button {
        width: 500px;
        height: 150px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    button {
        width: 80px;
        background: none;
        border: none;
    }

    button:hover {
        position: relative;
        top: 4px;
        left: 4px;
    }

`;  