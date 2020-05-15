import React, { ReactElement, Component } from 'react';
import Input from '../../components/Input';
import { Container } from './styles';

interface Props {
  name: String;
  email: String;
  password: String;
}

function SignUp({name, email, password}: Props): ReactElement {
  return (
  <Container>
    <Input></Input>
  </Container>
  )
}

export default SignUp;
