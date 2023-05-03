import PropTypes from 'prop-types';
import '../styles/Card.css';
import CartButton from './CartButton';

const CartCard = props => {
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
  } = props.data;

  return (
    <div className='card-container'>
      <div className='card-img'>
        <img src={imageUrl} alt='product' className='card-photo'></img>
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
      <CartButton id={_id} type='remove' />
    </div>
  );
};

CartCard.propTypes = {
  data: PropTypes.object,
};

CartCard.defaultProps = {
  data: {},
};
export default CartCard;
