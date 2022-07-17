import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  filterByBrand,
  filterByCategory,
  filterByDiscount,
  filterByRating,
} from '../redux/features/productSlice';
import '../styles/Filter.css';
const CheckBox = props => {
  const { options, title, id } = props;

  const [values, setvalues] = useState([]);

  const dispatch = useDispatch();
  const setCheckBoxValues = e => {
    const { value, checked } = e.target;
    const newState = checked
      ? values.concat(value)
      : values.filter(item => item !== value);
    setvalues(newState);
  };

  useEffect(() => {
    if (id === 'category') dispatch(filterByCategory(values));
    if (id === 'brand') dispatch(filterByBrand(values));
    if (id === 'discount') dispatch(filterByDiscount(values));
    if (id === 'rating') dispatch(filterByRating(values));
  }, [dispatch, id, values]);

  return (
    <div className='filter-container'>
      <p className='filter-criteria-title-container'>
        <span className='filter-criteria-title'>{title}</span>
      </p>
      <ul className='list-non-bullet'>
        {options.map(item => (
          <li className='list-item' key={item.label}>
            <input
              type='checkbox'
              id={item.label}
              className='check-input'
              // checked
              onClick={e => setCheckBoxValues(e)}
              value={item.value}
            />
            <label htmlFor={item.label}>{item.label}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

CheckBox.propTypes = {
  options: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
};

CheckBox.defaultProps = {
  id: 'checkbox',
};

export default CheckBox;
