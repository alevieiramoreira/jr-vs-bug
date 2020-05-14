import styled from 'styled-components';

interface BoxMessageProps {
  result: any;
  // receber prop para mudar a cor do box quando ganhar ou perder
}

export const ResultContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  place-content: center;
  position: absolute;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const BoxMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 65vh;
  background-color: #0f0f0f;
  text-align: center;

  h1 {
    font-size: 70px;
    margin: 15px;
  }

  span {
    font-size: 30px;
  }
`;
