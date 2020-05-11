import styled, { css } from 'styled-components';

interface StatusBarProps {
  type: 'health' | 'mana';
}

export const Container = styled.div`
  img {
    width: 100px;
    border-radius: 100%;
    border: 3px solid #cb0c59;
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
