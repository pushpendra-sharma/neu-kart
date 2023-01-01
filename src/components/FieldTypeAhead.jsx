import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Nav.css';

const FieldTypeAhead = ({ placeholder, options, id }) => {
  const [value, setValue] = useState('');
  // const [suggestions, setSuggestions] = useState(typeAheadArray);

  const onChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <input
      name=''
      type='search'
      className='nav-searchbar'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

FieldTypeAhead.propTypes = {
  id: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
};

FieldTypeAhead.defaultProps = {
  id: 'typeAhead',
  options: [],
  placeholder: 'Search',
};

export default FieldTypeAhead;
