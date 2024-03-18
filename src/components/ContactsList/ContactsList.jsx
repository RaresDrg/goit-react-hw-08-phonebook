import styles from './ContactsList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import AbsentContactsNotification from 'components/AbsentContactsNotification/AbsentContactsNotification';

import useContacts from 'hooks/useContacts';

const ContactsList = () => {
  const { filteredContacts } = useContacts();

  if (filteredContacts.length === 0) {
    return <AbsentContactsNotification />;
  }

  return (
    <ul className={styles.contactsList}>
      {filteredContacts.map(item => (
        <ContactItem key={item.id} contact={item} />
      ))}
    </ul>
  );
};

export default ContactsList;
