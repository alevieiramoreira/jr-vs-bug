import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: 'JUNIOR' | 'BUG';
  width: number;
  height: number;
  selected?: boolean;
}

export const CardContainer = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #000;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  ${(props) =>
    props.type === 'BUG' &&
    css`
      background-color: #cb0c59;
    `}
  ${(props) =>
    props.type === 'JUNIOR' &&
    css`
      color: #000;
      background-color: #2dd5ed;
    `}

  img {
    width: 70px;
    max-height: 100px;
  }

  & + div {
    margin-left: 5px;
  }

  button {
    display: flex;
    visibility: hidden;
    position: absolute;
    padding: 8px 3px;
    background-color: #deb304;
    box-shadow: inset -4px -4px 0px 0px #d48900;
  }

  :hover {
    ${(props) =>
      props.type === 'JUNIOR' &&
      css`
        background-color: #898f8f;
        button {
          visibility: visible;
        }
      `};
    ${(props) =>
      props.type === 'JUNIOR' &&
      css`
        background-color: #898f8f;
        button {
          visibility: visible;
        }
      `};
  }
`;
