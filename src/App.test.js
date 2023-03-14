import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { render, screen } from '@testing-library/react';
import App from './App';
import store from './redux/store';

test('renders learn react link', () => {
  render(
    <StaticRouter location={'/'}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );
  const app = screen.getByTestId('app');
  expect(app).toBeInTheDocument();
});
