import styled from 'styled-components';

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