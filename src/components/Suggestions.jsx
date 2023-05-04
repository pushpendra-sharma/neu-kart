import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Search.css';

const Suggestions = ({ data, callback, isInputFocus }) => {
  const [timerId, seTimerId] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const handleSuggestionClick = id => {
    const tid = setTimeout(callback, 0);
    navigate(`/product/${id}`);
    seTimerId(tid);
  };

  useEffect(() => {
    return clearTimeout(timerId);
  }, [timerId]);

  useEffect(() => {
    setShowSuggestions(isInputFocus);
  }, [isInputFocus]);

  return showSuggestions ? (
    <div className='suggestions-container'>
      {data && data.length ? (
        <>
          {data.map(item => {
            const { id, name } = item;
            return (
              id && (
                <p
                  key={id}
                  className='suggestion'
                  onMouseDown={() => handleSuggestionClick(id)}
                >
                  {name}
                </p>
              )
            );
          })}
        </>
      ) : (
        <p className='suggestion'>No item found!</p>
      )}
    </div>
  ) : null;
};

export default Suggestions;
