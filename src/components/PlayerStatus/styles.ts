import styled, { css } from 'styled-components';

interface StatusBarProps {
  type: 'health' | 'mana';
  health?: number;
  mana?: number;
}

const changeHealthColors = (healthPoints: number) => {
  if (healthPoints >= 15) {
    return '#58cf55';
  }
  if (healthPoints >= 10) {
    return '#fa9828';
  }
  return '#d60f0f';
};

export const PlayerStatusContainer = styled.div`
  img {
    width: 100px;
    border-radius: 100%;
    border: 3px solid #cb0c59;
  }
`;

export const StatusBar = styled.span<StatusBarProps>`
  display: block;
  width: 126px;
  height: 20px;
  border: solid 3px #000;
  margin-top: 10px;

  div {
    max-width: calc(6 * ${(props) => props.health || props.mana}px);
    height: 14px;
    ${(props) =>
      props.health &&
      css`
        background-color: ${changeHealthColors(props.health)};
      `};
    ${(props) =>
      props.type === 'mana' &&
      css`
        background-color: #55a3cf;
      `};
  }

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
