import Phonebook from 'components/Phonebook/Phonebook';
import styles from './ContactsPage.module.css';
import Contacts from 'components/Contacts/Contacts';

const ContactsPage = () => {
  return (
    <section className={styles.contacts}>
      <Phonebook />
      <Contacts />
    </section>
  );
};

export default ContactsPage;
