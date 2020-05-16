import React, { ReactElement, Component } from 'react';
import Input from '../../components/Input';
import { Container } from './styles';

interface Props {
  name: string;
  email: string;
  password: string;
}

function SignUp({ name, email, password }: Props): ReactElement {
  return (
    <Container>
      <div>
        <form>
          <h1>Logo/Title</h1>
          <Input />
          <Input />
          <Input />

          {/* <ButtonRegister>
        <button name="register">Cadastrar</button>
        </ButtonRegister>

        <LinkRegister>
        <a href="">já possuo cadastro</a>
        </LinkRegister> */}
        </form>
      </div>
    </Container>
  );
}

export default SignUp;
