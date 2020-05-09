import React, { ReactElement } from 'react';

import { Container } from './styles';

interface CardProps {
  type: 'player' | 'bug';
  width: number;
  height: number;
}

function Card({ type, width, height }: CardProps): ReactElement {
  return (
    <Container type={type} width={width} height={height}>
      <span>iconezinho</span>
    </Container>
  );
}

export default Card;
