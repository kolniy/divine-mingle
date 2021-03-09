import { combineReducers } from "redux"
import auth from "./auth"
import alert from "./alert"
import profile from "./profile"
import matches from "./matches"
import chatroom from "./chatroom"

export default combineReducers({
    auth,
    alert,
    profile,
    matches,
    chatroom
})
