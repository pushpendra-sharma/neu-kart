import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CheckBox, InputRange, RadioInput } from './index';
import '../styles/Filter.css';
import { filtersBySlector } from '../redux/selectors';
import {
  categories,
  discounts,
  customerRatings,
  radioInputOptions,
  sortOptions,
  mobileBrands,
  laptopBrands,
} from '../utils/utils';
import useWindowDimensions from '../utils/useWindowDimensions';

const Filter = () => {
  const [brands, setBrands] = useState([...mobileBrands, ...laptopBrands]);

  const { category } = useSelector(filtersBySlector);

  const [active, setActive] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width >= 768) {
      setActive(true);
    }
  }, [width]);

  useEffect(() => {
    if (category.length === 1 && category.includes('Mobile')) {
      setBrands(mobileBrands);
    } else if (category.length === 1 && category.includes('Laptop')) {
      setBrands(laptopBrands);
    } else setBrands([...mobileBrands, ...laptopBrands]);
  }, [category]);

  return (
    <>
      <div className='filter-nav'>
        <div className='filter-heading-container'>
          <h3 className='filter-heading'>Filters</h3>
          {active ? (
            <span
              className='material-symbols-outlined toggle-filter'
              onClick={() => setActive(!active)}
            >
              expand_less
            </span>
          ) : (
            <span
              className='material-symbols-outlined toggle-filter'
              onClick={() => setActive(!active)}
            >
              expand_more
            </span>
          )}
        </div>
        {active && (
          <>
            <CheckBox title='Category' id='category' options={categories} />
            <InputRange title='PRICE' id='price' />
            <CheckBox title='BRAND' id='brand' options={brands} />
            <RadioInput title='RATING' id='rating' options={customerRatings} />
            <RadioInput title='Discounts' id='discount' options={discounts} />
            <RadioInput
              title='AVAILABILITY'
              id='availability'
              options={radioInputOptions}
            />
            <RadioInput title='Sort By' id='sort' options={sortOptions} />
          </>
        )}
      </div>
    </>
  );
};

export default Filter;
