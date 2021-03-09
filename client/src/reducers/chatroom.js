import { GET_USER_CHATROOMS } from "../actions/types"

const initialState = []

const chatRoomReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case GET_USER_CHATROOMS:
            return [
                ...state,
                payload
            ]
        default:
            return state
    }
}

export default chatRoomReducer