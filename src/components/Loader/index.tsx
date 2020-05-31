import React from 'react';

import { LoaderContainer } from './styles';

import loaderGif from '../../assets/images/loader.svg';

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <img src={loaderGif} alt="animação de blocos para carregamento" />
      <strong>carregando...</strong>
    </LoaderContainer>
  );
};

export default Loader;
