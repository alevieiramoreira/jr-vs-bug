import styled, { css } from 'styled-components';

interface DeckProps {
  type?: 'JUNIOR' | 'BUG';
}

interface BubbleProps {
  moveNumber: number;
}

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Players = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 40px;

  button {
    position: absolute;
    bottom: 50px;
    background-color: #fac60e;
    padding: 10px;

    &:hover {
      filter: brightness(80%);
    }
  }
`;

export const BoardWithDecks = styled.section`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 850px;
  margin: 0 15px;
  height: 100vh;
`;

export const Deck = styled.div<DeckProps>`
  display: flex;

  ${(props) =>
    props.type === 'JUNIOR' &&
    css`
      align-self: flex-end;
    `}
  ${(props) =>
    props.type === 'BUG' &&
    css`
      align-self: flex-start;
    `}
`;

export const Table = styled.section`
  margin: 10px 0;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  min-height: 290px;
  max-height: 600px;
  background-color: #625b64;

  div {
    button {
      display: none;
    }
  }

  span {
    font-size: 30px;
    position: fixed;
    bottom: 35%;
    display: flex;

    @keyframes blinktext {
      0% {
        opacity: 0%;
      }

      50% {
        opacity: 100%;
      }
    }

    animation: blinktext 0.5s step-end infinite alternate;
  }
`;

export const SelectedCard = styled.div<DeckProps>`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 5px;

  div {
    margin: 5px;
    &:hover {
      button {
        visibility: hidden;
      }
    }
  }

  span {
    display: block;
    max-width: 120px;
  }

  button {
    width: 100px;
    padding: 5px;
    background-color: #fac60e;
    margin-top: 5px;

    &:hover {
      filter: brightness(80%);
    }
  }

  ${(props) =>
    props.type === 'BUG' &&
    css`
      button {
        display: none;
      }
    `}
`;

export const Bubble = styled.div<BubbleProps>`
  position: absolute;
  background: #004080;
  border-radius: 0.4em;
  height: 40px;
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;

  ${(props) =>
    props.moveNumber % 2 === 0
      ? css`
          top: 175px;
          left: 160px;
        `
      : css`
          bottom: 200px;
          left: 160px;
        `}

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0px;
    height: 0px;
    border: 10px solid transparent;
    border-right-color: #004080;
    border-left: 0;
    margin-top: -10px;
    margin-left: -10px;
  }

  @keyframes pulse {
    0% {
      opacity: 0%;
    }

    50% {
      opacity: 100%;
    }
  }

  animation: pulse 1s step-end infinite alternate;
`;
