import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/homepage/Home';
import Login from './pages/login/Login';
import Cart from './pages/cart/Cart';
import Products from './pages/products/Products';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
