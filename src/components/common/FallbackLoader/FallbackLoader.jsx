import PropTypes from 'prop-types';
import styles from './FallbackLoader.module.css';
import { FallingLines } from 'react-loader-spinner';

const FallbackLoader = ({ children }) => {
  return (
    <section className={styles.fallbackLoader}>
      <FallingLines
        color="#4cba50"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
      <h2>{children}</h2>
    </section>
  );
};

FallbackLoader.propTypes = {
  children: PropTypes.string,
};

export default FallbackLoader;
