import React from 'react';

import { Container } from './styles';

const ConsoleScreen: React.FC = () => {
  return (
    <Container>
      <div>
        <span>Jr vs Bug [versão 1.0]</span>
        <span>(c) 2019 Something Corporation. Todos os direitos reservados.</span>
        <span>
          C:\Users\Junior&gt;
          <strong>game start</strong>
        </span>
      </div>
    </Container>
  );
};

export default ConsoleScreen;

// https://codepen.io/lachlanjc/pen/acwFm
