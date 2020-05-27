import React from 'react';
import MockAdapter from 'axios-mock-adapter';

import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import api from '../services/api';

import Login from '../pages/Login';

const apiMock = new MockAdapter(api);

it('should be able to login', async () => {
  const data = {
    nickName: 'alessandra',
    password: '123456789',
  };

  apiMock.onPost('user/login', data).reply(200);
});

it('should be able to navigate to the profile page', () => {
  const history = createMemoryHistory();
  const { getByTestId, getByText } = render(
    <Router history={history}>
      <Login />
    </Router>,
  );

  const inputNick = getByTestId('nickname-input');
  const inputPass = getByTestId('password-input');

  fireEvent.change(inputNick, { target: { value: 'alessandra' } });
  fireEvent.change(inputPass, { target: { value: '123465789' } });

  fireEvent.click(getByText('Login'));

  expect(window.location.pathname).toEqual('/profile');
});
