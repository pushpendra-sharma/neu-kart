import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/Nav.css';
import { loginSelector, userNameSelector } from '../redux/selectors';
import { signOut } from '../redux/features/authSlice';
import { clearWishlistAction } from '../redux/features/wishListSlice';
import { clearCartAction } from '../redux/features/cartSlice';

const Nav = () => {
  const dispatch = useDispatch();

  const loginCheck = useSelector(loginSelector);
  const userName = useSelector(userNameSelector);
  return (
    <>
      <nav className='navigation nav-container'>
        <div className='nav-item'>
          <Link className='link nav-brand' to='/'>
            Neukart
          </Link>
          <input
            className='nav-searchbar'
            placeholder='Search for products, brands...'
          />
        </div>
        <div className='nav-item'>
          {loginCheck && (
            <div className='nav-name'>Hi, {userName.split(' ')[0]}</div>
          )}
          <Link className='link btn-cart' to='/cart'>
            Cart
          </Link>
          <Link className='link btn-cart' to='/wishlist'>
            Wishlist
          </Link>
          {loginCheck ? (
            <Link
              className='link nav-btn'
              to='/'
              onClick={() => {
                dispatch(signOut());
                dispatch(clearWishlistAction());
                dispatch(clearCartAction());
              }}
            >
              Sign Out
            </Link>
          ) : (
            <Link className='link nav-btn' to='/login'>
              Login
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
