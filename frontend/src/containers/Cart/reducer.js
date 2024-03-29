import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./constants"

const initialState = {
    cartItems: []
}

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ADD_ITEM: {
            const item = action.payload
            const existItems = state.cartItems.find(x => x.product === item.product)
            if (existItems) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existItems.product ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        }
        case CART_REMOVE_ITEM: {
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload)
            }
        }

        default: return state
    }
}