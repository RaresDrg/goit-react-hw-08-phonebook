import { Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import RegisterPage from '../RegisterPage';

const RestrictedRegisterPage = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return <RegisterPage />;
};

export default RestrictedRegisterPage;
