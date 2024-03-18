import useAuth from 'hooks/useAuth';
import styles from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

const UserMenu = () => {
  const { userData } = useAuth();

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.userMenu}>
      <p>
        Welcome, <span>{userData.email}</span>
      </p>
      <button onClick={handleClick} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
