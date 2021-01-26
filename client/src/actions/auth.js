import axios from "axios"
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";
import { setAlert } from "./alert"

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
            dispatch(setAlert('User Created Successfully', 'success'))
            history.push('/profilepageone')
        } catch (error) {
            const errors = error.response.data.errors

            if(errors){
                errors.forEach(error => {
                    dispatch(setAlert(error.msg, "danger"))
                });
            }
            dispatch({
                type: REGISTER_FAIL 
            })
        }
    }
}