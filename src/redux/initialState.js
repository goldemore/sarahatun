export const initialState = {
  usersList: [],
  loggedInUser: {},
  getProductsListValue: [],
  getRetriveProductValue: {},
  basket: JSON.parse(localStorage.getItem("basketList")) || [], 
  basketCount: 0,
  getFavoriteListValue:[],
  getMyFavoriteListValue:[], 
  colorValue:{},
  sizeValue:{},
  myOrderIDvalue:[],
  myOrderItemsValue:[],
  categoryListValue:[],
  myOrderItemsAddress:[],
  
  
};
