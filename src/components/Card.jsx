import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/Card.css';

const Card = (props) => {
  const {
    productName,
    features,
    offer,
    description,
    price,
    mrp,
    discount,
    rating,
    imageUrl,
  } = props.data;
  return (
    <div className='card-container'>
      <div className='card-wrapper'>
        <div className='card-img'>
          <img src={imageUrl} alt='mobile' className='card-photo'></img>
        </div>
        <h2 className='card-main-heading'>{productName}</h2>
        <p className='card-desc'>{description}</p>
        <div className='rating'>Rating {rating}</div>
        <p>
          <span>{price}</span>
          <span className='strike-price'>{mrp}</span>
          <span className='discount'>{discount}</span>
        </p>
        <p className='features'>{features}</p>
        <p className='discount'>{offer}</p>
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
  data: PropTypes.object,
};

Card.defaultProps = {
  data: {},
};
export default Card;
