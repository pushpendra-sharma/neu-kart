import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router';
import { connect, useSelector } from 'react-redux';
import { Puff } from 'react-loader-spinner';
import './Products.css';
import { Card, Filter } from '../../components';
import { allProductsSelector, filtersBySlector } from '../../redux/selectors';

const Products = ({ error, loading }) => {
  const allProducts = useSelector(allProductsSelector);
  const { category, brand, availability, price, rating, discount } =
    useSelector(filtersBySlector);

  const [array, setArray] = useState(allProducts);

  useEffect(() => {
    if (category.length) {
      setArray(allProducts.filter(item => category.includes(item.category)));
    } else setArray(allProducts);
  }, [category, allProducts]);

  useEffect(() => {
    if (brand.length) {
      setArray(allProducts.filter(item => brand.includes(item.company)));
    } else setArray(allProducts);
  }, [brand, allProducts]);

  useEffect(() => {
    setArray(allProducts.filter(item => item.rating >= rating));
  }, [rating, allProducts]);

  useEffect(() => {
    setArray(allProducts.filter(item => item.discount >= discount));
  }, [discount, allProducts]);

  useEffect(() => {
    setArray(allProducts.filter(item => item.availability === availability));
  }, [availability, allProducts]);

  useEffect(() => {
    setArray(allProducts.filter(item => item.price <= price));
  }, [price, allProducts]);

  const sortFromRedux = useSelector(state => state.products.sortBy);
  if (sortFromRedux === 'priceHighToLow') {
    array.sort((item1, item2) => item2.price - item1.price);
  } else if (sortFromRedux === 'priceLowToHigh') {
    array.sort((item1, item2) => item1.price - item2.price);
  } else if (sortFromRedux === 'ratingLowToHigh') {
    array.sort((item1, item2) => item1.rating - item2.rating);
  } else if (sortFromRedux === 'ratingHighToLow') {
    array.sort((item1, item2) => item2.rating - item1.rating);
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
              {array.map(item => (
                <Card key={item._id} data={item} />
              ))}
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
