import axios from "axios"
import { REGISTER_SUCCESS, REGISTER_FAIL, 
     LOAD_USER, 
     LOGIN_SUCCESS,
     LOGIN_FAIL,
      AUTH_ERROR } from "./types";
import { setAlert } from "./alert"
import setAuthToken from "../utilities/setAuthToken"

export const loadUser = () => {
    return async (dispatch) => {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
          }
        try {
            const res = await axios.get('/api/v1/user/')
            dispatch({
                type: LOAD_USER,
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
                type: AUTH_ERROR
            })
        }
    }
}

export const signUpUser = ({ email, password }, history) => {
    return async (dispatch) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const body = JSON.stringify({ email, password})
        try {
            const res = await axios.post('/api/v1/user/', body, config)
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
            dispatch(loadUser())
            history.push('/profilepageone')
        } catch (error) {
            console.log(error)
           
            dispatch({
                type: REGISTER_FAIL 
            })
        }
    }
}

export const loginUser = ({ email, password }, history) => {
    return async (dispatch) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const body = JSON.stringify({ email, password})
        try {
            const res = await axios.post('/api/v1/user/login', body, config)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
            dispatch(loadUser())
            history.push('/dashboard/profile')
        } catch (error) {
            console.log(error)
            dispatch({
                type: LOGIN_FAIL 
            })
        }
    }
}