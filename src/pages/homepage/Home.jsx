import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../redux/features/productSlice';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <main className='main-container'>
      <header className='main-header-item'>
        <img
          className='hero-img'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/katariy/BAU/OP_Dec/D24582943_IN_WL_Category_Page_1500x400.gif'
          alt='hero'
        />
        {/* <h2 className='hero-heading'>
            Get top deals on Mobiles and Electronics.
          </h2> */}
      </header>

      <div className='main-item'>
        <Link to='/products/Mobile' className='section'>
          <img
            src='https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            alt='mobile'
            className='section-photo'
          />
          <h2 className='section-desc'>Top selling Mobiles</h2>
          <p className='section-offer'>upto 20% off</p>
        </Link>

        <Link to='/products/Laptop' className='section'>
          <img
            src='https://images.pexels.com/photos/955405/pexels-photo-955405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            alt='electronics'
            className='section-photo'
          />
          <h2 className='section-desc'>Best Laptops deals</h2>
          <p className='section-offer'>with extended warranty offer</p>
        </Link>
      </div>
    </main>
  );
};

export default Home;
