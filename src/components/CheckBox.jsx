import PropTypes from 'prop-types';

import '../styles/Filter.css';
const CheckBox = (props) => {
  const { options, title, onChange } = props;
  return (
    <div className='filter-container'>
      <p className='filter-criteria-title-container'>
        <span className='filter-criteria-title'>{title}</span>
      </p>
      <ul className='list-non-bullet'>
        {options.map((item) => (
          <li className='list-item' key={item.label}>
            <input
              type='checkbox'
              id={item.label}
              className='check-input'
              // checked
              onChange={onChange}
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
  // onChange:PropTypes.func.isRequired
};

CheckBox.defaultProps = {
  id: 'checkbox',
};

export default CheckBox;
