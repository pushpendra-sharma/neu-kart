export const filterProducts = (products, filters) => {
  let filteredItems = products;
  const { availability, brand, category, discount, price, rating } = filters;

  if (availability === 'yes') {
    filteredItems = filteredItems.filter(
      product => product.availability === true
    );
  }

  if (brand && brand.length > 0) {
    filteredItems = filteredItems.filter(product =>
      brand.includes(product.company)
    );
  }

  if (category && category.length > 0) {
    filteredItems = filteredItems.filter(product =>
      category.includes(product.category)
    );
  }

  if (discount) {
    filteredItems = filteredItems.filter(
      product => product.discount >= Number(discount)
    );
  }

  if (price) {
    filteredItems = filteredItems.filter(product => product.price <= price);
  }

  if (rating) {
    filteredItems = filteredItems.filter(
      product => product.rating >= Number(rating)
    );
  }

  return filteredItems;
};
