import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/Card.css';

const Card = (props) => {
  const { productName, description, price, discount, rating } = props.data;
  return (
    <div className='card'>
      <div className='card-wrapper'>
        <div className='card-img'>
          <img
            src='https://images.pexels.com/photos/12123389/pexels-photo-12123389.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt='mobile'
            className='card-photo'
          ></img>
        </div>
        <h3 className='card-main-heading'>{productName}</h3>
        <p className='card-desc'>{description}</p>
        <div className='rating'>{rating}</div>
        <p>₹{price}</p>
        <p className='strike-price'>₹10000</p>
        <p className='discount'>{discount}off</p>
      </div>
      <footer className='card-footer'>
        <Link to='/' className='card-btn add-cart-btn'>
          Add to Cart
        </Link>
        {/* <Link to='/' className='card-btn buy-now-btn'>
          Buy Now
        </Link> */}
      </footer>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
};

Card.defaultProps = {
  name: 'Rahul',
  eyeColor: 'deepblue',
  age: '45',
};
export default Card;
