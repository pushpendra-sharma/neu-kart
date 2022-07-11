import PropTypes from 'prop-types';
import { useState } from 'react';
import '../styles/Filter.css';

const ClearButton = props => {
  const { label, active } = props;

  const [isActive, setIsActive] = useState(active);

  return (
    <>
      {isActive && (
        <span className='clear-text' onClick={() => setIsActive(!isActive)}>
          {label}
        </span>
      )}
    </>
  );
};

ClearButton.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  active: PropTypes.bool,
};

ClearButton.defaultProps = {
  id: 'clearButton',
  label: 'Clear',
  visible: false,
};

export default ClearButton;
