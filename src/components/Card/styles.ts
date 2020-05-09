import styled, { css } from 'styled-components';

interface ContainerProps {
  type: 'player' | 'bug';
}

export const Container = styled.div<ContainerProps>`
  /* como receber dinamicos*/
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
  border: 3px solid #000;
  width: 150px;
  height: 200px;

  span {
    color: #fff;
  }
`;
