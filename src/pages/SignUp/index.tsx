import React, { ReactElement, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import InputElement from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';
import { useToast } from '../../hooks/toast';

import api from '../../services/api';
import computerImage from '../../assets/images/compiuter.gif';

function SignUp(): ReactElement {
  const [nickName, setNickName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { addToast } = useToast();
  const history = useHistory();

  async function register(event: React.FormEvent) {
    event.preventDefault();

    try {
      const validationInput = Yup.object().shape({
        nickName: Yup.string().required('Por favor preencha seu nickname'),
        password: Yup.string().required('Por favor preencha sua senha'),
      });

      await validationInput.validate({ nickName, password }, { abortEarly: false });

      await api.post('user', {
        nickName,
        password,
      });
      addToast({
        type: 'success',
        title: 'Cadastro realizado com sucesso!',
        description: 'Você já pode fazer seu logon na aplicação',
      });

      setTimeout(() => {
        history.push('/login');
      }, 1500);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        console.log(error);
        error.errors.map((err) =>
          addToast({
            title: err,
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
        <h1>Torne-se um player!</h1>
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
