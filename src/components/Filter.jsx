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
  laptopBrands,
} from '../mockData';
import '../styles/Filter.css';

const Filter = () => {
  const handleChange = () => {
    console.log(laptopBrands);
  };

  const brands = mobileBrands;

  return (
    <div className='filter-nav'>
      <div className='filter-container'>
        <h3 className='filter-heading'>Filters</h3>
      </div>
      <CheckBox
        title='Category'
        id='ratings'
        options={categories}
        onChange={handleChange}
      />
      <InputRange title='PRICE' />
      <CheckBox
        title='BRAND'
        id='brand'
        options={brands}
        onChange={handleChange}
      />
      <CheckBox
        title='RATING'
        id='rating'
        options={customerRatings}
        onChange={handleChange}
      />
      <CheckBox
        title='Discounts'
        id='discounts'
        options={discounts}
        onChange={handleChange}
      />
      <RadioInput
        title='AVAILABILITY'
        id='availability'
        options={radioInputOptions}
        onChange={handleChange}
      />
      <RadioInput
        title='Sort By'
        id='sort'
        options={sortOptions}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
