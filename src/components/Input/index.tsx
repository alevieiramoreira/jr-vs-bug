import React, { ReactElement, Component } from 'react';
import { Container } from './styles';

interface Props {
  name: string;
  email: string;
  password: string;
}

function Input(): ReactElement {
  return (
    <Container>
      <input type="name" placeholder="nome" />
    </Container>
  );
}

export default Input;
