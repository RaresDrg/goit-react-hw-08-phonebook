import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectToken,
  selectUserData,
  selectIsLoading,
  selectError,
} from '../redux/auth/selectors';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);
  const token = useSelector(selectToken);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return { userData, isLoggedIn, token, isLoading, error };
};

export default useAuth;
