import CheckBox from './CheckBox';
import InputRange from './InputRange';
import RadioInput from './RadioInput';
import {
  categories,
  discounts,
  customerRatings,
  radioInputOptions,
  sortOptions,
  mobileBrands,
} from '../mockData';
import '../styles/Filter.css';
import { useState } from 'react';

const Filter = () => {
  const brands = mobileBrands;

  const [active, setActive] = useState(true);

  return (
    <>
      <div className='filter-nav'>
        <div className='filter-heading-container'>
          <h3 className='filter-heading'>Filters</h3>
          {active ? (
            <span
              class='material-symbols-outlined toggle-filter'
              onClick={() => setActive(!active)}
            >
              expand_less
            </span>
          ) : (
            <span
              class='material-symbols-outlined toggle-filter'
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
            <CheckBox title='RATING' id='rating' options={customerRatings} />
            <CheckBox title='Discounts' id='discount' options={discounts} />
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
