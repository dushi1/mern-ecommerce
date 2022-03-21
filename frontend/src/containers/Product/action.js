import axios from "axios"
import { PRODUCT_FAILURE, PRODUCT_LOADING, PRODUCT_SUCCESS } from "./constants"

export const ProductAction = (id) => async (dispatch) => {
    dispatch({ type: PRODUCT_LOADING })
    axios.get(`/api/product/${id}`).then(resp => {
        dispatch({ type: PRODUCT_SUCCESS, payload: resp.data })
    }).catch(er => {

        dispatch({
            type: PRODUCT_FAILURE,
            payload: er.response.message
        })
    })
}