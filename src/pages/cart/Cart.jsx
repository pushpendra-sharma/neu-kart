import { Link } from 'react-router-dom';
import emptyImage from '../../images/emptyImage.webp';
import './Cart.css';
import { useSelector } from 'react-redux';
import { cartItemsSelector } from '../../redux/selectors';
import { products } from '../../mockData';
import CartCard from '../../components/CartCard';

const Cart = () => {
  const cartItems = useSelector(cartItemsSelector);
  return (
    <div className='cart-wrapper'>
      <div className='cart-header'>
        <h2 className='heading'>My Cart ({cartItems.length})</h2>
        <div className='cart-details'></div>
      </div>
      {cartItems.length ? (
        <div className='non-empty-cart-body'>
          <div className='cart-items'>
            {products
              .filter(item => cartItems.includes(item.productId))
              .map(item => (
                <CartCard key={item.productId} data={item} />
              ))}
          </div>
          <div className='price-details'>
            <h2>price details</h2>hello
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Cart;
