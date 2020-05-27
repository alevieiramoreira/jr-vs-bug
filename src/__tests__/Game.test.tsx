import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';

import api from '../services/api';

import App from '../App';
import Game from '../pages/Game';

const apiMock = new MockAdapter(api);

it('should be able to load the game', async () => {
  await apiMock.onGet('game').reply(200);
});

// it('should be able to render list cards', async () => {
//   expect.assertions(1);

//   const data = await apiMock.onGet('game').reply(200);

//   expect(data).toEqual
// })

it('should be able to display the players', async () => {
  const { getByTestId } = render(<Game />);

  await waitFor(() => expect(apiMock.onGet('game')).toBeCalled());

  expect(getByTestId('player-bug')).toBeTruthy();

  expect(getByTestId('player-junior')).toBeTruthy();
});
