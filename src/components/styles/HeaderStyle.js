import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.1);

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav_left {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5rem;
  }

  .logo {
    width: 55px;
    height: 30px;
    flex-shrink: 0;
    margin-right: 12px;
  }

  .nav_right {
    margin-right: 5rem;
  }

  button {
    border: none;
    background-color: white;
    cursor: pointer;
  }
`;