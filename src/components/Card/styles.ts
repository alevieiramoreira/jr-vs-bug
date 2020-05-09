import styled, { css } from 'styled-components';

interface ContainerProps {
  type: 'player' | 'bug';
  width: number;
  height: number;
}

export const Container = styled.div<ContainerProps>`
  border: 3px solid #000;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  ${(props) =>
    props.type === 'bug' &&
    css`
      background-color: #cb0c59;
    `}
  ${(props) =>
    props.type === 'player' &&
    css`
      background-color: #2dd5ed;
    `}

  span {
    color: #fff;
  }

  & + div {
    margin-left: 5px;
  }
`;
