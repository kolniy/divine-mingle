import axios from "axios"
import setAuthToken from "../utilities/setAuthToken"
import { GET_MATCH_COUNT, GET_MATCH, MATCH_ERROR } from "./types"

export const getMatchCount = () => {
    return async (dispatch) => {
        if(localStorage.getItem("token")){
            setAuthToken(localStorage.getItem("token"))
        }

        try {
            const res = await axios.get('/api/v1/profile/matches/count')
            dispatch({
                type: GET_MATCH_COUNT,
                payload: res.data
            })
        } catch (error) {
            const errors = error.response.data.errors
            errors.forEach(error => {
                alert(error.msg)
            });
            dispatch({
                type: MATCH_ERROR,
                payload: errors
            })
        }
    }
}

export const getMatches = () => {
    return async (dispatch) => {
        if(localStorage.getItem("token")){
            setAuthToken(localStorage.getItem("token"))
        }
        try {
            const res = await axios.get('/api/v1/profile/matches')
            dispatch({
                type:GET_MATCH,
                payload: res.data
            })
        } catch (error) {
            const errors = error.response.data.errors
            errors.forEach(error => {
                alert(error.msg)
            });
            dispatch({
                type: MATCH_ERROR,
                payload: errors
            })
        }
    }
}