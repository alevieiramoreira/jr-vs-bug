import React, { ReactElement } from 'react';

import { ResultContainer, BoxMessage } from './styles';

function GameResult(): ReactElement {
  return (
    <ResultContainer>
      <BoxMessage>
        <h1>Você venceu!</h1>
        <span>mensagem motivacional</span>
      </BoxMessage>
    </ResultContainer>
  );
}

export default GameResult;
