import { UPDATE_PROFILE,
     GET_PROFILE,
    PROFILE_ERROR, 
    CLEAR_PROFILE,
    GET_OTHER_USERS_PROFILE,
    CLEAR_OTHER_USERS_PROFILE,
    OTHER_USERS_PROFILE_ERROR
} from "../actions/types"

const initialState = {
    userprofile: null,
    profileLoading: true,
    otherUserProfile: null,
    otherUserProfileLoading:true
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
        case GET_OTHER_USERS_PROFILE:
            return {
                ...state,
                otherUserProfileLoading:false,
                otherUserProfile: payload
            } 
        case OTHER_USERS_PROFILE_ERROR:
        case CLEAR_OTHER_USERS_PROFILE:
            return {
                ...state,
                otherUserProfileLoading:false,
                otherUserProfile: null
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