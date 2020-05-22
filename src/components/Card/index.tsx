import React, { ReactElement } from 'react';

import { CardContainer } from './styles';
import { CardProps } from '../../@types/types';

export interface CardStyleProps extends Partial<CardProps> {
  width: number;
  owner: 'dev' | 'bug';
  height: number;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

function Card({ width, height, name, owner, imgUrl, onClick }: CardStyleProps): ReactElement {
  return (
    <CardContainer id={name} owner={owner} width={width} height={height}>
      <img src={imgUrl} alt={`carta: ${name}`} />
      <button id={name} type="button" onClick={onClick}>
        ver detalhes
      </button>
    </CardContainer>
  );
}

export default Card;
