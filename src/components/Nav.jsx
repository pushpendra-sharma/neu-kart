import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
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
        <div className='nav-item'>
          <Link className='link btn-login' to='/login'>
            Login
          </Link>
        </div>
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
