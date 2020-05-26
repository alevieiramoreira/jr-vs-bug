import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface AuthState {
  token: string;
  id: number;
}

interface SignInCredentials {
  nickName: string;
  password: string;
}

interface AuthContextState {
  userId: number;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@JrVsBug:token');
    const id = localStorage.getItem('@JrVsBug:id');

    if (token && id) {
      return { token, id: JSON.parse(id) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ nickName, password }) => {
    const response = await api.post('user/login', {
      nickName,
      password,
    });

    const { token, id } = response.data;

    localStorage.setItem('@JrVsBug:token', token);
    localStorage.setItem('@JrVsBug:id', JSON.stringify(id));

    setData({ token, id });
  }, []);

  const signOut = useCallback(() => {
    localStorage.remove('@JrVsBug:token');
    localStorage.remove('@JrVsBug:id');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ userId: data.id, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextState {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser utilizado com um AuthProvider existente');
  }

  return context;
}
