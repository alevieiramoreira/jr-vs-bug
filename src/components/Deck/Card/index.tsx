import React, { ReactElement } from 'react';

import { Container } from './styles';
import { CardState } from '../../../redux/types';

interface CardProps extends CardState {
  type: 'dev' | 'bug';
  width: number;
  height: number;
  isSelected?: boolean;
}

function Card({
  type,
  id,
  width,
  height,
  description,
  isSelected,
}: CardProps): ReactElement {
  return (
    <Container id={id} type={type} width={width} height={height}>
      <span>{description}</span>
    </Container>
  );
}

export default Card;
