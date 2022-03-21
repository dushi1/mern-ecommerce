import axios from "axios"
import { PROFILE_FAILURE, PROFILE_LOADING, PROFILE_SUCCESS } from "./constants"

export const ProfileAction = () => async (dispatch, getState) => {

    const token = getState().login.userInfo.token

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    dispatch({ type: PROFILE_LOADING })
    axios.get(`/api/user/profile`, config
    ).then(resp => {
        dispatch({ type: PROFILE_SUCCESS, payload: resp.data })
    }).catch(er => {
        dispatch({
            type: PROFILE_FAILURE,
            payload: er.response.message
        })
    })
}


export const ProfileChangeAction = (name, email, password) => async (dispatch, getState) => {

    const token = getState().login.userInfo.token

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    dispatch({ type: PROFILE_LOADING })
    axios.put(`/api/user/profile`, {
        name: name,
        email, email,
        password: password
    }, config
    ).then(resp => {
        dispatch({ type: PROFILE_SUCCESS, payload: resp.data })
    }).catch(er => {
        dispatch({
            type: PROFILE_FAILURE,
            payload: er.response.message
        })
    })
}