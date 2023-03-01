import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  filterByAvailability,
  filterByDiscount,
  filterByRating,
  sortBy,
} from '../redux/features/productSlice';
import '../styles/Filter.css';

const RadioInput = props => {
  const { options, title, id } = props;

  const dispatch = useDispatch();

  const [value, setvalue] = useState('');

  const handleChange = e => {
    setvalue(e.target.value);
  };

  useEffect(() => {
    if (id === 'availability') dispatch(filterByAvailability(value));
    if (id === 'discount') dispatch(filterByDiscount(value));
    if (id === 'rating') dispatch(filterByRating(value));
    if (id === 'sort') dispatch(sortBy(value));
  }, [value, id, dispatch]);

  return (
    <div className='filter-container'>
      <p className='filter-criteria-title-container'>
        <span className='filter-criteria-title'>{title}</span>
      </p>
      <ul className='list-non-bullet'>
        {options.map(item => (
          <li className='list-item' key={item.label}>
            <input
              name={title}
              type='radio'
              id={item.label}
              className='check-input'
              onChange={e => handleChange(e)}
              value={item.value}
            />
            <label htmlFor={item.label}>{item.label}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

RadioInput.propTypes = {
  options: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
};

RadioInput.defaultProps = {
  id: 'radioButtons',
};

export default RadioInput;
