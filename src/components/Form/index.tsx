import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { FormContainer, Button, Input } from './styles';
import { useAuth } from '../../hooks/authentication';
import { useToast } from '../../hooks/toast';

interface SignIn {
  nickName: string;
  password: string;
}

interface FormProps {
  title?: string;
  buttonName: string;
  linkPathName: string;
  linkText: string;
}

const Form: React.FC<FormProps> = ({ title, buttonName, linkPathName, linkText }) => {
  const [data, setData] = useState<SignIn>({} as SignIn);
  const [errorMessage, setErrorMessage] = useState<string>();
  const history = useHistory();
  const { addToast } = useToast();
  const { signIn } = useAuth();

  const handleType = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setErrorMessage(undefined);

      setData({ ...data, [event.target.id]: event.target.value });
    },
    [data],
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      try {
        const validationInput = Yup.object().shape({
          nickName: Yup.string().required('Por favor preencha seu nickname'),
          password: Yup.string().required('Por favor preencha sua senha'),
        });

        await validationInput.validate(data, { abortEarly: false });

        await signIn(data);

        setTimeout(() => {
          history.push('/profile');
        }, 1000);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          error.errors.map((err) => setErrorMessage(err));
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque suas credenciais.',
        });
      }
    },
    [data, signIn, addToast, history],
  );

  return (
    <FormContainer onSubmit={handleSubmit} data-testid="form-submit">
      {!!title && <h1>{title}</h1>}
      <Input
        type="text"
        id="nickName"
        data-testid="nickname-input"
        placeholder="Nickname"
        onChange={handleType}
        error={errorMessage}
      />
      <Input
        type="password"
        id="password"
        data-testid="password-input"
        placeholder="Password"
        onChange={handleType}
        error={errorMessage}
      />
      <Button type="submit">{buttonName}</Button>
      <Link to={linkPathName}>{linkText}</Link>
    </FormContainer>
  );
};

export default Form;
