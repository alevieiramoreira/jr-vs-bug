import React, { ButtonHTMLAttributes } from 'react';

import { ButtonContainer } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  width: number;
  height: number;

  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const Button: React.FC<Props> = ({ name, width, height, onClick }) => {
  return (
    <ButtonContainer width={width} height={height} onClick={onClick}>
      {name}
    </ButtonContainer>
  );
};

export default Button;
