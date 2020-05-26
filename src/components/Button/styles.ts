import styled from 'styled-components';

interface ButtonProps {
  width: number;
  height: number;
}

export const ButtonContainer = styled.button<ButtonProps>`
  background-color: #fac60e;
  text-align: center;
  font-size: 25px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  &:hover {
    filter: brightness(80%);
  }
`;
