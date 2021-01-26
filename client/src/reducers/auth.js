import { REGISTER_SUCCESS,
    REGISTER_FAIL
    // LOGIN_SUCCESS,
    // LOGIN_FAIL, 
    // LOAD_USER,
    // AUTH_ERROR, 
    // LOGOUT 
} from "../actions/types"

const initialState = {
    token: localStorage.getItem('token') !== null ? localStorage.getItem('token') : "",
    authenticated: false,
    loading: true,
    user: null
}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case REGISTER_SUCCESS:
            localStorage.setItem("token", payload.token)
            return {
                ...state,
                authenticated: true,
                loading: false,
                token: payload.token
            }
        case REGISTER_FAIL:
            localStorage.removeItem("token") 
            return {
                ...state,
                authenticated: false,
                loading: false,
                token: null
            }   
        default:
           return state
    }
}

export default authReducer