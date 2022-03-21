import { USER_LOGIN_FAILURE, USER_LOGIN_LOADING, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_LOADING, USER_REGISTER_FAILURE, USER_REGISTER_SUCCESS } from "./constants"

const initialState = {
    loading: false,
    userInfo: null,
    error: ''
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_LOADING: {
            return {
                loading: true,
                ...state
            }
        }
        case USER_LOGIN_SUCCESS: {
            return {
                loading: false,
                userInfo: action.payload,
                error: ''
            }
        }
        case USER_LOGIN_FAILURE: {
            return {
                loading: false,
                userInfo: null,
                error: action.payload,
            }
        }
        case USER_REGISTER_LOADING: {
            return {
                loading: true,
                ...state
            }
        }
        case USER_REGISTER_SUCCESS: {
            return {
                loading: false,
                userInfo: action.payload,
                error: ''
            }
        }
        case USER_REGISTER_FAILURE: {
            return {
                loading: false,
                userInfo: null,
                error: action.payload,

            }
        }
        case USER_LOGOUT: {
            return {
                loading: false,
                userInfo: null,
                error: '',
            }
        }

        default: return state
    }
}