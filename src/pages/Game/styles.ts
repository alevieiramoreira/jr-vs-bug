import styled, { css } from 'styled-components';

interface DeckProps {
  type: 'player' | 'bug';
}

interface StatusBarProps {
  type: 'health' | 'mana';
}

export const Container = styled.div`
  display: flex;
  padding: 0 15px;
  height: 100vh;
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
    props.type === 'player' &&
    css`
      align-self: flex-end;
    `}
  ${(props) =>
    props.type === 'bug' &&
    css`
      align-self: flex-start;
    `}
`;

export const Status = styled.section`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;

  img {
    width: 100px;
    border-radius: 100%;
    border: 3px solid #cb0c59;
  }

  div + div {
    margin-top: 35px;
  }
`;

export const Table = styled.section`
  margin: 10px;
  padding: 10px;
  display: flex;
  align-self: center;
  width: 100%;
  height: 350px;
  background-color: #625b64;
`;

export const SelectedCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 15px;

  div {
    margin: 5px;
  }
`;

export const StatusBar = styled.span<StatusBarProps>`
  display: block;
  width: 120px;
  height: 20px;
  border: solid 3px #000;
  margin-top: 10px;
  ${(props) =>
    props.type === 'health' &&
    css`
      background-color: #58cf55;
    `};
  ${(props) =>
    props.type === 'mana' &&
    css`
      background-color: #55a3cf;
    `};

  img {
    display: flex;
    width: 30px;
    height: 30px;
    position: absolute;
    margin-top: -10px;
    margin-left: -15px;
    border: none;
  }
`;
