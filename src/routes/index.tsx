import React, { ReactElement } from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import Game from '../pages/Game';

function Routes(): ReactElement {
  return (
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/game" component={Game} isPrivate />
    </Switch>
  );
}

export default Routes;
