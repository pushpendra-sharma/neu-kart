import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByPrice } from '../redux/features/productSlice';
import '../styles/Filter.css';

const InputRange = props => {
  const { minimum, maximum, step, title, id } = props;

  const [value, setvalue] = useState(maximum);

  const dispatch = useDispatch();

  const handleChange = e => {
    setvalue(Number(e.target.value));

    // the value state is 1 iteration behind if we use inside this fucntion but outside ok
    // controlled component?
    // if (id === 'price') dispatch(filterByPrice(value));
    if (id === 'price') dispatch(filterByPrice(Number(e.target.value)));
  };

  return (
    <div className='filter-container'>
      <p className='filter-criteria-title-container'>
        <span className='filter-criteria-title'>{title}</span>
      </p>
      <p className='input-range-text'>
        <span className='range-min'>{minimum}</span>
        <span className='range-max'>{value}</span>
      </p>
      <input
        type='range'
        className='input'
        min={minimum}
        max={maximum}
        step={step}
        onChange={e => handleChange(e)}
        value={value}
      />
    </div>
  );
};

InputRange.propTypes = {
  minimum: PropTypes.number,
  step: PropTypes.number,
  maximum: PropTypes.number,
  id: PropTypes.string,
  title: PropTypes.string,
};

InputRange.defaultProps = {
  minimum: 0,
  step: 1000,
  maximum: 150000,
  id: 'InputRange',
  title: 'InputRange',
};

export default InputRange;
