import React from 'react'
import sampleImage from "../../../images/profile-test-image.jpg"

const SidebarChatItem = ({ addNewChat }) => {

    const createChat = () => {
        const roomName = prompt("Please enter name for chat")
        if(roomName){
            
        }
    }

    return !addNewChat ? (
        <div className="sidebar__chat-item">
             <div className="chat-item-img-container">
                <img className="img-fluid rounded-circle"
                    src={sampleImage}
                    alt="chat item icon display"
                />
            </div>
             <div className="chat-item-details">
                        <div className="chat-item-details-info">
                            <div className="name">
                                Jim Iyke
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
