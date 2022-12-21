import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/Nav.css';
import { loginSelector, userNameSelector } from '../redux/selectors';
import { signOut } from '../redux/features/authSlice';
import { clearWishlistAction } from '../redux/features/wishListSlice';
import { clearCartAction } from '../redux/features/cartSlice';

const Nav = () => {
  const dispatch = useDispatch();
  const id = sessionStorage.getItem('loginUserId');

  const loginCheck = useSelector(loginSelector);
  const userName = useSelector(userNameSelector);
  return (
    <>
      <nav className='navigation nav-container'>
        <div className='nav-brand'>
          <Link className='link' to='/'>
            Neukart
          </Link>
        </div>
        <div className='nav-item'>
          <input
            className='nav-searchbar'
            placeholder='Search for products, brands and more'
          />
        </div>
        {loginCheck ? (
          <div className='nav-item'>Hi, {userName.split(' ')[0]}</div>
        ) : (
          <div className='nav-item'>
            <Link className='link btn-login' to='/login'>
              Login
            </Link>
          </div>
        )}
        <div className='nav-item'>
          <Link className='link btn-cart' to='/cart'>
            Cart
          </Link>
        </div>
        <div className='nav-item'>
          <Link className='link btn-cart' to='/wishlist'>
            Wishlist
          </Link>
        </div>
        {id && (
          <div className='nav-item'>
            <Link
              className='link btn-login'
              to='/'
              onClick={() => {
                dispatch(signOut());
                dispatch(clearWishlistAction());
                dispatch(clearCartAction());
              }}
            >
              SignOut
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
