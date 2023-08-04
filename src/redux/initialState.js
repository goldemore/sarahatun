export const initialState = {
  usersList: [],
  loggedInUser: {},
  getMessagesListValue: [],
  getProductsListValue: [],
  getRetriveProductValue: {},

  basket: JSON.parse(localStorage.getItem("basketList")) || [],
  basketCount: 0,
};
