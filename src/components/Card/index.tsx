import React, { ReactElement } from 'react';

import { CardContainer } from './styles';
import { CardProps } from '../../@types/types';

export interface CardStyleProps extends Partial<CardProps> {
  width: number;
  height: number;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

function Card({ imgUrl, onClick, name, ...rest }: CardStyleProps): ReactElement {
  return (
    <CardContainer {...rest}>
      <img src={imgUrl} alt={`carta: ${name}`} />
      <button id={name} type="button" onClick={onClick}>
        ver detalhes
      </button>
    </CardContainer>
  );
}

export default Card;
