import { Link } from 'react-router-dom';
import '../styles/Nav.css';
import { useSelector } from 'react-redux';
import { loginSelector, userNameSelector } from '../redux/selectors';

const Nav = () => {
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
      </nav>
    </>
  );
};

export default Nav;
