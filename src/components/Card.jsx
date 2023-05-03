import PropTypes from 'prop-types';
import '../styles/Card.css';
import { CartButton, WishListButton } from './';

const Card = props => {
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
    _id,
    availability,
  } = props.data;

  return (
    <div className='card-container'>
      <div className='card-img'>
        <img src={imageUrl} alt='product' className='card-photo'></img>
        <WishListButton id={_id} />
      </div>
      <h3 className='card-main-heading'>{productName}</h3>
      <p className='card-desc'>{description}</p>
      <div className='rating'>Rating {rating}</div>
      <p>
        <span>₹{price}</span>
        <span className='strike-price'>₹{mrp}</span>
        <span className='discount'>{discount} % off</span>
      </p>
      <p className='features'>{features}</p>
      <p className='discount'>{offer}</p>
      {availability ? (
        <p className='discount'>Available</p>
      ) : (
        <p className='unavailable'>Out of stock</p>
      )}
      <CartButton id={_id} availability={availability} type='add' />
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
