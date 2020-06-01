import React, { ReactElement } from 'react';

import { Container } from './styles';

import computerImage from '../../assets/images/compiuter.gif';
import Form from '../../components/Form';

function SignUp(): ReactElement {
  return (
    <Container>
      <Form
        type="cadastro"
        title="Torne-se um player!"
        buttonName="Cadastrar"
        linkPathName="/login"
        linkText="Já sou cadastrado"
        errorMsg={{
          title: 'Erro no cadastro',
          description: 'Erro ao realizar o cadastro, tente novamente.',
        }}
      />
      <div>
        <img src={computerImage} alt="imagem de computador escrito hello world na tela" />
      </div>
    </Container>
  );
}

export default SignUp;
