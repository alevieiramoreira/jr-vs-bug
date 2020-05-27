import React, { ReactElement, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as yup from 'yup';

import InputElement from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

import { useToast } from '../../hooks/toast';
import api from '../../services/api';

function SignUp(): ReactElement {
  const [nickName, setNickName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { addToast } = useToast();
  const history = useHistory();

  async function register(event: React.FormEvent) {
    event.preventDefault();

    addToast({
      title: 'aaaaa',
      description: 'aaaaaaaaaa',
      type: 'success',
    });

    try {
      const validationInput = yup.object().shape({
        nickName: yup.string().required('informe seu nickname').min(3, 'minimo 3 caracteres'),
        password: yup.string().required('informe sua senha'),
      });

      await validationInput.validate({ nickName, password }, { abortEarly: false });

      await api
        .post('user', {
          nickName,
          password,
        })
        .then((res) => console.log(res.data));

      history.push('/login');
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
            onChange={(event) => setPassword(event.target.value)}
            width={349}
            height={51}
          />
          <Button type="submit" name="Cadastrar" width={349} height={51} />
          <Link to="/login"> Já possuo cadastro</Link>
        </form>
      </div>
    </Container>
  );
}

export default SignUp;
