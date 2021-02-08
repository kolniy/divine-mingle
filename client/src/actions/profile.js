import axios from "axios"
import setAuthToken from "../utilities/setAuthToken"
import { GET_PROFILE, UPDATE_PROFILE, PROFILE_ERROR} from "./types"
import { setAlert } from "./alert"

export const getProfile = () => {
    return async (dispatch) => {
        if(localStorage.getItem("token")){
            setAuthToken(localStorage.getItem("token"))
        }
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const res = await axios.get('/api/v1/profile/me', config)
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        } catch (error) {
            const errors = error.response.data.errors

            if(errors){
                errors.forEach(error => {
                    dispatch(setAlert(error.msg, "danger"))
                });
            }
            dispatch({
                type: PROFILE_ERROR
            })
        }
    }
}

export const updateOrCreateUserProfile = (profileData, history, routeTo) => {
    return async (dispatch) => {
        setAuthToken(localStorage.getItem("token"))
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const body = JSON.stringify(profileData)
        try {
            const res = await axios.post('/api/v1/profile', body, config)
            dispatch({
                type: UPDATE_PROFILE,
                payload: res.data
            })
            history.push(`/${routeTo}`)
        } catch (error) {
            const errors = error.response.data.errors

            if(errors){
                errors.forEach(error => {
                    dispatch(setAlert(error.msg, "danger"))
                });
            }
            dispatch({
                type: PROFILE_ERROR
            })
        }
    }
}

export const uploadProfileImage = (imageFormData, history, routeTo) => {
    return async (dispatch) => {
        if(localStorage.getItem("token")){
            setAuthToken(localStorage.getItem("token"))
        }
        const config = {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        }
        const body = imageFormData
        try {
        const res = await axios.put('/api/v1/profile/image/upload', body, config)
         dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
            })
            history.push(`/${routeTo}`)
        } catch (error) {
            const errors = error.response.data.errors

            if(errors){
                errors.forEach(error => {
                    dispatch(setAlert(error.msg, "danger"))
                });
            }
            dispatch({
                type: PROFILE_ERROR
            })
        }
    }
}