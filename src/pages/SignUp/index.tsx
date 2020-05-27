import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import InputElement from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';
import api from '../../services/api';
import computerImage from '../../assets/images/compiuter.gif';
import { useToast } from '../../hooks/toast';

function SignUp(): ReactElement {
  const [nickName, setNickName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { addToast } = useToast();

  async function register(event: React.FormEvent) {
    event.preventDefault();

    try {
      const validationInput = yup.object().shape({
        nickName: yup.string().required('Por favor preencha seu nickname'),
        password: yup.string().required('Por favor preencha sua senha'),
      });

      await validationInput.validate({ nickName, password }, { abortEarly: false });

      await api.post('user', {
        nickName: nickName,
        password: password,
      });
      addToast({
        type: 'success',
        title: 'Cadastro realizado com sucesso!',
        description: 'Você já pode fazer seu logon na aplicação',
      });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        console.log(error);
        error.errors.map((error) =>
          addToast({
            title: error,
            type: 'error',
          }),
        );
      }
      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
      });
    }
  }
  return (
    <Container>
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
      <div>
        <img src={computerImage} alt="imagem de computador escrito hello world na tela" />
      </div>
    </Container>
  );
}

export default SignUp;
