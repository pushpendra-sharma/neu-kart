import { Navigate } from 'react-router';

const RequiresAuth = ({ children, isAuth }) => {
  return isAuth ? children : <Navigate to='/login' replace />;
};

export default RequiresAuth;
