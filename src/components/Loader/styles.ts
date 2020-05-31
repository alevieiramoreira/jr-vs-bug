import styled from 'styled-components';

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.8);

  img {
    width: 200px;
    height: 200px;
  }
`;
