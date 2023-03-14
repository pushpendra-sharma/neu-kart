import { useSelector } from 'react-redux';
import emptyImage from '../../images/emptyImage.webp';
import './Wishlist.css';
import { Card } from '../../components';
import {
  allProductsSelector,
  wishListItemsSelector,
} from '../../redux/selectors';

const WishList = () => {
  const wishListItems = useSelector(wishListItemsSelector);
  const products = useSelector(allProductsSelector);

  return (
    <div className='wishList-wrapper'>
      <div className='wishList-header'>
        <h2 className='heading'>My WishList ({wishListItems.length})</h2>
        <div className='wishList-details'></div>
      </div>

      {wishListItems.length ? (
        <div className='non-empty-wishList-body'>
          {products
            .filter(item => wishListItems.includes(item._id))
            .map(item => (
              <Card key={item._id} data={item} />
            ))}
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default WishList;
