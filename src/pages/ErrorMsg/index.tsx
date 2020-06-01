import React, { ReactElement } from 'react';

import { ErrorMsgContainer } from './styles';

import cautionImg from '../../assets/images/caution.gif';

function ErrorMsg(): ReactElement {
  return (
    <ErrorMsgContainer>
      <img src={cautionImg} alt="Animação que representa um bloco com uma interrrogação" />
      <h1>Ops, ocorreu um erro. ):</h1>
      <h2>Recarregue a página e tente novamente.</h2>

      <button type="button" onClick={() => window.location.reload()}>
        Recarregar
      </button>
    </ErrorMsgContainer>
  );
}

export default ErrorMsg;
