import React, { ReactElement } from 'react';

import { Container } from './styles';
import Form from '../../components/Form';

function Login(): ReactElement {
  return (
    <Container>
      <Form
        type="login"
        title="Seja bem vindo de volta! :D"
        buttonName="Entrar"
        linkPathName="/"
        linkText="Ainda não sou cadastrado"
        errorMsg={{
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque suas credenciais.',
        }}
      />
    </Container>
  );
}

export default Login;
