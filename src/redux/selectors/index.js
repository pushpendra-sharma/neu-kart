const loginSelector = state => state.user.isLoggedIn;
const userNameSelector = state => state.user.userDetails.name;
const cartItemsSelector = state => state.cart.items;
const wishListItemsSelector = state => state.wishList.items;

export {
  loginSelector,
  userNameSelector,
  wishListItemsSelector,
  cartItemsSelector,
};
