const loginSelector = state => state.user.isLoggedIn;
const userNameSelector = state => state.user.userDetails.name;
const cartItemsSelector = state => state.cart.items;
const wishListItemsSelector = state => state.wishList.items;
const allProductsSelector = state => state.products.items;
const filteredProductsSelector = state => state.products.filterdItems;
const filtersBySlector = state => state.products.filterBy;
const filtersByCategorySlector = state => state.products.filterBy.category;

export {
  loginSelector,
  userNameSelector,
  wishListItemsSelector,
  cartItemsSelector,
  allProductsSelector,
  filteredProductsSelector,
  filtersBySlector,
  filtersByCategorySlector,
};
