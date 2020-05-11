import styled, { css } from 'styled-components';

interface ContainerProps {
  owner: 'dev' | 'bug';
  width: number;
  height: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  place-items: center;
  border: 3px solid #000;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  ${(props) =>
    props.owner === 'bug' &&
    css`
      background-color: #cb0c59;
    `}
  ${(props) =>
    props.owner === 'dev' &&
    css`
      background-color: #2dd5ed;
    `}

  span {
    color: #fff;
  }

  & + div {
    margin-left: 5px;
  }

  button {
    display: flex;
    visibility: hidden;
    margin: 0 auto;
    padding: 8px 3px;
    background-color: #fac60e;
  }

  :hover {
    ${(props) =>
      props.owner === 'dev' &&
      css`
        background-color: #898f8f;
        button {
          visibility: visible;
        }
      `};
  }
`;
