import emptyImage from '../../images/emptyImage.webp';
import './Wishlist.css';

const WishList = () => {
  return (
    <div className='wishList-wrapper'>
      <div className='wishList-header'>
        <h2 className='heading'>My WishList</h2>
        <div className='wishList-details'></div>
      </div>
      <div className='empty-wishList-body'>
        <div className='wishList-img'>
          <img
            className='wishList-empty-img'
            src={emptyImage}
            alt='Empty wishList'
          />
        </div>
        <p className='wishList-desc'>Empty Wishlist</p>
        <p className='wishList-msg'>
          You have no items in your wishlist. Start adding!
        </p>
      </div>
    </div>
  );
};

export default WishList;
