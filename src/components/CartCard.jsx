import PropTypes from 'prop-types';
import '../styles/Card.css';
import { useDispatch } from 'react-redux';
import { removeFromCartThunk } from '../redux/features/cartSlice';
import { toast } from 'react-toastify';

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
    productId,
  } = props.data;

  const dispatch = useDispatch();
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
      <span
        className='material-symbols-outlined delete-icon'
        onClick={() => {
          dispatch(removeFromCartThunk(productId))
            .then(() => {
              toast.success('Item removed from Cart');
            })
            .catch(err => {
              console.log(err);
            });
        }}
      >
        delete
      </span>
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
