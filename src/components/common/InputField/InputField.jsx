import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const InputField = ({ type, name, pattern, title }) => {
  const inputId = nanoid();

  return (
    <>
      <label htmlFor={inputId}>{name}</label>
      <input
        type={type}
        name={name}
        id={inputId}
        pattern={pattern || null}
        title={title || null}
        autoComplete="on"
        required
      />
    </>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputField;
