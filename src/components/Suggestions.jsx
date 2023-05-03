import { Link } from 'react-router-dom';
import '../styles/Search.css';

const Suggestions = ({ data }) => {
  return (
    <div className='suggestions-container'>
      {data && data.length ? (
        <>
          {data.map(item => {
            const { id, name } = item;
            return (
              id && (
                <Link
                  to={`/product/${id}`}
                  key={id}
                  replace={true}
                  className='product-link'
                >
                  <p className='suggestion'>{name}</p>
                </Link>
              )
            );
          })}
        </>
      ) : (
        <p className='suggestion'>No item found!</p>
      )}
    </div>
  );
};

export default Suggestions;
