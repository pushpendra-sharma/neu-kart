import React from 'react';
import '../styles/CartButton.css';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartThunk } from '../redux/features/cartSlice';
import { cartItemsSelector, loginSelector } from '../redux/selectors';

const CartButton = ({ id, availability }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector(cartItemsSelector);
  const isLoggedIn = useSelector(loginSelector);

  const handleAddTocart = e => {
    e.stopPropagation();

    if (availability) {
      if (isLoggedIn) {
        dispatch(addToCartThunk(id))
          .unwrap()
          .then(() => {
            toast.success('Item added to Cart');
          })
          .catch(err => {
            toast.error('Something went wrong!');
          });
      } else {
        toast.info('Please login first!');
        navigate('/login');
      }
    } else {
      toast.info('Currently unavailable!');
    }
  };

  return (
    <>
      {cartItems.includes(id) ? (
        <Link to='/cart' className='cart-btn go-cart-btn'>
          Go to Cart
        </Link>
      ) : (
        <button
          className={
            availability ? 'cart-btn add-to-cart-btn' : 'faded-cart-btn'
          }
          onClick={handleAddTocart}
        >
          Add to Cart
        </button>
      )}
    </>
  );
};

export default CartButton;
