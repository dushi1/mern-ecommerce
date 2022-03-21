import { PRODUCT_FAILURE, PRODUCT_LOADING, PRODUCT_SUCCESS } from "./constants"

const initialState = {
    loading: false,
    product: {
        _id: '',
        name: '',
        image: '',
        description: '',
        brand: '',
        category: '',
        price: 0,
        countInStock: 0,
        rating: 0,
        numReviews: 0,
    },
    error: ''
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_LOADING: {
            return {
                ...initialState,
                loading: true,
            }
        }
        case PRODUCT_SUCCESS: {
            return {
                loading: false, product: action.payload, error: ''
            }
        }
        case PRODUCT_FAILURE: {
            return {
                loading: false, product: {}, error: action.payload
            }
        }
        default: return state
    }
}