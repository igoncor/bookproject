// src/components/PrivateRoute/PrivateRoute.jsx
import  { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { postVerifyToken} from '../../services/auth';

const PrivateRoute = ( component ) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        const isValid = await postVerifyToken(token);
        setIsAuthenticated(isValid);
      } else {
        setIsAuthenticated(false);
      }
    };
    checkToken();
  }, []);

  if (isAuthenticated === null) {
    // Render a loading state while checking the token
    return <div>Cargando...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return component;
};

export default PrivateRoute;