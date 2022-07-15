import emptyImage from '../../images/emptyImage.webp';
import './Wishlist.css';
import { useSelector } from 'react-redux';
import { wishListItemsSelector } from '../../redux/selectors';
import Card from '../../components/Card';
import { products } from '../../mockData';

const WishList = () => {
  const wishListItems = useSelector(wishListItemsSelector);

  return (
    <div className='wishList-wrapper'>
      <div className='wishList-header'>
        <h2 className='heading'>My WishList ({wishListItems.length})</h2>
        <div className='wishList-details'></div>
      </div>

      {wishListItems.length ? (
        <div className='non-empty-wishList-body'>
          {products
            .filter(item => wishListItems.includes(item.productId))
            .map(item => (
              <Card key={item.productId} data={item} />
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
