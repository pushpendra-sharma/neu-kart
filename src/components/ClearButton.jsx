import PropTypes from 'prop-types';
import '../styles/Filter.css';

const ClearButton = ({ label, active, callback }) =>
  active ? (
    <span className='clear-text' onClick={callback}>
      {label}
    </span>
  ) : null;

ClearButton.propTypes = {
  label: PropTypes.string,
  active: PropTypes.bool,
  callback: PropTypes.func,
};

ClearButton.defaultProps = {
  label: 'Clear',
  active: false,
};

export default ClearButton;
