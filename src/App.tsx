import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';
import AppProvider from './hooks';

function App(): ReactElement {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
        <GlobalStyle />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
