import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import computerImage from '../../assets/images/compiuter.gif';
import Form from '../../components/Form';

function SignUp(): ReactElement {
  return (
    <Container>
      <Form
        title="Torne-se um player!"
        buttonName="cadastrar"
        linkPathName="/login"
        linkText="Já sou cadastrado"
      />
      <div>
        <img src={computerImage} alt="imagem de computador escrito hello world na tela" />
      </div>
    </Container>
  );
}

export default SignUp;
