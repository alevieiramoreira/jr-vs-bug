import styled from 'styled-components';

export const CardModalContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  place-content: center;
  position: absolute;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const CardInfo = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-around;
  align-items: center;
  width: 50vw;
  height: 65vh;
  background-color: #0f0f0f;
  text-align: center;
  padding: 15px;

  div:first-child {
    &:hover {
      button {
        visibility: hidden;
      }
    }
  }

  div:first-child + div {
    h1 {
      font-size: 35px;
      margin: 15px;
    }

    p {
      max-width: 450px;
      float: right;
      margin: 15px 0px;
    }

    button {
      background-color: #fac60e;
      color: #fff;
      font-size: 25px;
      width: 155px;
      padding: 5px;
      margin: 15px;
      box-shadow: inset -4px -4px 0px 0px #d48900;

      position: relative;

      &:before,
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: content-box;
      }

      &:before {
        top: -4px;
        left: 0;
        border-top: 4px black solid;
        border-bottom: 4px black solid;
      }

      &:after {
        left: -4px;
        top: 0;
        border-left: 4px black solid;
        border-right: 4px black solid;
      }

      &:hover {
        background-color: #d48900;
        box-shadow: inset -4px -4px 0px 0px #915e00;
      }

      &:active {
        background-color: #deb304;
      }
    }
  }

  h2 {
    font-size: 20px;
  }
`;
