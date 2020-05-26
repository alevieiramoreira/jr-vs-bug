import React from 'react';
import { RouteProps as ReactRouterProps, Route as ReactDOMRoute, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/authentication';

interface RouteProps extends ReactRouterProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

// privado/autenticado

// true/true = OK
// true/false = redirect pra login
// false/true = redirect pra dashboard
// false/false = ok

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { userId } = useAuth();
  console.log(userId);
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!userId ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/profile',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
