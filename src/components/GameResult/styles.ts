import styled, { css } from 'styled-components';

interface BoxMessageProps {
  winner: 'BUG' | 'JUNIOR' | null;
}

export const ResultContainer = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  place-content: center;
  position: absolute;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const BoxMessage = styled.section<BoxMessageProps>`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 65vh;
  background-color: #0f0f0f;
  text-align: center;
  border: 3px solid;
  padding: 15px;

  @keyframes blinkborder {
    0% {
      border-color: #0f0f0f;
    }

    50% {
      ${(props) =>
        props.winner === 'JUNIOR' &&
        css`
          border-color: green;
        `}
      ${(props) =>
        props.winner === 'BUG' &&
        css`
          border-color: red;
        `}
    }
  }

  animation: blinkborder 0.5s step-end infinite alternate;

  h1 {
    font-size: 70px;
    margin: 15px;
  }

  span {
    font-size: 30px;
  }

  a {
    margin-top: 50px;
    align-self: center;
    font-size: 25px;
    width: 115px;
    text-align: center;
    text-decoration: none;
    padding: 10px;
    background-color: #fac60e;

    &:hover {
      filter: brightness(80%);
    }
  }
`;
