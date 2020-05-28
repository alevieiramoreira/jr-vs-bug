import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { FormContainer, Button, Input } from './styles';

import { useAuth } from '../../hooks/authentication';
import { useToast } from '../../hooks/toast';

import api from '../../services/api';

interface SignInData {
  nickName: string;
  password: string;
}

interface FormProps {
  type: 'cadastro' | 'login';
  title?: string;
  errorMsg: Error;
  buttonName: string;
  linkPathName: string;
  linkText: string;
}

interface Error {
  title: string;
  description: string;
}

const Form: React.FC<FormProps> = ({
  title,
  buttonName,
  linkPathName,
  linkText,
  errorMsg,
  type,
}) => {
  const [data, setData] = useState<SignInData>({} as SignInData);
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
          nickName: Yup.string().required(),
          password: Yup.string().required(),
        });

        await validationInput.validate(data, { abortEarly: false });

        if (type === 'cadastro') {
          await api.post('user', data);

          addToast({
            type: 'success',
            title: 'Cadastro realizado com sucesso',
            description: 'Você já pode logar e jogar :D',
          });

          setTimeout(() => {
            history.push('/login');
          }, 1000);
        } else {
          await signIn(data);

          setTimeout(() => {
            history.push('/profile');
          }, 1000);
        }
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          error.errors.map((err) => setErrorMessage(err));
        }

        addToast({
          type: 'error',
          title: errorMsg.title,
          description: errorMsg.description,
        });
      }
    },
    [data, signIn, addToast, history, errorMsg, type],
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
