import styles from './AppBar.module.css';

import useAuth from '../../hooks/useAuth';

import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={styles.appBar}>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
