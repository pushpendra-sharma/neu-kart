import Card from '../../components/Card';
import PropTypes from 'prop-types';
import Filter from '../../components/Filter';
import './Products.css';
import { products } from '../../mockData';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { filterByCategory } from '../../redux/features/productSlice';

const Products = () => {
  const dispatch = useDispatch();
  let { category } = useParams();

  useEffect(() => {
    dispatch(filterByCategory([category]));
  }, [dispatch, category]);

  return (
    <>
      <div className='products-container'>
        <Filter />
        <div className='products-filtered'>
          {products.map(item => (
            <Card key={item.productId} data={item} />
          ))}
        </div>
      </div>
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

export default Products;
