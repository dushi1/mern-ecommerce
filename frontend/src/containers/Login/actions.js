import axios from "axios"
import { USER_LOGIN_FAILURE, USER_LOGIN_LOADING, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAILURE, USER_REGISTER_LOADING, USER_REGISTER_SUCCESS } from "./constants"

export const login = (email, password) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    dispatch({ type: USER_LOGIN_LOADING })
    axios.post('/api/user/login', {
        email: email,
        password: password
    }, config).then(resp => {
        console.log(resp.data);
        localStorage.setItem('userInfo', JSON.stringify(resp.data))
        dispatch({ type: USER_LOGIN_SUCCESS, payload: resp.data })
    }).catch(er => {
        console.log(er.response.data.message);
        dispatch({ type: USER_LOGIN_FAILURE, payload: er.response.data.message })
        localStorage.removeItem('userInfo')
    })

}

export const register = (name, email, password) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    dispatch({ type: USER_REGISTER_LOADING })
    axios.post('/api/user/register', {
        name: name,
        email: email,
        password: password
    }, config).then(resp => {
        console.log(resp.data);
        localStorage.setItem('userInfo', JSON.stringify(resp.data))
        dispatch({ type: USER_REGISTER_SUCCESS, payload: resp.data })
    }).catch(er => {
        console.log(er);
        dispatch({ type: USER_REGISTER_FAILURE, payload: er.response.message })
        localStorage.removeItem('userInfo')
    })

}

export const logout = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT })
    localStorage.removeItem('userInfo')
}