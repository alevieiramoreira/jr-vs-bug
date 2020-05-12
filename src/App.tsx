import React, { ReactElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import GlobalStyle from './styles/global';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Game from './pages/Game';
import Profile from './pages/Profile';

function App(): ReactElement {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/cadastro" component={SignUp} />
          <Route path="/profile" component={Profile} />
          <Route path="/game" component={Game} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </Provider>
  );
}

export default App;
