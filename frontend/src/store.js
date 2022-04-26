import { configureStore } from "@reduxjs/toolkit";
//import { composeWithDevTools } from "redux-devtools-extension";
import { ProductReducer } from "./containers/Product/reducer";
import { ProductListReducer } from "./containers/Dashboard/reducer";
import { CartReducer } from "./containers/Cart/reducer";
import { loginReducer } from "./containers/Login/reducer";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory({
  basename: "/",
  hashType: "noslash",
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  Cart: { cartItems: cartItems },
  login: { loading: false, error: "", userInfo: userInfo },
};

const store = configureStore({
  reducer: {
    Cart: CartReducer,
    Product: ProductReducer,
    ProductList: ProductListReducer,
    login: loginReducer,
  },
  initialState,
});

export default store;
