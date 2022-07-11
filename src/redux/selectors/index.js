const loginSelector = state => state.user.isLoggedIn;
const userNameSelector = state => state.user.userDetails.name;

export { loginSelector, userNameSelector };
