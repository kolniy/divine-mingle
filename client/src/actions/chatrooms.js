import { GET_USER_CHATROOMS } from "./types"

export const getUserChatRooms = (socket) => {
    return (dispatch, state) => {
        socket.emit('userRooms')
        socket.on('userSpecificRooms', (data) => {
            dispatch({
                type: GET_USER_CHATROOMS,
                payload: data.room
            })
        console.log(data.sentBy)
        })
    }
}

