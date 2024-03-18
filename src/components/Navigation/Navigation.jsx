import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import useAuth from 'hooks/useAuth';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={styles.navigation}>
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink}`
        }
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to={'contacts'}
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.active}`
              : `${styles.navLink}`
          }
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
