import React, { ReactElement } from 'react';
import InputElement from '../../components/Input';
import Button from '../../components/Button';
import { Container } from './styles';

interface Props {
  type: string;
  placeholder: string;
  name: string;
  nameInput: String;
  width: number;
  height: number;
}

function Login({ name, height, width }: Props): ReactElement {
  return (
    <Container>
      <div>
        <form>
          <h1>Logo/Title</h1>
          <InputElement placeholder="Email" width={349} height={51} />
          <InputElement placeholder="Password" width={349} height={51} />
          <Button name="Login" width={349} height={51} />
          <a href="#"> Ainda não sou cadastrado</a>
        </form>
      </div>
    </Container>
  );
}

export default Login;
