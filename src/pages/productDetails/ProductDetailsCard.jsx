import './ProductDetails.css';
import { toast } from 'react-toastify';
import { CartButton, WishListButton } from '../../components';

const ProductDetailsCard = ({data}) => {
  const {
    productName,
    features,
    offer,
    description,
    price,
    mrp,
    discount,
    rating,
    imageUrl,
    availability,
    _id,
  } = data;

  return (
    <main className='item-container'>
      <div className='item-img-container'>
        <img src={imageUrl} alt='product' className='item-photo'></img>
        <WishListButton id={_id} />
      </div>

      <div className='item-details'>
        <h3 className='item-heading'>{productName}</h3>
        <p className='item-desc'>{description}</p>
        <div className='item-rating'>Rating {rating}</div>
        <p className='item-price-details'>
          <span className='item-discount'>{discount}% off</span>
          <span className='item-price'>₹{price}</span>
          <span className='item-mrp'>₹{mrp}</span>
        </p>
        <p className='item-offer'>{offer}</p>
        <p className='item-features'>{features}</p>
        {availability ? (
          <p className='item-available'>Available</p>
        ) : (
          <p className='item-unavailable'>Out of stock</p>
        )}

        <div className='btn-container'>
          <CartButton id={_id} availability={availability} />
          <button
            className='buy-btn'
            onClick={() => {
              toast.info('Buy option not available now');
            }}
          >
            Buy now
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsCard;
