import { GameProps } from '../@types/game';
import api from './api';

export const getGameStart = (): Promise<GameProps> => {
  const token = localStorage.getItem('@JrVsBug:token');

  try {
    const response = api.get('game', { headers: { token } }).then((res) => res.data);

    return response;
  } catch (error) {
    return error;
  }
};

export const sendData = (endpoint: string, data: object): Promise<any> => {
  const token = localStorage.getItem('@JrVsBug:token');

  try {
    const response = api.post(endpoint, data, { headers: { token } }).then((res) => res.data);

    return response;
  } catch (error) {
    return error;
  }
};
