import React, { ReactElement, useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import InputElement from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';
import { useAuth } from '../../hooks/authentication';
import { useToast } from '../../hooks/toast';

function Login(): ReactElement {
  const [nickName, setNickName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const history = useHistory();

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      try {
        await signIn({
          nickName,
          password,
        }).then((response) => console.log(response));

        history.push('/profile');
      } catch (error) {
        console.log(error);
      }
    },
    [nickName, password, signIn],
  );

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit} data-testid="form-submit">
          <h1>Logo/Title</h1>
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
