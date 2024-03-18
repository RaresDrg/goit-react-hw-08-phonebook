import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import useAuth from 'hooks/useAuth';

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <section className={styles.homePage}>
      <h1>This is my Contact Book</h1>

      {isLoggedIn ? (
        <p>
          You are logged in. Now you can access your private contact list either
          from the navigation bar up there or by clicking here:
          <Link to="contacts">Contacts</Link>
        </p>
      ) : (
        <p className={styles.notLoggedIn}>
          <span>
            This app provides you with the opportunity to create a personal
            contact list where you can add, delete, or check your personal
            contacts.
          </span>
          <span>
            To access it, you should either register if you don't have an
            account (click: <Link to="register">Register</Link>), or log in if
            you already have one (click: <Link to="login">Login</Link>).
          </span>
        </p>
      )}
    </section>
  );
};

export default HomePage;
