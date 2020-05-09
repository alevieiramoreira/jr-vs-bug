import React, { ReactElement } from 'react';

import { Container } from './styles';

interface CardProps {
  type: 'player' | 'bug';
}

function Card({ type }: CardProps): ReactElement {
  return (
    <Container type={type}>
      <span>iconezinho</span>
    </Container>
  );
}

export default Card;
