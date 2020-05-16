import React, { ReactElement } from 'react';

import { ButtonContainer } from './styles';

interface Props {
  name: string;
  width: number;
  height: number;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

function Button({ name, width, height, onClick }: Props): ReactElement {
  return (
    <ButtonContainer width={width} height={height} onClick={onClick}>
      {name}
    </ButtonContainer>
  );
}

export default Button;
