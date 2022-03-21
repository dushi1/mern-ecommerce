import axios from "axios"
import { PRODUCTLIST_FAILURE, PRODUCTLIST_LOADING, PRODUCTLIST_SUCCESS } from "./constants"

export const ProductListAction = () => async (dispatch) => {
    dispatch({ type: PRODUCTLIST_LOADING })
    axios.get('/api/product').then(resp => {
        dispatch({ type: PRODUCTLIST_SUCCESS, payload: resp.data })
    }).catch(er => {

        dispatch({
            type: PRODUCTLIST_FAILURE,
            payload: er.response.message
        })
    })
}