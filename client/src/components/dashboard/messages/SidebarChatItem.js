import React from 'react'
// import { Link } from "react-router-dom"
import sampleImage from "../../../images/profile-test-image.jpg"
import db from "../../../firebase"

const SidebarChatItem = ({ addNewChat, id, name, updateRoom }) => {

    const createChat = () => {
        const roomName = prompt("Please enter name for the chat room")
        if(roomName){
            db.collection("rooms").add({
                name: roomName
            })
        }
    }

    return !addNewChat ? (
        <div onClick={e => updateRoom(id)} className="sidebar__chat-item">
             <div className="chat-item-img-container">
                <img className="img-fluid rounded-circle"
                    src={sampleImage}
                    alt="chat item icon display"
                />
            </div>
             <div className="chat-item-details">
                        <div className="chat-item-details-info">
                            <div className="name">
                                {name}
                            </div>
                            <div className="time">
                                9:31PM
                            </div>
                        </div>
                        <div className="chat-item-last-message-info">
                            <div className="lastmessage">
                                You are the sugar in my tea, the...
                            </div>
                            <div className="counter">
                                7
                            </div>
                </div>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className="sidebar__chat-item">
            <h2>
                Add New Chat
            </h2>
        </div>
    )
}

export default SidebarChatItem
