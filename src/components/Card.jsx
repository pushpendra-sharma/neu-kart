import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/Card.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemsSelector, wishListItemsSelector } from '../redux/selectors';
import {
  addToWishlistThunk,
  removeFromWishlistThunk,
} from '../redux/features/wishListSlice';
import { addToCartThunk } from '../redux/features/cartSlice';
import { toast } from 'react-toastify';

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
    productId,
  } = props.data;
  const id = sessionStorage.getItem('loginUserId');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishListItems = useSelector(wishListItemsSelector);
  const cartItems = useSelector(cartItemsSelector);

  return (
    <div className='card-container'>
      <div className='card-img'>
        <img src={imageUrl} alt='product' className='card-photo'></img>
        {wishListItems.includes(productId) ? (
          <span
            className='material-symbols-outlined wishlist-icon-active'
            onClick={() => {
              if (id) {
                dispatch(removeFromWishlistThunk(productId))
                  .then(() => {
                    toast.success('Item removed from Wishlist');
                  })
                  .catch(err => {
                    console.log(err);
                  });
              } else {
                navigate('/login');
              }
            }}
          >
            favorite
          </span>
        ) : (
          <span
            className='material-symbols-outlined wishlist-icon'
            onClick={() => {
              if (id) {
                dispatch(addToWishlistThunk(productId))
                  .then(() => {
                    toast.success('Item added to Wishlist');
                  })
                  .catch(err => {
                    console.log(err);
                  });
              } else {
                navigate('/login');
              }
            }}
          >
            favorite
          </span>
        )}
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
      {cartItems.includes(productId) ? (
        <Link to='/cart' className='card-btn go-cart-btn'>
          Go to Cart
        </Link>
      ) : (
        <button
          className='card-btn add-cart-btn'
          onClick={() => {
            if (id) {
              dispatch(addToCartThunk(productId))
                .then(() => {
                  toast.success('Item added to Cart');
                })
                .catch(err => {
                  console.log(err);
                });
            } else {
              navigate('/login');
            }
          }}
        >
          Add to Cart
        </button>
      )}
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
