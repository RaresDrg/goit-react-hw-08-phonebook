import { Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LoginPage from '../LoginPage';

const RestrictedLoginPage = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return <LoginPage />;
};

export default RestrictedLoginPage;
