import io from "socket.io-client"

const server = "http://localhost:4000"

export const socket = io(server, {
    query: {
        token: localStorage.getItem("token")
    }
})

