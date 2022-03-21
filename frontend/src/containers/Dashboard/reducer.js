import { PRODUCTLIST_FAILURE, PRODUCTLIST_LOADING, PRODUCTLIST_SUCCESS } from "./constants"

const initialState = {
    loading: false,
    products: [],
    error: ''
}

export const ProductListReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTLIST_LOADING: {
            return {
                loading: true,
                products: [],
                error: ''
            }
        }
        case PRODUCTLIST_SUCCESS: {
            return {
                loading: false, products: action.payload, error: ''
            }
        }
        case PRODUCTLIST_FAILURE: {
            return {
                loading: false, products: [], error: action.payload
            }
        }
        default: return state
    }
}