import PropTypes from 'prop-types';

import '../styles/Filter.css';
const InputRange = (props) => {
  const { minimum, maximum, step, title, onChange } = props;

  return (
    <div className='filter-container'>
      <p className='filter-criteria-title-container'>
        <span className='filter-criteria-title'>{title}</span>
      </p>
      <p className='input-range-text'>
        <span className='range-min'>{minimum}</span>
        <span className='range-max'>{maximum}</span>
      </p>
      <input
        type='range'
        className='input'
        min={minimum}
        max={maximum}
        step={step}
        onChange={onChange}
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
  maximum: 10000,
  id: 'InputRange',
  title: 'InputRange',
};

export default InputRange;
