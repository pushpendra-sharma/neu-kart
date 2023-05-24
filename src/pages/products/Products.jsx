import PropTypes from 'prop-types';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { Puff } from 'react-loader-spinner';
import './Products.css';
import { Card, Filter } from '../../components';
import { allProductsSelector, filtersBySlector } from '../../redux/selectors';
import { filterProducts } from '../../utils/filter';

const Products = ({ error, loading }) => {
  const navigate = useNavigate();
  const allProducts = useSelector(allProductsSelector);
  const filters = useSelector(filtersBySlector);

  const filteredProducts = filterProducts(allProducts, filters);

  const sortBy = useSelector(state => state.products.sortBy);
  if (sortBy === 'priceHighToLow') {
    filteredProducts.sort((item1, item2) => item2.price - item1.price);
  } else if (sortBy === 'priceLowToHigh') {
    filteredProducts.sort((item1, item2) => item1.price - item2.price);
  } else if (sortBy === 'ratingLowToHigh') {
    filteredProducts.sort((item1, item2) => item1.rating - item2.rating);
  } else if (sortBy === 'ratingHighToLow') {
    filteredProducts.sort((item1, item2) => item2.rating - item1.rating);
  }

  return (
    <>
      {error ? (
        <Navigate to='/error' replace={true} />
      ) : (
        <div className='products-container'>
          <Filter />
          {loading ? (
            <div className='loader'>
              <Puff
                height='80'
                width='80'
                radius={1}
                color='#2874f0'
                ariaLabel='puff-loading'
                wrapperStyle={{}}
                wrapperClass=''
                visible={true}
              />
            </div>
          ) : (
            <div className='products-filtered'>
              {filteredProducts.length > 0 ? (
                <>
                  {filteredProducts.map(item => (
                    <div
                      className='product-link'
                      onClick={() => navigate(`/product/${item._id}`)}
                      key={item._id}
                    >
                      <Card data={item} />
                    </div>
                  ))}
                </>
              ) : (
                <p>No Products found for selected filters</p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

Products.propTypes = {
  items: PropTypes.array,
  category: PropTypes.string,
};

Products.defaultProps = {
  category: 'All',
  items: [],
};

const mapStateToProps = state => ({
  error: state.products.error,
  loading: state.products.loading,
  success: state.products.success,
});

export default connect(mapStateToProps)(Products);
