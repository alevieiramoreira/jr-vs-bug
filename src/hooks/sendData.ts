import api from '../services/api';

interface ReqData {
  endpoint: string;
  data: object;
}

const usePostData = async ({ endpoint, data }: ReqData) => {
  try {
    const response = await api.post(endpoint, data).then((res) => res.data);

    return response;
  } catch (error) {
    throw new Error('Ocorreu algum erro inesperado, tente novamente.');
  }
};
