import React, { ReactElement, useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import InputElement from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';
import { useAuth } from '../../hooks/authentication';
import { useToast } from '../../hooks/toast';

function Login(): ReactElement {
  const [nickName, setNickName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const history = useHistory();
  const { addToast } = useToast();

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      try {
        const validationInput = Yup.object().shape({
          nickName: Yup.string().required('Por favor preencha seu nickname'),
          password: Yup.string().required('Por favor preencha sua senha'),
        });

        await validationInput.validate({ nickName, password }, { abortEarly: false });

        await signIn({
          nickName,
          password,
        });

        setTimeout(() => {
          history.push('/profile');
        }, 1000);
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
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque suas credenciais.',
        });
      }
    },
    [nickName, password, signIn, addToast, history],
  );

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit} data-testid="form-submit">
          <h1>Bem vindo de volta! :D</h1>
          <InputElement
            type="text"
            data-testid="nickname-input"
            placeholder="Nickname"
            onChange={(event) => setNickName(event.target.value)}
            width={349}
            height={51}
          />
          <InputElement
            type="password"
            data-testid="password-input"
            placeholder="Password"
            width={349}
            height={51}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button type="submit" name="Login" width={349} height={51} />
          <Link to="/"> Ainda não sou cadastrado</Link>
        </form>
      </div>
    </Container>
  );
}

export default Login;
