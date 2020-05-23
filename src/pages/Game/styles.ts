import styled, { css } from 'styled-components';

interface DeckProps {
  type: 'JUNIOR' | 'BUG';
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

  div + div {
    margin-top: 35px;
  }

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
  height: 300px;
  background-color: #625b64;
  flex-wrap: wrap;

  div {
    button {
      display: none;
    }
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
