import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/authentication';

import Routes from './routes';

function App(): ReactElement {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
        <GlobalStyle />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
