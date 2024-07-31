import { useEffect, useState } from 'react';

export default function useFilter(allItems, filters) {
  const [filterdItems, setFilteredItems] = useState(allItems);
  const { category, brand, availability, price, rating, discount } = filters;

  useEffect(() => {
    if (brand.length) {
      setFilteredItems(items =>
        items.filter(item => brand.includes(item.company))
      );
    } else if (brand.length === 0) {
      setFilteredItems(items =>
        items.filter(item => brand.includes(item.company))
      );
    } else {
      setFilteredItems(array => array);
    }
  }, [brand]);

  useEffect(() => {
    console.log(':::category:::', category);
    if (category.length) {
      setFilteredItems(items =>
        items.filter(item => category.includes(item.category))
      );
    } else {
      setFilteredItems(array => array);
    }
  }, [category]);

  useEffect(() => {
    console.log(':::rating:::', rating);
    setFilteredItems(items => items.filter(item => item.rating >= rating));
  }, [rating]);

  useEffect(() => {
    console.log(':::discount:::', discount);
    setFilteredItems(items => items.filter(item => item.discount >= discount));
  }, [discount]);

  useEffect(() => {
    console.log(':::price:::', price);
    setFilteredItems(items => items.filter(item => item.price <= price));
  }, [price]);

  useEffect(() => {
    console.log(':::availability:::', availability);
    if (availability === 'yes') {
      setFilteredItems(items =>
        items.filter(item => item.availability === true)
      );
    } else {
      console.log(':::availability:::', availability);
      setFilteredItems(array => array);
    }
  }, [availability]);

  return filterdItems;
}

