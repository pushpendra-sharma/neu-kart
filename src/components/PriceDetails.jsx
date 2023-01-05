import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../styles/PriceDetails.css';
import { allProductsSelector, cartItemsSelector } from '../redux/selectors';

const PriceDetails = props => {

  const allItems = useSelector(allProductsSelector);

  const cartItemsIds = useSelector(cartItemsSelector);
  const cartItems = allItems.filter(item =>
    cartItemsIds.includes(item._id)
  );

  const cartDetails = cartItems.reduce(
    (previousValue, currentValue) => {
      return {
        price: previousValue.price + currentValue.price,
        mrp: previousValue.mrp + currentValue.mrp,
      };
    },
    {
      price: 0,
      mrp: 0,
      discount: 0,
    }
  );

  useEffect(() => {}, [cartItemsIds]);

  return (
    <div className='cart-details'>
      <h2 className='cart-details-header'>PRICE DETAILS</h2>
      <section className='price-details'>
        <p className='order-details'>
          <span>Price ({cartItemsIds.length} items)</span>
          <span>₹{cartDetails.mrp}</span>
        </p>
        <p className='order-details'>
          <span>Discount</span>
          <span className='green-text'>
            - ₹{cartDetails.mrp - cartDetails.price}
          </span>
        </p>
        <p className='order-details'>
          <span>Delivery Charges</span>
          <span className='green-text'>FREE</span>
        </p>
        <p className='order-details final-price'>
          <span>Total Amount</span>
          <span>₹{cartDetails.price}</span>
        </p>
        <p className='green-text'>
          You will save ₹{cartDetails.mrp - cartDetails.price} on this order
        </p>
        <button className='btn-order'>Place Order</button>
      </section>
    </div>
  );
};

export default PriceDetails;
