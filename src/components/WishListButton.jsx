import React from 'react';
import '../styles/WishlistButton.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSelector, wishListItemsSelector } from '../redux/selectors';
import {
  addToWishlistThunk,
  removeFromWishlistThunk,
} from '../redux/features/wishListSlice';

const WishListButton = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wishListItems = useSelector(wishListItemsSelector);
  const isLoggedIn = useSelector(loginSelector);

  const handleRemoveFromWishlist = e => {
    e.stopPropagation();
    
    if (isLoggedIn) {
      dispatch(removeFromWishlistThunk(id))
        .unwrap()
        .then(() => {
          toast.success('Item removed from Wishlist');
        })
        .catch(err => {
          toast.error(err);
        });
    } else {
      toast.info('Please login first!');
      navigate('/login');
    }
  };

  const handleAddToWishlist = e => {
    e.stopPropagation();

    if (isLoggedIn) {
      dispatch(addToWishlistThunk(id))
        .unwrap()
        .then(() => {
          toast.success('Item added to Wishlist');
        })
        .catch(err => {
          toast.error('Something went wrong!');
        });
    } else {
      toast.info('Please login first!');
      navigate('/login');
    }
  };

  return (
    <>
      {wishListItems.includes(id) ? (
        <span
          className='material-symbols-outlined wishlist-icon-active'
          onClick={handleRemoveFromWishlist}
        >
          favorite
        </span>
      ) : (
        <span
          className='material-symbols-outlined wishlist-icon'
          onClick={handleAddToWishlist}
        >
          favorite
        </span>
      )}
    </>
  );
};

export default WishListButton;
