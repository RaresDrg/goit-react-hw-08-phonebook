import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
  selectContacts,
  selectFilter,
  selectFilteredContacts,
} from '../redux/contacts/selectors';

const useContacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = useSelector(selectFilteredContacts);

  return { isLoading, error, contacts, filter, filteredContacts };
};

export default useContacts;
