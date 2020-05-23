import styled, { css } from 'styled-components';

interface BoxMessageProps {
  result: 'playerWin' | 'bugWin' | 'playing';
}

export const ResultContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  place-content: center;
  position: absolute;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const BoxMessage = styled.div<BoxMessageProps>`
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

  @keyframes blink {
    0% {
      border-color: #0f0f0f;
    }

    50% {
      ${(props) =>
        props.result === 'playerWin' &&
        css`
          border-color: green;
        `}
      ${(props) =>
        props.result === 'bugWin' &&
        css`
          border-color: red;
        `}
    }
  }

  animation: blink 0.5s step-end infinite alternate;

  h1 {
    font-size: 70px;
    margin: 15px;
  }

  span {
    font-size: 30px;
  }
`;
