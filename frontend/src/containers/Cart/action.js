import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./constants"

export const CartAction = (id, qty) => async (dispatch, getState) => {
    axios.get(`/api/product/${id}`).then(resp => {
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                product: resp.data._id,
                name: resp.data.name,
                price: resp.data.price,
                image: resp.data.image,
                countInStock: resp.data.countInStock,
                qty: qty
            }
        })
        localStorage.setItem('cartItems', JSON.stringify(getState().Cart.cartItems))
    }).catch(er => {

    })
}

export const RemoveCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().Cart.cartItems))
}