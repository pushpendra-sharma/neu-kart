import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  filterByBrand,
  filterByCategory,
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

    // values 1 state behind
    if (id === 'category') dispatch(filterByCategory(newState));
    if (id === 'brand') dispatch(filterByBrand(newState));
  };

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
              onChange={e => setCheckBoxValues(e)}
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
