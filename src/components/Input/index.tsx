import React, { ReactElement, Component} from 'react';
import { Container, InputName,InputEmail, InputPassword, ButtonRegister, LinkRegister, Title } from './styles';

interface Props{
  name: String;
  email: String;
  password: String;
}

function Input(): ReactElement {
  return (
  <Container>
    <div id="app">
      <Title>
      <h1>Logo/Title</h1>
      </Title>
      <img src="" alt=""></img>
      <form>
        <InputName>
        <input type="name" placeholder="nome"/>
        </InputName>

        <InputEmail>
        <input type="email" placeholder="email"/>
        </InputEmail>

        <InputPassword>
        <input type="password" placeholder="senha"/>
        </InputPassword>

        <ButtonRegister>
        <button name="register">Cadastrar</button>
        </ButtonRegister>

        <LinkRegister>
        <a href="">já possuo cadastro</a>
        </LinkRegister>
      </form>
    </div>
    </Container>
  
  );
}

export default Input;
