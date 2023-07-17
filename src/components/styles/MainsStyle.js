import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .list_box {
    width: 90%;
    height: 330px;
    margin-bottom: 20px;
  }

  .render_item {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  h1 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
`;