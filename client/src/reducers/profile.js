import { UPDATE_PROFILE, GET_PROFILE, PROFILE_ERROR } from "../actions/types"

const initialState = {
    userprofile: null,
    loading: true,
}

const profileReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case UPDATE_PROFILE:
             return {
                 ...state,
                 userprofile: payload,
                 loading: false
             }
        case GET_PROFILE: 
             return {
                 ...state,
                 userprofile: payload,
                 loading: false
             }
        case PROFILE_ERROR:
            return {
                ...state,
                userprofile: null,
                loading: false
            }
        default:
            return state
    }
}

export default profileReducer