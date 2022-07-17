import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { products } from '../mockData';
import '../pages/cart/Cart.css';
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
        <p>Price (4 items) ₹{cartDetails.totalMrp}</p>
        <p>Discount - ₹{cartDetails.totalOff}</p>
        <p>Delivery Charges FREE</p>
        <p>Total Amount ₹{cartDetails.totalPrice}</p>
        <p>You will save ₹{cartDetails.totalOff} on this order</p>
        <button className='btn-order'>Place Order</button>
      </section>
    </div>
  );
};

export default PriceDetails;
