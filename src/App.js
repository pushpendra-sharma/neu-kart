import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Footer, Nav } from './components';
import {
  Cart,
  Error,
  Home,
  Login,
  Products,
  RequiresAuth,
  SignUp,
  WishList,
} from './pages';
import { loginSelector } from './redux/selectors';
import './App.css';

function App() {
  const isAuth = useSelector(loginSelector);

  return (
    <div className='app' data-testid='app'>
      <ToastContainer
        position='bottom-center'
        theme='dark'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route
          path='/cart'
          element={
            <RequiresAuth isAuth={isAuth}>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route path='/products' element={<Products />} />
        <Route
          path='/wishlist'
          element={
            <RequiresAuth isAuth={isAuth}>
              <WishList />
            </RequiresAuth>
          }
        />
        <Route path='/error' element={<Error />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
