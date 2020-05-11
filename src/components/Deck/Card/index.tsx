import React, { ReactElement } from 'react';

import { Container } from './styles';
import { CardState } from '../../../redux/types';

export interface CardProps extends CardState {
  width: number;
  owner: 'dev' | 'bug';
  height: number;
  isSelected?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function Card({
  id,
  width,
  height,
  description,
  owner,
  onClick,
  isSelected,
}: CardProps): ReactElement {
  return (
    <Container id={id} owner={owner} width={width} height={height}>
      <button type="button" onClick={onClick}>
        ver detalhes
      </button>
    </Container>
  );
}

export default Card;
