import styles from './Phonebook.module.css';

import InputField from 'components/common/InputField/InputField';
import SubmitBtn from 'components/common/SubmitBtn/SubmitBtn';

import { useDispatch } from 'react-redux';
import useContacts from 'hooks/useContacts';
import { addContact } from '../../redux/contacts/operations';
import { setFilter } from '../../redux/contacts/slice';

const Phonebook = () => {
  const dispatch = useDispatch();

  const { contacts } = useContacts();

  const checkExistence = name => {
    return contacts.find(
      item => item.name.toUpperCase() === name.toUpperCase()
    );
  };

  const formatNumber = number => {
    const formatedNumber = number.padEnd(10, '9').split('');

    formatedNumber.length > 10 &&
      formatedNumber.splice(10, formatedNumber.length);

    formatedNumber.splice(3, 0, '-');
    formatedNumber.splice(7, 0, '-');

    return formatedNumber.join('');
  };

  const capitalize = text => {
    return text
      .split(' ')
      .map(
        word =>
          word.charAt(0).toUpperCase() +
          word.slice(1, word.length).toLowerCase()
      )
      .join(' ');
  };

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = capitalize(form.elements.name.value.trim());
    const number = formatNumber(form.elements.number.value.trim());

    checkExistence(name)
      ? alert(`"${name}" is already in contacts`)
      : dispatch(addContact({ name, number })) && dispatch(setFilter(''));

    form.reset();
  };

  return (
    <div className={styles.phonebook}>
      <h2>Phonebook</h2>

      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="name"
          pattern="^[a-zA-Z]+(([' \-][a-zA-Z ])?[a-zA-Z]*)*"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <InputField
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />

        <SubmitBtn text="Add contact" />
      </form>
    </div>
  );
};

export default Phonebook;
