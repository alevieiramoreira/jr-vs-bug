import styled, { css } from 'styled-components';

interface StatusBarProps {
  barType: 'life' | 'mana';
  life?: number;
  mana?: number;
  damaged?: boolean;
}

const changeLifeColors = (lifePoints: number) => {
  if (lifePoints >= 15) {
    return '#58cf55';
  }
  if (lifePoints >= 10) {
    return '#fa9828';
  }
  return '#d60f0f';
};

export const PlayerStatusContainer = styled.section`
  margin-top: 35px;
  img {
    width: 100px;
    border-radius: 100%;
    border: 3px solid #cb0c59;

    &:active {
      filter: grayscale(100%);
    }
  }
`;

export const StatusBar = styled.div<StatusBarProps>`
  width: 126px;
  height: 20px;
  border: solid 3px #000;
  margin-top: 10px;

  span {
    display: block;
    max-width: calc(6 * ${(props) => props.life || props.mana}px);
    height: 14px;
    ${(props) =>
      props.life &&
      css`
        background-color: ${changeLifeColors(props.life)};
      `};
    ${(props) =>
      props.barType === 'mana' &&
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
