import React from 'react';

import { render, fireEvent, act } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import api from '../services/api';

import App from '../App';

const apiMock = new MockAdapter(api);

it('should be able to sign in a new account', async () => {
  const data = {
    nickName: 'alessandra',
    password: '123456789',
  };

  apiMock.onPost('user', data).reply(200);
});

it('should be able to navigate to Profile page', () => {
  const { getByText } = render(<App />);

  fireEvent.click(getByText('Cadastrar'));

  expect(window.location.pathname).toEqual('/login');
});
