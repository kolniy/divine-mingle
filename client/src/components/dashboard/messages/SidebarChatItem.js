import React from 'react'
import { connect } from "react-redux"

const SidebarChatItem = ({ roomData: {
    createdBy, createdWith, name, _id,
} , updateActiveRoom, user }) => {

    return  <>
        <div onClick={e => updateActiveRoom({
            name: createdBy.createdById !== user._id ? createdBy.name : createdWith.name,
            profilepic:  createdBy.createdById !== user._id ? createdBy.profilepic : createdWith.profilepic,
            chatRoomId: _id,
            reciepientId: createdBy.createdById !== user._id ? createdBy.createdById : createdWith.createdWithId
        })} className="sidebar__chat-item">
             <div className="chat-item-img-container">
                <img className="img-fluid rounded-circle"
                    src={
                        createdBy.createdById !== user._id ? createdBy.profilepic : createdWith.profilepic
                    }
                    alt="chat item icon display"
                />
            </div>
             <div className="chat-item-details">
                        <div className="chat-item-details-info">
                            <div className="name">
                                {
                                    createdBy.createdById !== user._id ? createdBy.name : createdWith.name
                                }
                            </div>
                            <div className="time">
                               9:32 PM
                            </div>
                        </div>
                        <div className="chat-item-last-message-info">
                            <div className="lastmessage">
                                {/* {
                                    messages.length > 1 && (
                                    messages[0]?.message.split(" ").length <= 4 ? messages[0]?.message : `${messages[0].message.split(" ")[0]} ${messages[0].message.split(" ")[1]} ${messages[0].message.split(" ")[2]} ${messages[0].message.split(" ")[3]}...`
                                    )
                                }  */}
                                welcome to our chat room
                            </div>
                            <div className="counter">
                                7
                            </div>
                </div>
            </div>
        </div>
        </>
}

const mapStateToProps = (state) => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(SidebarChatItem)
