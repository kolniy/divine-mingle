import { GET_MATCH_COUNT, GET_MATCH, CLEAR_MATCH, MATCH_ERROR } from "../actions/types"

const initialState = {
    userMatches:[],
    loading:true,
    countLoading:true,
    matchCount:0,
    error:null
}

const matchReducer = (state = initialState, action) => {
        const { type, payload } = action

        switch (type) {
            case GET_MATCH_COUNT:
                return {
                    ...state,
                    matchCount: payload.matchCount,
                    countLoading: false
                }
            case GET_MATCH:
                return {
                    ...state,
                    userMatches:payload,
                    loading:false
                }   
            case MATCH_ERROR:
            case CLEAR_MATCH:    
                return {
                    ...state,
                    loading: false,
                    error: payload,
                    userMatches:[],
                    matchCount:0,
                }     
            default:
                return state
        }
}

export default matchReducer

