import { createStore, applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { ProductReducer } from "./containers/Product/reducer"
import { ProductListReducer } from "./containers/Dashboard/reducer"
import { CartReducer } from "./containers/Cart/reducer"
import { loginReducer } from "./containers/Login/reducer"
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory({
    basename: '/',
    hashType: 'noslash'
})

const reducer = (history) => combineReducers({
    router: connectRouter(history),
    Cart: CartReducer,
    Product: ProductReducer,
    ProductList: ProductListReducer,
    login: loginReducer,
})

const middleware = [thunk]

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const initialState = { Cart: { cartItems: cartItems }, login: { loading: false, error: '', userInfo: userInfo } }

const store = createStore(reducer(history), initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store