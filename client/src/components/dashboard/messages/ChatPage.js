import React, { useState, useEffect } from "react"
import PrivateNavbar from "../../layout/PrivateNavbar"
import Sidebar from "./Sidebar"
import Messages from "./Messages"
import { connect } from "react-redux"
import { socket } from "../../../service/socket"

const ChatWindow = ({ user }) => {
   
    const [ chatRoomDetails, setChatRoomDetails ] = useState(null)
    const [ chatRooms, setChatRooms ] = useState([])

    useEffect(() => {

        socket.on('chatRoomResults', (data) => {
            setChatRooms(data)
        })

        // here comes all the socket.on
        // listener for this page
    }, [])

    useEffect(() => {
        socket.emit('getUserRooms')
    }, [])

    const updateActiveChatRoomDetails = (data) => {
        setChatRoomDetails(data)
    }

    return <>
        <section className="messages-section">
            <PrivateNavbar />
        <div className="chat-window-container">
            <div className="chat-window">
               {
                   chatRooms.length > 0 ?
                    <Sidebar chatRooms={chatRooms} updateActiveChatRoomDetails={updateActiveChatRoomDetails} /> : 
                    <p style={{flex:0.4}} className="lead text-center">No Contacts Found</p>
               }
               <Messages chatRoomData={chatRoomDetails} />
            </div>
        </div>
        </section>
    </>
}

const mapStateToProps = (state) => ({
    user: state.auth.user
})


export default connect(mapStateToProps)(ChatWindow)