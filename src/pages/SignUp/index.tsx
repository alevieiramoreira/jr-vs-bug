import React, { ReactElement, Component } from 'react';
import InputElement from '../../components/Input';
import { Container } from './styles';
import { ButtonContainer } from '../../components/Button/styles';

interface Props {
  type: string;
  placeholder: string;
  name: string;
  nameInput: String;
  width: number;
  height: number;
}

function SignUp({ name, height, width }: Props): ReactElement {
  return (
    <Container>
      <div>
        <form>
          <h1>Logo/Title</h1>
          <InputElement placeholder={'nome'} width={349} height={51} />
          <InputElement placeholder={'email'} width={349} height={51} />
          <InputElement placeholder={'password'} width={349} height={51} />
          <ButtonContainer width={344} height={51} name={name}>
            {'Cadastrar'}
          </ButtonContainer>
          <a href="#"> Já possuo cadastro</a>
        </form>
      </div>
    </Container>
  );
}

export default SignUp;
