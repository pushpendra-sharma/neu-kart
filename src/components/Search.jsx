import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQueryResult } from '../redux/features/searchSlice';
import Suggestions from './Suggestions';
import '../styles/Search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  const data = useSelector(state => state.search.data);
  const suggestions = data[query];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length && !suggestions) dispatch(fetchQueryResult(query));
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [suggestions, query, dispatch]);

  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  /*
  const handleInputBlur = () => {
    setShowSuggestions(false);
  };
  */

  return (
    <div className='search-container'>
      <input
        className='nav-searchbar'
        type='search'
        placeholder='Search for products, brands...'
        onChange={e => setQuery(e.target.value)}
        value={query}
        onFocus={handleInputFocus}
        // onBlur={handleInputBlur}
      ></input>
      {showSuggestions && <Suggestions data={suggestions} />}
    </div>
  );
};

export default Search;
