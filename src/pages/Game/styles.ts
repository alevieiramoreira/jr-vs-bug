import styled, { css } from 'styled-components';

interface DeckProps {
  type: 'dev' | 'bug';
}

export const Container = styled.div`
  display: flex;
  padding: 0 15px;
  height: 100vh;
`;

export const Players = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;

  div + div {
    margin-top: 35px;
  }
`;

export const Board = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 920px;
  margin: 0 15px;
`;

export const Deck = styled.div<DeckProps>`
  display: flex;
  width: 100%;

  ${(props) =>
    props.type === 'dev' &&
    css`
      align-self: flex-end;
    `}
  ${(props) =>
    props.type === 'bug' &&
    css`
      align-self: flex-start;
    `}
`;

export const Status = styled.section``;

export const Table = styled.section`
  margin: 10px 0;
  padding: 10px;
  display: flex;
  align-self: center;
  width: 100%;
  height: 350px;
  background-color: #625b64;

  div {
    button {
      display: none;
    }
  }
`;

export const SelectedCard = styled.div`
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
`;
