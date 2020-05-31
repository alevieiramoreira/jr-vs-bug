import api from '../services/api';

interface ReqData {
  endpoint: string;
  data: object;
}

const usePostData = ({ endpoint, data }: ReqData) => {
  const token = localStorage.getItem('@JrVsBug:token');

  try {
    const response = api.post(endpoint, data, { headers: { token } }).then((res) => res.data);

    return response;
  } catch (error) {
    throw new Error('Ocorreu um erro na solicitação, recarregue a aplicação.');
  }
};

export default usePostData;
