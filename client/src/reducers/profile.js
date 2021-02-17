import { UPDATE_PROFILE, GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE } from "../actions/types"

const initialState = {
    userprofile: null,
    profileLoading: true,
}

const profileReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case UPDATE_PROFILE:
             return {
                 ...state,
                 userprofile: payload,
                 profileLoading: false
             }
        case GET_PROFILE: 
             return {
                 ...state,
                 userprofile: payload,
                 profileLoading: false
             }
        case PROFILE_ERROR:
        case CLEAR_PROFILE:    
            return {
                ...state,
                userprofile: null,
                profileLoading: false
            }
        default:
            return state
    }
}

export default profileReducer