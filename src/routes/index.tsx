import React, {useContext} from 'react';
// import Home from '../pages/Home';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import AuthContext from '../contexts/auth';

const Routes: React.FC = () => {
  const {signed} = useContext(AuthContext);

  return signed ? AppRoutes : AuthRoutes;
};

export default Routes;
