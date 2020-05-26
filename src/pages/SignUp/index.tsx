import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

import InputElement from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';
import api from '../../services/api';

function SignUp(): ReactElement {
  const [nickName, setNickName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function register(event: React.FormEvent) {
    event.preventDefault();

    try {
      await api
        .post('user', {
          nickName,
          password,
        })
        .then((res) => console.log(res.data));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <div>
        <form onSubmit={register}>
          <h1>Logo/Title</h1>
          <InputElement
            type="text"
            placeholder="Nickname"
            onChange={(event) => setNickName(event.target.value)}
            width={349}
            height={51}
          />
          <InputElement
            type="password"
            placeholder="Password"
            width={349}
            height={51}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button type="submit" name="Cadastrar" width={349} height={51} />
          <Link to="/login"> Já possuo cadastro</Link>
        </form>
      </div>
    </Container>
  );
}

export default SignUp;
