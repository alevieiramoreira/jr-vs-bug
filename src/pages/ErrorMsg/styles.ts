import styled from 'styled-components';

export const ErrorMsgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  h1 {
    font-size: 45px;
  }

  img {
    width: 350px;
  }

  button {
    margin-top: 25px;
    width: 155px;
    font-size: 24px;
    padding: 15px;
    color: #fff;
    background-color: #deb304;
    box-shadow: inset -4px -4px 0px 0px #d48900;

    &:hover {
      background-color: #d48900;
      box-shadow: inset -4px -4px 0px 0px #915e00;
    }

    &:active {
      background-color: #deb304;
    }
  }
`;
