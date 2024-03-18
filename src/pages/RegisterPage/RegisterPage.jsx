import styles from '../../components/Phonebook/Phonebook.module.css';

import InputField from 'components/common/InputField/InputField';
import SubmitBtn from 'components/common/SubmitBtn/SubmitBtn';
import FallbackLoader from 'components/common/FallbackLoader/FallbackLoader';

import useAuth from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const { isLoading } = useAuth();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();

    const password = form.elements.password.value;
    const confirmPassword = form.elements.confirmPassword.value;

    if (password !== confirmPassword) {
      toast.error(`Passwords doesn't match !`);
      return;
    }

    dispatch(register({ name, email, password }));

    form.reset();
  };

  if (isLoading) {
    return <FallbackLoader>Register...</FallbackLoader>;
  }

  return (
    <section className={styles.authSection}>
      <div className={styles.phonebook}>
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
          <InputField type="text" name="name" />
          <InputField type="email" name="email" />
          <InputField type="password" name="password" />
          <InputField type="password" name="confirmPassword" />

          <SubmitBtn text="Register" />
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
