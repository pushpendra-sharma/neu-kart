import PropTypes from 'prop-types';
import error from '../../images/error.png';
import './error.css';

const Error = ({ message }) => {
  return (
    <div className='err-body'>
      <div className='err-img'>
        <img className='err-empty-img' src={error} alt='err-img' />
      </div>
      <p className='err-desc'>Oops!</p>
      <p className='err-msg'>{message}</p>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string,
  id: PropTypes.string,
};

Error.defaultProps = {
  id: 'error',
  message: 'Some error occured!',
};

export default Error;
