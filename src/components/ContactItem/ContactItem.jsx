import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const userConfirmation = window.confirm(
      `Delete "${contact.name}" from yout list ?`
    );

    userConfirmation && dispatch(deleteContact(contact.id));
  };

  return (
    <li>
      <span>{contact.name}</span>: <span>{contact.number}</span>
      <button onClick={handleClick} type="button">
        X
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
