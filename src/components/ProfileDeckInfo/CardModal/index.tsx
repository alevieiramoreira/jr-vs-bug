import React from 'react';

import { CardModalContainer, CardInfo } from './styles';

const CardModal: React.FC = ({ children }) => {
  return (
    <CardModalContainer>
      <CardInfo>{children}</CardInfo>
    </CardModalContainer>
  );
};

export default CardModal;
