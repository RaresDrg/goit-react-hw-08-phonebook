import { Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import ContactsPage from '../ContactsPage';

const RestrictedContactsPage = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to={'/login'} />;
  }

  return <ContactsPage />;
};

export default RestrictedContactsPage;
