import styles from './Contacts.module.css';

import FilterContactsInput from 'components/FilterContactsInput/FilterContactsInput';
import ContactsList from 'components/ContactsList/ContactsList';
import LoadingSpinner from 'components/common/LoadingSpinner/Loader';
import ErrorAlert from 'components/common/ErrorAlert/ErrorAlert';

import useContacts from 'hooks/useContacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { isLoading, error } = useContacts();
  const Error_Message = `The contact list cannot be loaded due to the following error: ${error} `;

  return (
    <div className={styles.contacts}>
      <h2>Contacts</h2>
      <FilterContactsInput />

      {isLoading && <LoadingSpinner />}
      {error && <ErrorAlert error={Error_Message} />}
      {!isLoading && !error && <ContactsList />}
    </div>
  );
};

export default Contacts;
