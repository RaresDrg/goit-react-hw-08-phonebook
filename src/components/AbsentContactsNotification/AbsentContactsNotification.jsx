import styles from './AbsentContactsNotification.module.css';

import useContacts from 'hooks/useContacts';

const AbsentContactsNotification = () => {
  const { filter: searchedContact } = useContacts();

  return (
    <>
      <p className={styles.notification}>
        {searchedContact === ''
          ? "You haven't saved any contacts yet"
          : ` " ${searchedContact} " is not saved in your contacts list`}
      </p>
    </>
  );
};

export default AbsentContactsNotification;
