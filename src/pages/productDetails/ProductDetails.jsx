import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { allProductsSelector } from '../../redux/selectors';
import ProductDetailsCard from './ProductDetailsCard';

const ProductDetails = () => {
  const allProducts = useSelector(allProductsSelector);
  const { productId } = useParams();

  const navigate = useNavigate();

  const productDetails = allProducts.find(item => item._id === productId);

  if (!productId || !productDetails) {
    navigate('error');
  }

  return (
    <>{productDetails ? <ProductDetailsCard data={productDetails} /> : null}</>
  );
};

export default ProductDetails;
