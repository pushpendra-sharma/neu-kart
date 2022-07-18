import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { products } from '../mockData';
import '../styles/PriceDetails.css';
import { cartItemsSelector } from '../redux/selectors';

const PriceDetails = props => {
  const cartItemsIds = useSelector(cartItemsSelector);
  const cartItems = products.filter(item =>
    cartItemsIds.includes(item.productId)
  );

  const cartDetails = cartItems.reduce((previousValue, currentValue) => {
    return {
      totalPrice: previousValue.price + currentValue.price,
      totalMrp: previousValue.mrp + currentValue.mrp,
      totalOff:
        previousValue.mrp +
        currentValue.mrp -
        (previousValue.price + currentValue.price),
    };
  });

  useEffect(() => {}, [cartItemsIds]);

  return (
    <div className='cart-details'>
      <h2 className='cart-details-header'>PRICE DETAILS</h2>
      <section className='price-details'>
        <p className='order-details'>
          <span>Price ({cartItemsIds.length} items)</span>
          <span>₹{cartDetails.totalMrp}</span>
        </p>
        <p className='order-details'>
          <span>Discount</span>
          <span className='green-text'>- ₹{cartDetails.totalOff}</span>
        </p>
        <p className='order-details'>
          <span>Delivery Charges</span>
          <span className='green-text'>FREE</span>
        </p>
        <p className='order-details final-price'>
          <span>Total Amount</span>
          <span>₹{cartDetails.totalPrice}</span>
        </p>
        <p className='green-text'>
          You will save ₹{cartDetails.totalOff} on this order
        </p>
        <button className='btn-order'>Place Order</button>
      </section>
    </div>
  );
};

export default PriceDetails;
