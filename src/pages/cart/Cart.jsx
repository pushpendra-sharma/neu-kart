import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import emptyImage from '../../images/emptyImage.webp';
import './Cart.css';
import { CartCard, PriceDetails } from '../../components';
import { allProductsSelector, cartItemsSelector } from '../../redux/selectors';

const Cart = () => {
  const cartItems = useSelector(cartItemsSelector);
  const products = useSelector(allProductsSelector);

  return (
    <>
      {cartItems.length ? (
        <div className='cart-container'>
          <div className='non-empty-cart-body'>
            <div className='cart-details-header'>
              <h2 className='heading'>My Cart ({cartItems.length})</h2>
              <div className='header-details'>
                Deliver to: <strong>House No 5, Noida 201301</strong>
                {/* <button className='update-address-btn'>Update</button> */}
              </div>
            </div>
            <div className='cart-items'>
              {products
                .filter(item => cartItems.includes(item._id))
                .map(item => (
                  <CartCard key={item._id} data={item} />
                ))}
            </div>
          </div>
          <PriceDetails />
        </div>
      ) : (
        <div className='empty-cart-wrapper'>
          <div className='empty-cart-header'>
            <h2 className='heading'>My Cart</h2>
          </div>
          <div className='empty-cart-body'>
            <div className='cart-img'>
              <img
                className='cart-empty-img'
                src={emptyImage}
                alt='Empty Cart'
              />
            </div>
            <p className='cart-desc'>Your cart is empty!</p>
            <p className='cart-msg'>Add items to it now.</p>
            <Link to='/' className='shop-now-btn'>
              Shop Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
