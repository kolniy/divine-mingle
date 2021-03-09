import React from "react"
import SidebarChatItem from "./SidebarChatItem"

const Sidebar = ({ chatRooms, updateActiveChatRoomDetails }) => {

    return <>
        <div className="sidebar">
            <div className="sidebar__header">
                <h4 className="sidebar__header-text">Messages</h4>
            </div>
            <div className="sidebar__chats">
            <div className="sidebar__chats-itemsContainer">
                {
                    chatRooms.map((room) => (
                        <SidebarChatItem
                            key={room._id}
                            roomData={room}
                            updateActiveRoom={updateActiveChatRoomDetails}
                        />
                    ))
                }
                </div>
            </div>
        </div>
    </>
}

export default Sidebar