import axios from "axios"
import { PRODUCTLIST_FAILURE, PRODUCTLIST_LOADING, PRODUCTLIST_SUCCESS } from "./constants"

export const ProductListAction = () => async (dispatch) => {
    dispatch({ type: PRODUCTLIST_LOADING })
    axios.get('/api/product', {
        timeout: 1000
    }).then(resp => {
        console.log('Then block');
        dispatch({ type: PRODUCTLIST_SUCCESS, payload: resp.data })
    }).catch(er => {
        console.log('Catch block');
        dispatch({
            type: PRODUCTLIST_FAILURE,
            payload: er.response.message
        })
    })
}