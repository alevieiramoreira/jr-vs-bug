import React, { ReactElement } from 'react';

import { CardContainer } from './styles';
import { CardState } from '../../redux/types';

export interface CardProps extends CardState {
  width: number;
  owner: 'dev' | 'bug';
  height: number;
  isSelected?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

function Card({ id, width, height, name, owner, onClick }: CardProps): ReactElement {
  return (
    <CardContainer id={id} owner={owner} width={width} height={height}>
      <div>{name}</div>
      <button id={id} type="button" onClick={onClick}>
        ver detalhes
      </button>
    </CardContainer>
  );
}

export default Card;
