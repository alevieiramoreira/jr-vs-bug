import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import Form from '../../components/Form';

function Login(): ReactElement {
  return (
    <Container>
      <Form
        title="Seja bem vindo de volta! :D"
        buttonName="Entrar"
        linkPathName="/"
        linkText="Ainda não sou cadastrado"
      />
    </Container>
  );
}

export default Login;
