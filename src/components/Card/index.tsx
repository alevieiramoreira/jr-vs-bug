import React from 'react';

import { CardContainer } from './styles';
import { CardProps } from '../../@types/game';

export interface CardStyleProps extends Partial<CardProps> {
  width: number;
  height: number;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const Card: React.FC<CardStyleProps> = ({ imgUrl, onClick, name, ...rest }) => {
  return (
    <CardContainer {...rest}>
      <img src={imgUrl} alt={`carta: ${name}`} />
      <button id={name} type="button" onClick={onClick}>
        ver detalhes
      </button>
    </CardContainer>
  );
};

export default Card;
