import { Link } from 'react-router-dom';
import emptyImage from '../../images/emptyImage.webp';
import './Cart.css';

const Cart = () => {
  return (
    <div className='cart-wrapper'>
      <div className='cart-header'>
        <h2 className='heading'>My Cart</h2>
        <div className='cart-details'></div>
      </div>
      <div className='empty-cart-body'>
        <div className='cart-img'>
          <img className='cart-empty-img' src={emptyImage} alt='Empty Cart' />
        </div>
        <p className='cart-desc'>Your cart is empty!</p>
        <p className='cart-msg'>Add items to it now.</p>
        <Link to='/' className='shop-now-btn'>
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Cart;
