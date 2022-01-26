import React, {createContext, useState} from 'react';
import * as auth from '../services/auth';

interface AuthContextData {
  signed: boolean;
  signIn(user: string, password: string): void;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const Auth: React.FC = ({children}) => {
  // const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);

  function signIn(user: string, password: string) {
    const response = auth.signIn(user, password);

    console.log('response context', response);
    setLogged(response);
  }

  return (
    <AuthContext.Provider value={{signIn, signed: logged}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
