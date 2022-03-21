import { PROFILE_FAILURE, PROFILE_LOADING, PROFILE_SUCCESS } from "./constants"

const initialState = {
    loading: false,
    profile: {
        "_id": "",
        "name": "",
        "email": "",
    },
    error: ''
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_LOADING: {
            return {
                ...initialState,
                loading: true,
            }
        }
        case PROFILE_SUCCESS: {
            return {
                loading: false, profile: action.payload, error: ''
            }
        }
        case PROFILE_FAILURE: {
            return {
                loading: false, profile: {}, error: action.payload
            }
        }
        default: return state
    }
}